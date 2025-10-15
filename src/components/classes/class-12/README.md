# Class 12 – Mongoose in Practice: Modeling, Validation & Relationships

## Class Overview (50 minutes)

Class 12 takes MongoDB theory and puts it into practice with Express and Mongoose. You've learned about data modeling patterns in the previous class — now you'll implement them in real code. This is where database concepts become working APIs.

- **Prerequisites**: MongoDB basics, Mongoose setup, understanding of data modeling patterns
- **Scope**: Mongoose schemas, validation, relationships, populate(), REST API implementation
- **Outcome**: Students can build production-ready APIs with proper data modeling and validation

---

## Section 0: From Theory to Practice (5 minutes)

### 0.1 The Bridge

**What We Learned Last Class:**
- Data modeling patterns (embedding vs referencing)
- When to use each pattern
- The "why" behind design decisions

**What We're Building Today:**
- Mongoose schemas with validation
- One-to-many relationships with .populate()
- A complete User → Posts REST API
- Real-world implementation patterns

### 0.2 Today's Goals

By the end of this class, you will:
1. ✅ Set up Mongoose schemas with proper validation
2. ✅ Implement one-to-many relationships using references
3. ✅ Use .populate() to join data across collections
4. ✅ Build three REST API endpoints with validation
5. ✅ Understand the difference between embedding and referencing in practice

---

## Section 1: Setting Up Mongoose (5 minutes)

### 1.1 Installation

```bash
npm install mongoose
```

### 1.2 Connecting to MongoDB

**db.js**
```javascript
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
```

**server.js**
```javascript
require('dotenv').config();
const express = require('express');
const connectDB = require('./db');

const app = express();
app.use(express.json());

// Connect to database
connectDB();

// Routes will go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

**.env**
```
MONGODB_URI=mongodb://localhost:27017/user-posts-db
PORT=3000
```

---

## Section 2: Defining Schemas and Models (10 minutes)

### 2.1 What is a Schema?

A **schema** defines the structure of documents in a collection:
- What fields exist
- Data types for each field
- Validation rules
- Default values
- Indexes

### 2.2 Schema Types

**Common Types:**
- `String` - Text data
- `Number` - Integers and decimals
- `Boolean` - true/false
- `Date` - Timestamps
- `ObjectId` - References to other documents
- `Array` - Lists of items
- `Mixed` - Any type (avoid when possible)

### 2.3 Basic User Schema

**models/User.js**
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  createdAt: Date
});

const User = mongoose.model('User', userSchema);
module.exports = User;
```

### 2.4 Schema with Validation

**models/User.js (with validation)**
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters'],
    maxlength: [20, 'Username cannot exceed 20 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  age: {
    type: Number,
    min: [13, 'Must be at least 13 years old'],
    max: [120, 'Age must be realistic']
  }
}, { timestamps: true });  // Adds createdAt and updatedAt automatically

const User = mongoose.model('User', userSchema);
module.exports = User;
```

**Validation Options:**
- `required` - Field must be provided
- `unique` - No duplicates allowed
- `minlength/maxlength` - String length constraints
- `min/max` - Number range constraints
- `enum` - Value must be from a list
- `match` - Must match regex pattern
- `trim` - Remove whitespace
- `lowercase/uppercase` - Transform text

### 2.5 Default Values

```javascript
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'  // Default to draft
  },
  views: {
    type: Number,
    default: 0  // Start at 0
  },
  tags: {
    type: [String],
    default: []  // Empty array by default
  }
}, { timestamps: true });
```

### 2.6 Virtuals - Computed Properties

Virtuals are document properties that don't get saved to MongoDB. They're calculated on-the-fly.

```javascript
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

// Create virtual for full name
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Usage:
const user = new User({ firstName: 'Alice', lastName: 'Johnson' });
console.log(user.fullName);  // "Alice Johnson"
// fullName is NOT stored in the database!
```

**Why Use Virtuals?**
- Save database space
- Keep data DRY (Don't Repeat Yourself)
- Compute values on demand
- No duplication risk

---

## Section 3: Relationships in Practice (12 minutes)

### 3.1 The Two Approaches

**1. Embedding** - Store related data inside the document
```javascript
{
  name: "Alice",
  addresses: [
    { street: "123 Main St", city: "Boston" },
    { street: "456 Work Ave", city: "Cambridge" }
  ]
}
```

**2. Referencing** - Store references to other documents
```javascript
// User document
{ _id: ObjectId("123"), name: "Alice" }

// Post document
{ title: "My Post", author: ObjectId("123") }
```

### 3.2 One-to-Few: Embedding (Small, Bounded Arrays)

**When to Use:**
- 1-10 related items
- Items always accessed together
- Items won't grow unbounded

**Example: User with Addresses**

```javascript
// Address subdocument schema
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
  type: { type: String, enum: ['home', 'work', 'other'] }
});

// User schema with embedded addresses
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  addresses: [addressSchema]  // Embedded array
});

// Create user with addresses
const user = new User({
  username: "alice",
  email: "alice@example.com",
  addresses: [
    { street: "123 Main St", city: "Boston", type: "home" },
    { street: "456 Work Ave", city: "Cambridge", type: "work" }
  ]
});

await user.save();  // Saves everything in one document!

// Query user with addresses (ONE query)
const foundUser = await User.findById(userId);
console.log(foundUser.addresses);  // Already here!
```

**Pros:**
- Fast reads (one query)
- Atomic updates (all-or-nothing)
- Related data always consistent

**Cons:**
- Limited by 16MB document size
- Not ideal for unbounded arrays

### 3.3 One-to-Many: Referencing (Many or Unbounded Items)

**When to Use:**
- Many related items (100+)
- Items can grow unbounded
- Items accessed independently

**Example: User → Posts**

**models/User.js**
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
```

**models/Post.js**
```javascript
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,  // Reference!
    ref: 'User',  // Links to User model
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
```

**Key Points:**
- `type: mongoose.Schema.Types.ObjectId` - This is a reference
- `ref: 'User'` - Points to the User model
- Author is stored as just an ID in the Post document

### 3.4 Populate - The Magic of Joining

`.populate()` automatically fetches referenced documents and replaces ObjectIds with actual data.

**Without Populate:**
```javascript
const post = await Post.findById(postId);
console.log(post);
// {
//   title: "My Post",
//   author: ObjectId("507f1f77bcf86cd799439011")  // Just an ID!
// }
```

**With Populate:**
```javascript
const post = await Post.findById(postId).populate('author');
console.log(post);
// {
//   title: "My Post",
//   author: {  // Full user object!
//     _id: ObjectId("507f1f77bcf86cd799439011"),
//     username: "alice",
//     email: "alice@example.com"
//   }
// }
```

### 3.5 Selective Population

You can choose which fields to populate:

```javascript
// Only populate username and email, exclude _id
const post = await Post.findById(postId)
  .populate('author', 'username email -_id');

// Result:
// {
//   title: "My Post",
//   author: {
//     username: "alice",
//     email: "alice@example.com"
//   }
// }
```

**Advanced Populate Options:**
```javascript
const posts = await Post.find()
  .populate({
    path: 'author',
    select: 'username email',
    match: { isActive: true },  // Only populate if user is active
    options: { sort: { username: 1 } }
  });
```

### 3.6 Populate Multiple Fields

```javascript
const post = await Post.findById(postId)
  .populate('author', 'username email')
  .populate('comments', 'text createdAt');
```

---

## Section 4: Building the REST API (15 minutes)

### 4.1 Project Setup

```bash
mkdir user-posts-api
cd user-posts-api
npm init -y
npm install express mongoose dotenv

# Create folders
mkdir models routes
touch server.js .env
```

### 4.2 Complete Server Setup

**server.js**
```javascript
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Import routes
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

// Use routes
app.use('/api', postRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

### 4.3 Endpoint 1: GET All Posts (with Author Populated)

**routes/posts.js**
```javascript
const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// GET all posts with author populated
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'username email')  // Include author info
      .sort({ createdAt: -1 })  // Newest first
      .limit(20);  // Limit to 20 posts
    
    res.json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
```

**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Introduction to MongoDB",
      "content": "MongoDB is a NoSQL database...",
      "author": {
        "_id": "507f191e810c19729de860ea",
        "username": "alice",
        "email": "alice@example.com"
      },
      "createdAt": "2024-10-14T10:30:00.000Z",
      "updatedAt": "2024-10-14T10:30:00.000Z"
    }
  ]
}
```

### 4.4 Endpoint 2: POST New Post (with Validation)

**routes/posts.js** (add to existing file)
```javascript
// POST new post with validation
router.post('/posts', async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    
    // Validation
    if (!title || !content || !authorId) {
      return res.status(400).json({
        success: false,
        error: 'Please provide title, content, and authorId'
      });
    }
    
    // Create post
    const post = await Post.create({
      title,
      content,
      author: authorId
    });
    
    // Populate author before sending response
    await post.populate('author', 'username email');
    
    res.status(201).json({
      success: true,
      data: post
    });
  } catch (error) {
    // Handle validation errors from Mongoose
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        error: error.message
      });
    }
    
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});
```

**Request:**
```http
POST /api/posts
Content-Type: application/json

{
  "title": "My First Post",
  "content": "This is the content of my post.",
  "authorId": "507f191e810c19729de860ea"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "My First Post",
    "content": "This is the content of my post.",
    "author": {
      "_id": "507f191e810c19729de860ea",
      "username": "alice",
      "email": "alice@example.com"
    },
    "createdAt": "2024-10-14T10:30:00.000Z",
    "updatedAt": "2024-10-14T10:30:00.000Z"
  }
}
```

### 4.5 Endpoint 3: GET User with Post Summary

**routes/users.js**
```javascript
const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const router = express.Router();

// GET user with their posts
router.get('/users/:id', async (req, res) => {
  try {
    // Get user
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    // Get user's posts (embedded summary)
    const posts = await Post.find({ author: user._id })
      .select('title createdAt')  // Only title and date
      .sort({ createdAt: -1 })
      .limit(5);  // Latest 5 posts
    
    // Get total post count
    const totalPosts = await Post.countDocuments({ author: user._id });
    
    res.json({
      success: true,
      data: {
        user,
        stats: {
          totalPosts
        },
        recentPosts: posts
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// POST create new user
router.post('/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    
    const user = await User.create({ username, email });
    
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'Username or email already exists'
      });
    }
    
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "_id": "507f191e810c19729de860ea",
      "username": "alice",
      "email": "alice@example.com",
      "createdAt": "2024-10-01T08:00:00.000Z",
      "updatedAt": "2024-10-01T08:00:00.000Z"
    },
    "stats": {
      "totalPosts": 15
    },
    "recentPosts": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "title": "My Latest Post",
        "createdAt": "2024-10-14T10:30:00.000Z"
      },
      {
        "_id": "507f1f77bcf86cd799439012",
        "title": "Previous Post",
        "createdAt": "2024-10-13T09:15:00.000Z"
      }
    ]
  }
}
```

---

## Section 5: Working with Subdocuments (5 minutes)

### 5.1 What are Subdocuments?

Subdocuments are documents embedded inside other documents. They have their own schemas and can have methods.

### 5.2 Creating and Updating Subdocuments

```javascript
// User with addresses (from earlier example)
const user = await User.findById(userId);

// Add a new address
user.addresses.push({
  street: "789 New St",
  city: "Austin",
  type: "home"
});
await user.save();

// Update an address
user.addresses[0].street = "123 Updated St";
await user.save();

// Remove an address by subdocument ID
const addressId = user.addresses[0]._id;
user.addresses.id(addressId).remove();
await user.save();

// Find subdocument by ID
const address = user.addresses.id(addressId);
console.log(address.street);
```

---

## Section 6: Best Practices (3 minutes)

### 6.1 Always Validate

Use schema validation to prevent bad data:
```javascript
{
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  }
}
```

### 6.2 Use Timestamps

Enable automatic timestamp tracking:
```javascript
const schema = new Schema({
  // fields...
}, { timestamps: true });
```

### 6.3 Selective Population

Only populate fields you need:
```javascript
.populate('author', 'username email')  // Not all user fields!
```

### 6.4 Index Frequently Queried Fields

```javascript
const userSchema = new Schema({
  email: { type: String, unique: true, index: true },
  username: { type: String, unique: true, index: true }
});
```

### 6.5 Handle Errors Properly

```javascript
try {
  // Database operations
} catch (error) {
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }
  if (error.code === 11000) {
    return res.status(400).json({ error: 'Duplicate key' });
  }
  res.status(500).json({ error: 'Server error' });
}
```

### 6.6 Use Virtuals for Computed Data

```javascript
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});
```

---

## Section 7: Common Pitfalls (3 minutes)

### 7.1 Forgetting to Populate

```javascript
// ❌ Wrong: author is just an ObjectId
const post = await Post.findById(id);

// ✅ Correct: author is full object
const post = await Post.findById(id).populate('author');
```

### 7.2 Not Handling Validation Errors

```javascript
// ❌ Wrong: Might crash your app
await User.create(data);

// ✅ Correct: Handle validation errors
try {
  await User.create(data);
} catch (error) {
  if (error.name === 'ValidationError') {
    res.status(400).json({ error: error.message });
  }
}
```

### 7.3 Over-Populating

```javascript
// ❌ Bad: Fetching too much data
.populate('author')  // Gets ALL user fields

// ✅ Good: Only what you need
.populate('author', 'username email')
```

### 7.4 Using Mixed Type

```javascript
// ❌ Avoid: No validation
metadata: Schema.Types.Mixed

// ✅ Better: Define structure
metadata: {
  views: Number,
  likes: Number
}
```

---

## Mini Lab: Build User → Posts API (30 minutes)

### Challenge

Build a complete REST API with User-Post relationships:

1. **GET /api/posts** - Return all posts with author populated (username and email only)
2. **POST /api/posts** - Create new post with validation (title and content required)
3. **GET /api/users/:id** - Return user with summary of their 5 most recent posts

### Requirements

- ✅ Use proper validation on all schemas
- ✅ Enable timestamps on both models
- ✅ Populate author information in GET /api/posts
- ✅ Handle errors with appropriate status codes
- ✅ Use .select() to limit fields returned

### Getting Started

```bash
# 1. Set up project
mkdir user-posts-api
cd user-posts-api
npm init -y
npm install express mongoose dotenv

# 2. Create structure
mkdir models routes
touch server.js .env

# 3. Add .env
echo "PORT=3000" >> .env
echo "MONGODB_URI=mongodb://localhost:27017/user-posts-db" >> .env
```

### Testing Your API

**1. Create a user first:**
```http
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "username": "alice",
  "email": "alice@example.com"
}
```

**2. Create a post:**
```http
POST http://localhost:3000/api/posts
Content-Type: application/json

{
  "title": "My First Post",
  "content": "Hello, World!",
  "authorId": "USER_ID_FROM_STEP_1"
}
```

**3. Get all posts:**
```http
GET http://localhost:3000/api/posts
```

**4. Get user with posts:**
```http
GET http://localhost:3000/api/users/USER_ID
```

---

## Resources

### Official Documentation
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Manual](https://docs.mongodb.com/)
- [Mongoose Validation Guide](https://mongoosejs.com/docs/validation.html)
- [Mongoose Populate Guide](https://mongoosejs.com/docs/populate.html)

### Additional Reading
- Mongoose Schema Design Patterns
- Building REST APIs with Express & Mongoose
- MongoDB Relationships: Embedding vs Referencing
- Data Modeling Best Practices

### Practice Projects
- Build a blog platform with comments
- Create an e-commerce product catalog with reviews
- Develop a social media API with followers and posts

---

## Summary

**What We Covered:**
- ✅ Setting up Mongoose schemas and models
- ✅ Schema types, validation, and defaults
- ✅ Virtuals and computed properties
- ✅ One-to-few relationships with embedding
- ✅ One-to-many relationships with referencing
- ✅ Using .populate() to join data
- ✅ Building REST APIs with validation
- ✅ Handling subdocuments in practice
- ✅ Best practices and common pitfalls

**Key Takeaways:**
1. Use **embedding** for small, bounded arrays (< 10 items)
2. Use **referencing** for large or unbounded relationships
3. Always **validate** at the schema level
4. Use **.populate()** to fetch referenced documents
5. Only populate **what you need** to improve performance
6. Enable **timestamps** for automatic date tracking
7. Handle **errors** properly with appropriate status codes

**Next Steps:**
- Add authentication to protect routes
- Implement pagination for large datasets
- Add search and filtering capabilities
- Connect frontend React app to your API
- Deploy your API to production

---

Ready to build production-ready APIs with Mongoose! 🚀

