# Class 11 – Advanced MongoDB & Data Modeling

## Class Overview (50 minutes)

Class 11 takes you beyond MongoDB basics into the realm of **production database design**. Now that you know how to create, read, update, and delete documents, you'll learn how professional teams actually model data, optimize performance, and scale applications from thousands to millions of users. This is where toy projects become real applications.

- **Prerequisites**: MongoDB fundamentals, Mongoose, CRUD operations, understanding of schemas
- **Scope**: Data modeling patterns, indexing strategies, aggregation, performance optimization, scaling
- **Outcome**: Students think like database architects and understand production-level MongoDB patterns

---

## Section 0: The Professional Data Modeling Mindset (10 minutes)

### 0.1 The Mistake Every Beginner Makes

**The Beginner's Approach:**
```
"I have users and posts. Let me make two collections!"
↓
Creates: users collection, posts collection
↓
Realizes: "Wait, how do I get a user's posts?"
↓
Writes: Slow queries with manual lookups
↓
Result: Works for 10 users, falls apart at 10,000
```

**The Problem:** You designed for **storage** instead of designing for **access**.

**The Mental Shift:**
```
SQL Thinking:          "What entities do I have?"
MongoDB Thinking:      "How will I access this data?"

SQL Starts With:       Database structure
MongoDB Starts With:   Application queries
```

This is the fundamental difference between relational and document database design.

### 0.2 The Backwards Design Process

**The Professional Approach:**

**Step 1: List Your Queries** (Not Your Collections!)
```
What questions will my app ask?
├── Show user profile with their 10 most recent posts
├── Display post with all comments
├── Search posts by tag
├── Show user's followers count
└── Find trending posts (most likes in 24hrs)
```

**Step 2: Analyze Access Patterns**
```
For each query, ask:
├── How often will this run? (1/sec vs 1/day)
├── How much data needs to return?
├── Does it need to be real-time?
├── What's the performance requirement?
└── Will this scale as data grows?
```

**Step 3: Design Document Shape**
```
Now structure your documents to make these queries fast.
Embed data that's always accessed together.
Reference data that's accessed independently.
```

### 0.3 The Read/Write Ratio Principle

**Why This Matters:**

Imagine a blog post:
```
Written:    Once (1 write)
Updated:    Rarely (maybe 5 edits in its lifetime)
Read:       Thousands of times (every page view)

Read/Write Ratio: 1000:1
```

**The Design Decision:**
```
High Read Ratio (1000:1):
└── Optimize for reads, even if writes are slower
    └── Embed author info in each post
        Why? Reading is 1000x more common than updating
        
High Write Ratio (1:10):
└── Optimize for writes, even if reads are slower
    └── Reference author separately
        Why? Don't want to update 1000 posts when author changes name
```

**Real-World Examples:**

```
Blog Posts (Read-Heavy):
Reads:   10,000/day (users viewing posts)
Writes:  10/day (new posts created)
Design:  Embed author name, embed comments (if few)

Live Chat (Write-Heavy):
Reads:   1,000/day (loading chat history)
Writes:  100,000/day (sending messages)
Design:  Keep messages separate, reference users

Product Catalog (Read-Heavy):
Reads:   1,000,000/day (users browsing)
Writes:  100/day (updating inventory)
Design:  Embed everything into product docs
```

### 0.4 The Data Growth Question

**Ask This For Every Relationship:**

> "Can this array grow unbounded?"

**The Danger:**
```javascript
// User document
{
  username: "alice",
  followers: [/* What if Alice has 1 MILLION followers? */]
}
```

**MongoDB's Hard Limit:** 16MB per document
**Practical Limit:** Arrays over 1000 items slow down queries

**The Decision Tree:**
```
Will this array stay small? (< 100 items)
├── YES: Embed it
└── NO:  Reference it in a separate collection

Examples of SMALL (safe to embed):
├── User's addresses (1-3)
├── Product variants (5-10)
├── Post tags (3-10)
└── Order line items (1-50)

Examples of LARGE (must reference):
├── User's followers (unbounded)
├── Post comments (potentially thousands)
├── User's activity log (grows forever)
└── Product reviews (unbounded)
```

### 0.5 The Atomicity Principle

**The Question:**
> "Do these fields need to update together, all-or-nothing?"

**Example: Bank Transfer**
```javascript
// BAD: Separate documents (what if app crashes between updates?)
{ accountId: "123", balance: 1000 }
{ accountId: "456", balance: 500 }

// Transfer $100:
// 1. Subtract from 123 ✅
// *app crashes*
// 2. Add to 456 ❌ (never happens!)
// Result: $100 disappeared!

// GOOD: Single document transaction log
{
  transferId: "xyz",
  from: "123",
  to: "456",
  amount: 100,
  status: "pending"  // Either commits entirely or rolls back
}
```

**MongoDB's Atomicity Guarantee:**
- **Single document**: All updates are atomic (all-or-nothing)
- **Multiple documents**: Requires transactions (slow, complex)

**Design Rule:**
> If data must stay consistent together, put it in the same document.

---

## Section 1: Embedding vs Referencing - The Core Decision (12 minutes)

### 1.1 What These Terms Mean

**Embedding: Store Related Data Inside**
```javascript
{
  title: "MongoDB Guide",
  author: {              // ← Author data INSIDE post
    name: "Alice",
    avatar: "alice.jpg"
  }
}
```

**Referencing: Store Pointers to Other Documents**
```javascript
{
  title: "MongoDB Guide",
  authorId: ObjectId("abc123")  // ← Pointer to author in users collection
}
```

**The Mental Model:**
```
Embedding is like:
├── A book with the author bio on the back cover
└── Everything you need in one place

Referencing is like:
├── A book with "See page 247 for author bio"
└── Must flip pages to get complete information
```

### 1.2 One-to-Few: Always Embed

**The Pattern:**
When an entity has a **small, fixed number** of related items.

**Real-World Examples:**
```
User → Addresses (1-3 addresses)
Person → Phone numbers (2-4 numbers)
Product → Variants (3-10 sizes/colors)
Order → Line items (1-50 items per order)
Post → Tags (3-10 tags)
```

**Implementation:**
```javascript
// User document with embedded addresses
{
  _id: ObjectId("..."),
  name: "Alice Johnson",
  email: "alice@example.com",
  addresses: [                    // ← Embedded array
    {
      type: "home",
      street: "123 Main St",
      city: "Boston",
      state: "MA",
      zip: "02101",
      default: true
    },
    {
      type: "work",
      street: "456 Office Blvd",
      city: "Cambridge",
      state: "MA",
      zip: "02139",
      default: false
    }
  ],
  createdAt: ISODate("2024-01-15")
}
```

**Why This Works:**
```
Query: Get user with addresses
MongoDB: Read one document → Done!
Time: 1ms

Performance: ⚡⚡⚡ (Single query)
Storage: ✅ (Addresses < 1KB)
Maintenance: ✅ (Easy to update together)
```

**Code Example:**
```javascript
// Get user with all addresses (one query!)
const user = await User.findById(userId);
console.log(user.addresses); // Already here!

// Add new address (atomic update)
await User.updateOne(
  { _id: userId },
  { 
    $push: { 
      addresses: {
        type: "vacation",
        street: "789 Beach Rd",
        city: "Miami",
        state: "FL"
      }
    }
  }
);
```

### 1.3 One-to-Many: It Depends

**The Pattern:**
When an entity has **many** related items, but "many" could be 10 or 10,000.

**The Decision Matrix:**
```
How many is "many"?

10-100 items:
├── Will be accessed together? → Embed
└── Accessed separately? → Reference

100-1000 items:
├── → Reference (approaching document size limits)

1000+ items:
├── → Always reference
```

**Example 1: Blog Posts and Comments (Depends on Volume)**

**Low Volume Blog (Embed Comments):**
```javascript
// Blog gets 10-50 comments per post
{
  _id: ObjectId("post1"),
  title: "Introduction to MongoDB",
  content: "...",
  author: "Alice",
  comments: [                      // ← Embedded (< 50 comments)
    {
      user: "Bob",
      text: "Great post!",
      likes: 5,
      createdAt: ISODate("...")
    },
    {
      user: "Charlie",
      text: "Very helpful",
      likes: 2,
      createdAt: ISODate("...")
    }
    // ... up to ~50 comments
  ]
}

// Benefit: Loading post with comments = 1 query
```

**High Volume Blog (Reference Comments):**
```javascript
// Blog gets 1000+ comments per post

// posts collection
{
  _id: ObjectId("post1"),
  title: "Introduction to MongoDB",
  content: "...",
  author: "Alice",
  commentCount: 1247           // Store count for display
}

// comments collection (separate!)
{
  _id: ObjectId("comment1"),
  postId: ObjectId("post1"),   // ← Reference to post
  user: "Bob",
  text: "Great post!",
  likes: 5,
  createdAt: ISODate("...")
}

// Benefit: Post document stays small, comments paginated
```

**Code Comparison:**
```javascript
// Embedded comments (one query)
const post = await Post.findById(postId);
const comments = post.comments; // Already here!

// Referenced comments (two queries)
const post = await Post.findById(postId);
const comments = await Comment.find({ postId }).limit(20);
// Need to fetch separately, but can paginate!
```

### 1.4 Many-to-Many: Always Reference

**The Pattern:**
When entities can be related to multiple entities on both sides.

**Real-World Examples:**
```
Students ↔ Courses
├── One student takes many courses
└── One course has many students

Users ↔ Groups
├── One user belongs to many groups
└── One group has many members

Products ↔ Categories
├── One product can be in many categories
└── One category has many products
```

**Implementation: Students and Courses**

```javascript
// students collection
{
  _id: ObjectId("student1"),
  name: "Alice",
  email: "alice@school.edu",
  enrolledCourses: [            // Array of course IDs
    ObjectId("course1"),
    ObjectId("course3"),
    ObjectId("course5")
  ]
}

// courses collection
{
  _id: ObjectId("course1"),
  name: "Advanced MongoDB",
  instructor: "Dr. Smith",
  enrolledStudents: [           // Array of student IDs
    ObjectId("student1"),
    ObjectId("student2"),
    ObjectId("student3")
  ]
}
```

**Querying Many-to-Many:**
```javascript
// Get student with their course names
const student = await Student.findById(studentId)
  .populate('enrolledCourses', 'name instructor');
// populate() automatically fetches course documents

// Get course with enrolled student names
const course = await Course.findById(courseId)
  .populate('enrolledStudents', 'name email');
```

### 1.5 The Anti-Patterns: What NOT to Do

**Anti-Pattern #1: Unbounded Arrays**
```javascript
// ❌ BAD: What if user has 1 million followers?
{
  username: "celebrity",
  followers: [/* 1,000,000 user IDs */]  // Hits 16MB limit!
}

// ✅ GOOD: Separate collection
// users collection
{ _id: ObjectId("celebrity"), username: "celebrity" }

// followers collection
{ userId: ObjectId("celebrity"), followerId: ObjectId("fan1") }
{ userId: ObjectId("celebrity"), followerId: ObjectId("fan2") }
```

**Anti-Pattern #2: Massive Subdocuments**
```javascript
// ❌ BAD: Entire user profile embedded in every post
{
  title: "My Post",
  author: {
    name: "Alice",
    bio: "...", // 1KB
    profileImage: "base64...", // 500KB!!!
    followers: [...], // 100KB
    settings: {...} // 50KB
  }
}

// ✅ GOOD: Just embed what you need
{
  title: "My Post",
  author: {
    id: ObjectId("user1"),
    name: "Alice",        // Just name
    avatar: "alice.jpg"   // Just URL
  }
}
```

**Anti-Pattern #3: Deeply Nested Data**
```javascript
// ❌ BAD: Hard to query, hard to update
{
  user: {
    profile: {
      settings: {
        notifications: {
          email: {
            frequency: {
              posts: "daily"  // Nested 6 levels deep!
            }
          }
        }
      }
    }
  }
}

// ✅ GOOD: Flatten or separate
{
  user: "Alice",
  notificationSettings: {
    emailFrequency: "daily",
    pushEnabled: true
  }
}
```

### 1.6 The Hybrid Pattern: Best of Both Worlds

**The Pattern:** Store a reference AND cache frequently accessed fields.

**Example: Blog Post with Author**
```javascript
{
  title: "MongoDB Guide",
  content: "...",
  authorId: ObjectId("user123"),  // ← Reference for full data
  authorName: "Alice Johnson",    // ← Cached for display
  authorAvatar: "alice.jpg",      // ← Cached for display
  comments: [/* ... */]
}
```

**Why This Works:**
```
Displaying Posts:
├── Show title, content, author name, avatar
└── All in one document! (Fast! ⚡)

Author Updates Name:
├── Update user document
└── Also update posts.authorName (rare operation)

Author Profile Page:
├── Use authorId to fetch full user document
└── Get bio, email, social links, etc.
```

**The Trade-Off:**
```
Benefit:  Fast reads (no JOIN needed)
Cost:     Data duplication
When:     Reads >> Writes (10:1 or more)
```

**Implementation:**
```javascript
// When creating post
const post = await Post.create({
  title: req.body.title,
  content: req.body.content,
  authorId: user._id,
  authorName: user.name,      // Cache these!
  authorAvatar: user.avatar
});

// When user updates their name
await User.updateOne({ _id: userId }, { name: newName });
// Also update all their posts (rare, acceptable)
await Post.updateMany(
  { authorId: userId },
  { authorName: newName }
);
```

### 1.7 Decision Flow Chart

```
START: Designing a relationship
│
├─→ Will child array be small? (< 100 items)
│   ├─ YES → Always accessed with parent?
│   │   ├─ YES → EMBED (one-to-few)
│   │   └─ NO  → REFERENCE
│   └─ NO  → Will it grow unbounded?
│       ├─ YES → REFERENCE (many-to-many)
│       └─ MAYBE → Read/write ratio?
│           ├─ Read-heavy → HYBRID (cache fields)
│           └─ Write-heavy → REFERENCE
│
END: Document structure decided
```

---

## Section 2: Schema Versioning & Evolution (8 minutes)

### 2.1 The Real-World Problem

**The Scenario:**
```
January:   You launch with { name: "Alice" }
           10,000 users sign up

March:     Product needs first/last name separately
           New users: { firstName: "Bob", lastName: "Smith" }
           Old users: Still { name: "Alice Johnson" }

Your Database Now:
├── 10,000 old documents with "name"
└── 5,000 new documents with "firstName" and "lastName"

Your Code:
├── Has to handle BOTH formats
├── Queries break
└── Display logic is messy
```

**This is Schema Evolution** - and it's inevitable.

### 2.2 The Version Key Pattern

**The Solution: Track Schema Version**

```javascript
// Version 1 (original)
{
  schemaVersion: 1,
  name: "Alice Johnson"
}

// Version 2 (new structure)
{
  schemaVersion: 2,
  firstName: "Bob",
  lastName: "Smith"
}

// Version 3 (added middle name)
{
  schemaVersion: 3,
  firstName: "Charlie",
  middleName: "Alexander",
  lastName: "Brown"
}
```

**Application Code Handles All Versions:**
```javascript
function getFullName(user) {
  switch (user.schemaVersion) {
    case 1:
      return user.name;
    case 2:
      return `${user.firstName} ${user.lastName}`;
    case 3:
      return `${user.firstName} ${user.middleName} ${user.lastName}`;
    default:
      throw new Error('Unknown schema version');
  }
}
```

**Mongoose Schema with Versioning:**
```javascript
const userSchema = new Schema({
  schemaVersion: { type: Number, default: 3 },
  
  // Old fields (kept for backward compatibility)
  name: String,                 // Version 1
  
  // New fields
  firstName: String,            // Version 2+
  lastName: String,             // Version 2+
  middleName: String,           // Version 3+
  
  email: { type: String, required: true }
});

// Pre-save hook: Migrate old versions
userSchema.pre('save', function(next) {
  if (this.schemaVersion === 1 && this.name) {
    // Migrate v1 → v2
    const [firstName, lastName] = this.name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName || '';
    this.schemaVersion = 2;
    delete this.name; // Remove old field
  }
  next();
});
```

### 2.3 Migration Strategies

**Strategy 1: Lazy Migration** (Update as Accessed)
```javascript
// Migrate document when read/updated
userSchema.post('find', function(docs) {
  docs.forEach(doc => {
    if (doc.schemaVersion < CURRENT_VERSION) {
      migrateDocument(doc);
      doc.save();
    }
  });
});
```

**Pros:**
- No downtime
- Gradual migration
- Zero risk to old data

**Cons:**
- Some queries return mixed formats
- Inactive users never migrate

**Strategy 2: Batch Migration** (Background Job)
```javascript
// Migration script (run once)
async function migrateAllUsers() {
  const oldUsers = await User.find({ schemaVersion: 1 });
  
  for (const user of oldUsers) {
    const [firstName, lastName] = user.name.split(' ');
    await User.updateOne(
      { _id: user._id },
      {
        $set: {
          schemaVersion: 2,
          firstName,
          lastName
        },
        $unset: { name: '' }
      }
    );
  }
  
  console.log(`Migrated ${oldUsers.length} users`);
}
```

**Pros:**
- All data consistent after migration
- Can set deadline to drop old code

**Cons:**
- Risky if migration script has bugs
- Downtime for large datasets

**Strategy 3: Dual-Write** (Transition Period)
```javascript
// Write BOTH formats during transition
async function createUser(data) {
  // Support old API
  if (data.name) {
    const [firstName, lastName] = data.name.split(' ');
    data.firstName = firstName;
    data.lastName = lastName;
  }
  
  // Always write new format
  data.schemaVersion = 2;
  return await User.create(data);
}
```

**Pros:**
- No migration needed
- New code works immediately

**Cons:**
- Code complexity during transition
- Must eventually migrate old documents

### 2.4 Breaking Changes: The Risky Ones

**Types of Schema Changes:**

**Safe (Non-Breaking):**
```
✅ Adding new optional fields
✅ Adding default values
✅ Making required fields optional
✅ Adding new validation (lenient)
```

**Risky (Breaking):**
```
⚠️  Removing fields (old code breaks)
⚠️  Renaming fields (queries break)
⚠️  Changing field types (validation breaks)
⚠️  Adding required fields (old docs invalid)
```

**Example: The Safe Way to Rename**
```javascript
// Step 1: Add new field, keep old (1 week)
{
  email: "alice@example.com",        // Old field
  emailAddress: "alice@example.com"  // New field (duplicate)
}

// Step 2: Update all code to use new field (1 week)
// Deploy code that reads/writes emailAddress

// Step 3: Migrate all documents (1 day)
// Copy email → emailAddress for all old docs

// Step 4: Remove old field from schema (1 week later)
// Now safe to remove "email" field
```

### 2.5 Version Compatibility Matrix

**Maintain a Compatibility Document:**

```markdown
| Schema Version | Fields                      | Compatible Code Versions |
|----------------|----------------------------|--------------------------|
| 1              | name                        | App v1.0-v1.5            |
| 2              | firstName, lastName         | App v1.3-v2.0            |
| 3              | +middleName                 | App v2.0+                |

Migration Path:
- v1 → v2: Split name on space
- v2 → v3: Add middleName (optional, default "")
```

---

## Section 3: Indexing Strategies - Making Queries Fast (12 minutes)

### 3.1 What Indexes Really Are

**The Book Analogy:**
```
No Index:
└── Finding "MongoDB" in a 1000-page book
    └── Read every page (slow! 📚📚📚)

With Index:
└── Check the index: "MongoDB → page 247"
    └── Jump directly to page 247 (fast! ⚡)
```

**In MongoDB:**
```
No Index (Collection Scan):
└── Search 1,000,000 users for email
    └── Check every single document (10 seconds)

With Index:
└── Search 1,000,000 users for email
    └── Jump directly to the document (5 milliseconds)
```

**The Trade-Off:**
```
Benefits:
✅ Queries 1000x faster
✅ Sorting becomes instant
✅ Range queries optimized

Costs:
❌ Writes 10-20% slower (must update index)
❌ Extra disk space (5-10% of collection size)
❌ Memory usage (indexes live in RAM)
```

### 3.2 How MongoDB Chooses Indexes

**Without Index (COLLSCAN):**
```
db.users.find({ email: "alice@example.com" })

MongoDB thinks:
├── No index on email field
├── Must check EVERY document
└── Strategy: COLLSCAN (collection scan)

Performance: O(n) - checks all n documents
```

**With Index (IXSCAN):**
```
db.users.createIndex({ email: 1 })
db.users.find({ email: "alice@example.com" })

MongoDB thinks:
├── Found index on email field!
├── Jump directly to matching documents
└── Strategy: IXSCAN (index scan)

Performance: O(log n) - binary search
```

### 3.3 Single-Field Indexes

**The Basics:**
```javascript
// Create index on email field
db.users.createIndex({ email: 1 })

// 1 = ascending, -1 = descending
// For single field, direction doesn't matter much
```

**When to Use:**
```
Index fields that appear in:
├── find() queries (WHERE clauses)
├── sort() operations (ORDER BY)
└── Filters in aggregations

Common examples:
├── Email (unique lookups)
├── Username (user lookups)
├── CreatedAt (sorting by time)
└── Status (filtering active/inactive)
```

**Mongoose Example:**
```javascript
const userSchema = new Schema({
  email: { 
    type: String, 
    required: true,
    unique: true,      // Creates unique index automatically!
    index: true        // Creates regular index
  },
  username: {
    type: String,
    index: true        // Single-field index
  },
  createdAt: {
    type: Date,
    index: true        // For sorting by date
  }
});
```

### 3.4 Compound Indexes - The Power Move

**What They Are:**
Indexes on **multiple fields together**, in a specific order.

**The Rule:** **Order Matters!**

**Example: Blog Posts**
```javascript
// Compound index: category + createdAt
db.posts.createIndex({ category: 1, createdAt: -1 })

// This index helps these queries:
✅ find({ category: "tech" }).sort({ createdAt: -1 })
✅ find({ category: "tech" })
✅ find({ category: "tech", createdAt: { $gt: yesterday } })

// This index does NOT help:
❌ find({ createdAt: { $gt: yesterday } })  // category not in query
❌ find({}).sort({ createdAt: -1 })         // category not in query
```

**The Left-Prefix Rule:**
```
Index: { a: 1, b: 1, c: 1 }

Supports queries on:
✅ { a }
✅ { a, b }
✅ { a, b, c }

Does NOT support:
❌ { b }
❌ { c }
❌ { b, c }

The index MUST start from the left!
```

**Real-World Example: E-commerce Products**
```javascript
// Compound index for filtered+sorted queries
db.products.createIndex({ category: 1, price: 1 })

// Perfect for:
"Show me electronics under $500, cheapest first"
db.products.find({ 
  category: "electronics",
  price: { $lt: 500 }
}).sort({ price: 1 })

// Uses index for:
// 1. Filter by category (first field)
// 2. Filter by price (second field)
// 3. Sort by price (second field, already sorted!)
```

### 3.5 Multikey Indexes - For Arrays

**Automatic for Arrays:**
```javascript
const postSchema = new Schema({
  tags: [String]  // Array of strings
});
postSchema.index({ tags: 1 });  // Multikey index created!

// Now fast queries:
db.posts.find({ tags: "mongodb" })
db.posts.find({ tags: { $in: ["mongodb", "nodejs"] } })
```

**How It Works:**
```
Document:
{
  title: "My Post",
  tags: ["mongodb", "nodejs", "express"]
}

Index Entries Created:
├── "mongodb" → Document ObjectId
├── "nodejs" → Document ObjectId
└── "express" → Document ObjectId

Each array value gets its own index entry!
```

**The Caveat:**
```
Compound multikey indexes have restrictions:
❌ Can't index TWO arrays in same compound index

Example (INVALID):
db.posts.createIndex({ tags: 1, categories: 1 })
// If both are arrays, index creation fails!

Why? Would create n*m index entries (explosion!)
```

### 3.6 Text Indexes - Full-Text Search

**For Searching Text Content:**
```javascript
// Create text index on multiple fields
db.articles.createIndex({ 
  title: "text", 
  content: "text",
  tags: "text"
})

// Now search across all indexed text fields
db.articles.find({ 
  $text: { $search: "mongodb tutorial" }
})

// Results ranked by relevance!
```

**Text Search Features:**
```
Supports:
✅ Multi-word search ("mongodb tutorial")
✅ Phrase search ("\"exact phrase\"")
✅ Negation ("mongodb -sql")
✅ Language-specific stemming (searching → search)

Limitations:
❌ Only ONE text index per collection
❌ Slower than exact-match indexes
❌ No partial word matching (mongo doesn't match mongodb)
```

**Relevance Scoring:**
```javascript
// Get search results with relevance scores
db.articles.find(
  { $text: { $search: "mongodb tutorial" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } })

// Returns most relevant results first
```

### 3.7 Geospatial Indexes - Location-Based

**For Location Queries:**
```javascript
// Store location as GeoJSON
const restaurantSchema = new Schema({
  name: String,
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }  // [lng, lat]
  }
});

// Create 2dsphere index for geospatial queries
restaurantSchema.index({ location: '2dsphere' });
```

**Geospatial Queries:**
```javascript
// Find restaurants within 5km of user location
db.restaurants.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.97, 40.77]  // [longitude, latitude]
      },
      $maxDistance: 5000  // 5km in meters
    }
  }
})

// Find restaurants within polygon (delivery zone)
db.restaurants.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[
          [lng1, lat1],
          [lng2, lat2],
          [lng3, lat3],
          [lng1, lat1]  // Close polygon
        ]]
      }
    }
  }
})
```

### 3.8 Partial Indexes - Save Space

**Index Only a Subset:**
```javascript
// Only index active users (ignore deleted/inactive)
db.users.createIndex(
  { email: 1 },
  { 
    partialFilterExpression: { 
      isActive: true 
    }
  }
)

// Index only recent posts (last 30 days)
db.posts.createIndex(
  { createdAt: -1 },
  {
    partialFilterExpression: {
      createdAt: { $gt: new Date('2024-01-01') }
    }
  }
)
```

**Benefits:**
```
✅ Smaller index (less disk space)
✅ Less memory (fewer entries)
✅ Faster writes (fewer index updates)
✅ Still fast for filtered queries

Use when:
├── Large collection with inactive data
├── You always filter by certain criteria
└── Want to save index space
```

### 3.9 The Explain Plan - Your Debugging Tool

**Understanding Query Performance:**
```javascript
db.users.find({ email: "alice@example.com" }).explain("executionStats")
```

**Key Metrics to Check:**

**1. Execution Stage:**
```javascript
"winningPlan": {
  "stage": "IXSCAN"    // ✅ GOOD: Using index
  // or
  "stage": "COLLSCAN"   // ❌ BAD: Scanning entire collection
}
```

**2. Documents Examined:**
```javascript
"executionStats": {
  "nReturned": 1,              // Returned 1 document
  "totalDocsExamined": 1,      // ✅ PERFECT: Only examined 1
  "executionTimeMillis": 2     // ✅ FAST: 2ms
}

// BAD example:
{
  "nReturned": 1,              // Returned 1 document
  "totalDocsExamined": 100000, // ❌ TERRIBLE: Checked 100k docs!
  "executionTimeMillis": 5000  // ❌ SLOW: 5 seconds
}
```

**3. Index Used:**
```javascript
"indexName": "email_1"         // Which index was used
```

**Real-World Example:**
```javascript
// Slow query investigation
const explain = await User.find({ 
  email: "alice@example.com",
  age: { $gt: 25 }
}).explain("executionStats");

console.log(explain.executionStats);
// {
//   executionTimeMillis: 3452,      // 3.4 seconds! Too slow!
//   totalDocsExamined: 500000,      // Checked 500k docs!
//   nReturned: 1                    // Only returned 1!
// }

// Fix: Add compound index
db.users.createIndex({ email: 1, age: 1 })

// Re-run explain:
// {
//   executionTimeMillis: 5,         // ✅ 5ms (689x faster!)
//   totalDocsExamined: 1,           // ✅ Only checked 1 doc!
//   nReturned: 1
// }
```

### 3.10 Index Strategy Checklist

**Step 1: Identify Slow Queries**
```
Monitor production:
├── Log slow queries (> 100ms)
├── Check database metrics
└── Find common query patterns
```

**Step 2: Run Explain Plans**
```
For each slow query:
├── Run .explain("executionStats")
├── Look for COLLSCAN
├── Check totalDocsExamined / nReturned ratio
└── Identify missing indexes
```

**Step 3: Create Indexes Strategically**
```
Prioritize indexes for:
├── Frequently run queries (100+ times/minute)
├── User-facing queries (immediate response needed)
├── Expensive queries (large datasets)
└── Sorted queries (often slow without index)
```

**Step 4: Avoid Over-Indexing**
```
Don't index:
❌ Fields that change frequently (writes get slow)
❌ Low-cardinality fields (gender: M/F, boolean: true/false)
❌ Rarely queried fields
❌ Every single field "just in case"

Rule of thumb:
├── Most collections: 3-5 indexes
├── Large collections: 5-10 indexes
└── More than 10? Re-evaluate your queries
```

---

## Section 4: Advanced Queries & Operators (8 minutes)

### 4.1 $elemMatch - Match Array Elements

**The Problem:**
```javascript
// Documents:
{ 
  username: "alice",
  posts: [
    { title: "Post 1", likes: 5 },
    { title: "Post 2", likes: 100 }
  ]
}

// Query: Users with a post that has > 50 likes
db.users.find({ "posts.likes": { $gt: 50 } })  // ✅ Matches

// But what if we want:
// "Users with a post that has > 50 likes AND title contains 'MongoDB'"
db.users.find({
  "posts.likes": { $gt: 50 },
  "posts.title": /MongoDB/
})
// ❌ BUG: Matches if ANY post has > 50 likes AND ANY post has "MongoDB"
// Doesn't require SAME post to match both conditions!
```

**The Solution: $elemMatch**
```javascript
// Correct: Both conditions on SAME array element
db.users.find({
  posts: {
    $elemMatch: {
      likes: { $gt: 50 },
      title: /MongoDB/
    }
  }
})
// ✅ Only matches if SAME post has > 50 likes AND title contains "MongoDB"
```

**Real-World Example: Order Line Items**
```javascript
// Find orders with a product over $100 in quantity > 5
db.orders.find({
  lineItems: {
    $elemMatch: {
      price: { $gt: 100 },
      quantity: { $gte: 5 }
    }
  }
})

// Without $elemMatch (WRONG):
// Would match order with:
// - One item at $150 (quantity 1)
// - Another item at $10 (quantity 10)
// Even though no single item meets both criteria!
```

### 4.2 $size - Array Length

**Match Arrays by Length:**
```javascript
// Find posts with exactly 3 tags
db.posts.find({ tags: { $size: 3 } })

// Find users with 2 addresses
db.users.find({ addresses: { $size: 2 } })
```

**Limitation: $size doesn't support ranges!**
```javascript
// ❌ DOESN'T WORK:
db.posts.find({ tags: { $size: { $gt: 3 } } })  // Error!

// ✅ WORKAROUND: Store array length separately
const postSchema = new Schema({
  tags: [String],
  tagCount: Number  // Maintain count separately
});

// Update count on save
postSchema.pre('save', function(next) {
  this.tagCount = this.tags.length;
  next();
});

// Now you can query ranges:
db.posts.find({ tagCount: { $gt: 3 } })
```

### 4.3 $type - Type Checking

**Query by Field Type:**
```javascript
// Find documents where age is a string (data quality issue!)
db.users.find({ age: { $type: "string" } })

// Find documents where createdAt is actually a Date
db.posts.find({ createdAt: { $type: "date" } })

// All BSON types:
// "double", "string", "object", "array", "binData", "objectId", 
// "bool", "date", "null", "regex", "int", "timestamp", "long"
```

**Use Case: Data Migration**
```javascript
// Find old documents that stored date as string
const brokenDocs = await Post.find({ 
  createdAt: { $type: "string" } 
});

// Migrate them
for (const doc of brokenDocs) {
  doc.createdAt = new Date(doc.createdAt);  // Convert string → Date
  await doc.save();
}
```

### 4.4 $expr - Compare Fields

**Compare Two Fields in Same Document:**
```javascript
// Find users where favoriteCount > followerCount
db.users.find({
  $expr: { $gt: ["$favoriteCount", "$followerCount"] }
})
// Note the $ prefix on field names!

// Find products where sale price is less than cost (losing money!)
db.products.find({
  $expr: { $lt: ["$salePrice", "$cost"] }
})

// Complex expression: discount > 20%
db.products.find({
  $expr: {
    $gt: [
      { $subtract: ["$originalPrice", "$salePrice"] },
      { $multiply: ["$originalPrice", 0.20] }
    ]
  }
})
```

### 4.5 Array Filters - Update Nested Arrays

**The Problem:**
```javascript
// Document:
{
  posts: [
    { _id: 1, title: "Post 1", published: false },
    { _id: 2, title: "Post 2", published: false },
    { _id: 3, title: "Post 3", published: false }
  ]
}

// Goal: Publish post with _id: 2
// How do you update ONE specific array element?
```

**The Solution: Array Filters**
```javascript
await User.updateOne(
  { username: "alice" },
  { $set: { "posts.$[elem].published": true } },
  { 
    arrayFilters: [{ "elem._id": 2 }]  // Which element to update
  }
)

// Result:
{
  posts: [
    { _id: 1, title: "Post 1", published: false },
    { _id: 2, title: "Post 2", published: true },  // ✅ Only this changed!
    { _id: 3, title: "Post 3", published: false }
  ]
}
```

**Multiple Updates with Filters:**
```javascript
// Increase price by 10% for products in "electronics" category
await Product.updateMany(
  {},
  { $mul: { "variants.$[elem].price": 1.10 } },
  {
    arrayFilters: [{ "elem.category": "electronics" }]
  }
)
```

---

## Section 5: Pagination at Scale (6 minutes)

### 5.1 Why Skip + Limit Breaks

**The Beginner's Pagination:**
```javascript
// Page 1: First 20 posts
const page1 = await Post.find().skip(0).limit(20);

// Page 2: Next 20 posts
const page2 = await Post.find().skip(20).limit(20);

// Page 50: 980-1000
const page50 = await Post.find().skip(980).limit(20);
```

**The Hidden Cost:**
```
Page 1:  Skip 0 → Check 0 docs → Return 20 (fast! 10ms)
Page 2:  Skip 20 → Check 20 docs → Return 20 (fast! 15ms)
Page 10: Skip 180 → Check 180 docs → Return 20 (okay... 50ms)
Page 50: Skip 980 → Check 980 docs → Return 20 (slow! 200ms)
Page 1000: Skip 19980 → Check 19980 docs → Return 20 (terrible! 10 seconds!)
```

**MongoDB Still Scans Skipped Documents!**

Even with an index, MongoDB must:
1. Find document 1
2. Find document 2
3. Find document 3
...
980. Find document 980
981. **Return** document 981 (finally!)

### 5.2 Range Query Pagination (The Right Way)

**The Pattern: Use Last Seen Value**

```javascript
// Page 1: Get first 20 posts
const page1 = await Post.find()
  .sort({ createdAt: -1 })
  .limit(20);

// Remember last post's timestamp
const lastCreatedAt = page1[page1.length - 1].createdAt;

// Page 2: Get posts AFTER last timestamp
const page2 = await Post.find({
  createdAt: { $lt: lastCreatedAt }  // ← Range query!
})
  .sort({ createdAt: -1 })
  .limit(20);

// Page 3: Use page2's last timestamp
const lastCreatedAt2 = page2[page2.length - 1].createdAt;
const page3 = await Post.find({
  createdAt: { $lt: lastCreatedAt2 }
})
  .sort({ createdAt: -1 })
  .limit(20);
```

**Why This is Fast:**
```
Every page:
├── Uses index directly
├── Scans only 20 documents
└── Same speed regardless of page number!

Page 1:    5ms
Page 2:    5ms
Page 1000: 5ms  // Still fast! ✅
```

**The Trade-Off:**
```
Benefits:
✅ Constant O(1) performance
✅ Works with millions of docs
✅ No "skip" penalty

Limitations:
❌ Can't jump to arbitrary page (no "page 50" button)
❌ Only "next" and "previous"
❌ Total count is expensive (must count all docs)
```

### 5.3 Cursor-Based Pagination API

**API Design:**
```javascript
// Request: GET /api/posts?limit=20
{
  data: [/* 20 posts */],
  nextCursor: "2024-01-15T10:30:00Z",  // Last post's timestamp
  hasMore: true
}

// Request: GET /api/posts?limit=20&cursor=2024-01-15T10:30:00Z
{
  data: [/* next 20 posts */],
  nextCursor: "2024-01-10T08:15:00Z",
  hasMore: true
}
```

**Implementation:**
```javascript
router.get('/posts', async (req, res) => {
  const limit = parseInt(req.query.limit) || 20;
  const cursor = req.query.cursor ? new Date(req.query.cursor) : new Date();
  
  const posts = await Post.find({
    createdAt: { $lt: cursor }
  })
    .sort({ createdAt: -1 })
    .limit(limit + 1);  // Get one extra to check if more exist
  
  const hasMore = posts.length > limit;
  const data = hasMore ? posts.slice(0, -1) : posts;
  const nextCursor = hasMore ? data[data.length - 1].createdAt : null;
  
  res.json({
    data,
    nextCursor,
    hasMore
  });
});
```

### 5.4 Handling Ties (Same Timestamp)

**The Problem:**
```javascript
// Multiple posts with same createdAt
{ _id: 1, createdAt: "2024-01-15T10:00:00Z" }
{ _id: 2, createdAt: "2024-01-15T10:00:00Z" }  // Same time!
{ _id: 3, createdAt: "2024-01-15T10:00:00Z" }  // Same time!

// Using only createdAt as cursor → might skip documents!
```

**The Solution: Compound Cursor (timestamp + _id)**
```javascript
// Sort by createdAt AND _id
const posts = await Post.find({
  $or: [
    { createdAt: { $lt: lastCreatedAt } },
    { 
      createdAt: lastCreatedAt,
      _id: { $lt: lastId }  // Break ties with _id
    }
  ]
})
  .sort({ createdAt: -1, _id: -1 })
  .limit(20);
```

**Better: Use Compound Index**
```javascript
// Create index on both fields
db.posts.createIndex({ createdAt: -1, _id: -1 })
```

---

## Section 6: Aggregation Pipeline (8 minutes)

### 6.1 What is the Aggregation Pipeline?

**The Concept:**
An aggregation pipeline is like an **assembly line** for data processing. Documents flow through stages, each stage transforming them until you get the final result.

```
Raw Documents → Stage 1 → Stage 2 → Stage 3 → Final Result
   (filter)     (group)     (sort)      (limit)
```

**Why Use Aggregation:**
```
When you need to:
├── Compute statistics (counts, averages, sums)
├── Group data by fields
├── Join collections (like SQL JOINs)
├── Transform document structure
├── Complex calculations
└── Reports and analytics
```

### 6.2 Common Pipeline Stages

**$match - Filter Documents (Like find())**
```javascript
db.posts.aggregate([
  { $match: { status: "published", likes: { $gt: 100 } } }
])
// Like: db.posts.find({ status: "published", likes: { $gt: 100 } })
```

**$group - Group and Calculate**
```javascript
// Count posts per category
db.posts.aggregate([
  { 
    $group: {
      _id: "$category",           // Group by category
      count: { $sum: 1 },         // Count documents
      avgLikes: { $avg: "$likes" },  // Average likes
      totalViews: { $sum: "$views" }
    }
  }
])

// Result:
[
  { _id: "tech", count: 150, avgLikes: 45.2, totalViews: 12500 },
  { _id: "food", count: 80, avgLikes: 32.1, totalViews: 6800 }
]
```

**$sort - Order Results**
```javascript
db.posts.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } },
  { $sort: { count: -1 } }  // Most popular categories first
])
```

**$limit and $skip - Pagination**
```javascript
db.posts.aggregate([
  { $match: { status: "published" } },
  { $sort: { likes: -1 } },
  { $skip: 20 },
  { $limit: 10 }
])
```

**$project - Reshape Documents**
```javascript
db.users.aggregate([
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      email: 1,  // Include email
      _id: 0     // Exclude _id
    }
  }
])

// Input:  { firstName: "Alice", lastName: "Johnson", email: "..." }
// Output: { fullName: "Alice Johnson", email: "..." }
```

### 6.3 $lookup - Joining Collections

**The SQL JOIN Equivalent:**
```javascript
// Join posts with authors
db.posts.aggregate([
  {
    $lookup: {
      from: "users",           // Collection to join
      localField: "authorId",  // Field in posts
      foreignField: "_id",     // Field in users
      as: "author"             // Output field name
    }
  }
])

// Result:
{
  title: "My Post",
  authorId: ObjectId("..."),
  author: [                   // ← Array of matching users
    {
      _id: ObjectId("..."),
      name: "Alice",
      email: "alice@example.com"
    }
  ]
}
```

**$lookup + $unwind (Get Single Object)**
```javascript
db.posts.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "authorId",
      foreignField: "_id",
      as: "author"
    }
  },
  { $unwind: "$author" }  // Convert array to object
])

// Result:
{
  title: "My Post",
  author: {               // ← Single object now!
    name: "Alice",
    email: "alice@example.com"
  }
}
```

### 6.4 $unwind - Flatten Arrays

**Expand Array Elements:**
```javascript
// Input:
{
  user: "Alice",
  hobbies: ["coding", "hiking", "reading"]
}

// Pipeline:
db.users.aggregate([
  { $unwind: "$hobbies" }
])

// Output (3 documents!):
{ user: "Alice", hobbies: "coding" }
{ user: "Alice", hobbies: "hiking" }
{ user: "Alice", hobbies: "reading" }
```

**Use Case: Tag Analytics**
```javascript
// Count how many posts per tag
db.posts.aggregate([
  { $unwind: "$tags" },                    // Expand tags array
  { $group: { _id: "$tags", count: { $sum: 1 } } },  // Count each tag
  { $sort: { count: -1 } },                // Most popular first
  { $limit: 10 }                           // Top 10 tags
])

// Result:
[
  { _id: "mongodb", count: 245 },
  { _id: "nodejs", count: 198 },
  { _id: "javascript", count: 187 }
]
```

### 6.5 $facet - Multiple Pipelines

**Run Multiple Aggregations in Parallel:**
```javascript
db.posts.aggregate([
  {
    $facet: {
      // Pipeline 1: Group by category
      byCategory: [
        { $group: { _id: "$category", count: { $sum: 1 } } }
      ],
      
      // Pipeline 2: Group by month
      byMonth: [
        { 
          $group: { 
            _id: { $month: "$createdAt" }, 
            count: { $sum: 1 } 
          } 
        }
      ],
      
      // Pipeline 3: Top posts
      topPosts: [
        { $sort: { likes: -1 } },
        { $limit: 5 },
        { $project: { title: 1, likes: 1 } }
      ]
    }
  }
])

// Result (all three aggregations in one query!):
{
  byCategory: [{ _id: "tech", count: 150 }, ...],
  byMonth: [{ _id: 1, count: 45 }, ...],
  topPosts: [{ title: "...", likes: 500 }, ...]
}
```

### 6.6 $bucket - Group into Ranges

**Group by Value Ranges:**
```javascript
// Group users by age ranges
db.users.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [0, 18, 30, 50, 100],  // Age ranges
      default: "Other",
      output: {
        count: { $sum: 1 },
        users: { $push: "$name" }
      }
    }
  }
])

// Result:
[
  { _id: 0, count: 15, users: ["Alice", "Bob", ...] },      // 0-17
  { _id: 18, count: 250, users: ["Charlie", ...] },         // 18-29
  { _id: 30, count: 180, users: ["David", ...] },           // 30-49
  { _id: 50, count: 45, users: ["Eve", ...] }               // 50-99
]
```

**Use Case: Price Ranges**
```javascript
// Group products by price range
db.products.aggregate([
  {
    $bucket: {
      groupBy: "$price",
      boundaries: [0, 25, 50, 100, 500, 1000],
      default: "Premium",
      output: {
        count: { $sum: 1 },
        avgPrice: { $avg: "$price" }
      }
    }
  }
])
```

### 6.7 Real-World Example: Analytics Dashboard

```javascript
// Complete analytics pipeline for blog dashboard
db.posts.aggregate([
  // Stage 1: Filter published posts from last 30 days
  {
    $match: {
      status: "published",
      createdAt: { $gte: new Date(Date.now() - 30*24*60*60*1000) }
    }
  },
  
  // Stage 2: Join with authors
  {
    $lookup: {
      from: "users",
      localField: "authorId",
      foreignField: "_id",
      as: "author"
    }
  },
  { $unwind: "$author" },
  
  // Stage 3: Calculate metrics per author
  {
    $group: {
      _id: "$author.name",
      postCount: { $sum: 1 },
      totalLikes: { $sum: "$likes" },
      totalViews: { $sum: "$views" },
      avgLikes: { $avg: "$likes" },
      posts: { $push: { title: "$title", likes: "$likes" } }
    }
  },
  
  // Stage 4: Calculate engagement rate
  {
    $project: {
      author: "$_id",
      postCount: 1,
      totalLikes: 1,
      totalViews: 1,
      avgLikes: 1,
      engagementRate: { 
        $multiply: [
          { $divide: ["$totalLikes", "$totalViews"] },
          100
        ]
      },
      posts: 1
    }
  },
  
  // Stage 5: Sort by engagement
  { $sort: { engagementRate: -1 } },
  
  // Stage 6: Top 10 authors
  { $limit: 10 }
])
```

---

## Section 7: Transactions & Change Streams (6 minutes)

### 7.1 Multi-Document Transactions

**When You Need ACID:**
```javascript
// Example: Transfer points between users
async function transferPoints(fromUserId, toUserId, points) {
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    // Deduct from sender
    await User.updateOne(
      { _id: fromUserId },
      { $inc: { points: -points } },
      { session }
    );
    
    // Add to receiver
    await User.updateOne(
      { _id: toUserId },
      { $inc: { points: points } },
      { session }
    );
    
    // Both succeed → commit
    await session.commitTransaction();
  } catch (error) {
    // Any failure → rollback both
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
}
```

**When NOT to Use Transactions:**
```
Avoid because:
❌ Performance overhead (slower)
❌ Locks documents (reduces concurrency)
❌ Requires replica set (not localhost dev)
❌ Complexity

Better: Design schema so single-document updates suffice
```

### 7.2 Change Streams - Real-Time Events

**Watch Collection for Changes:**
```javascript
// Watch for new users
const changeStream = User.watch();

changeStream.on('change', (change) => {
  if (change.operationType === 'insert') {
    const newUser = change.fullDocument;
    console.log('New user:', newUser.name);
    
    // Trigger actions:
    sendWelcomeEmail(newUser.email);
    notifyAdmins(newUser);
    updateCache(newUser);
  }
});
```

**Use Cases:**
```
Real-time notifications
├── New message → Push notification
├── New order → Alert fulfillment team
└── Account update → Invalidate cache

Sync to other systems
├── New product → Update Elasticsearch
├── User updated → Sync to Redis cache
└── Order placed → Send to analytics
```

---

## Section 8: Replication & Sharding (6 minutes)

### 8.1 Replica Sets

**High Availability:**
```
Replica Set:
├── Primary (receives writes)
├── Secondary 1 (copies data)
├── Secondary 2 (copies data)
└── Secondary 3 (copies data)

If Primary fails:
└── Secondaries elect new Primary (automatic!)
```

**Write Concerns:**
```javascript
// w: 1 (default) - Acknowledged by primary only
await User.create(data, { w: 1 });

// w: "majority" - Acknowledged by majority of nodes (safer!)
await User.create(data, { w: "majority" });
```

### 8.2 Sharding for Scale

**Distribute Data Across Servers:**
```
Shard Key: userId

Shard 1: userIds 0-333
Shard 2: userIds 334-666
Shard 3: userIds 667-999

Query for userId 500 → Routes to Shard 2 only
```

**Choosing Shard Key:**
```
Good Shard Key:
✅ High cardinality (many unique values)
✅ Even distribution
✅ Matches query patterns

Bad Shard Key:
❌ createdAt (all new data → one shard)
❌ country (uneven distribution)
❌ boolean (only 2 values!)
```

---

## Wrap-Up (4 minutes)

### Key Takeaways

1. **Think backwards from queries** - design for how you'll read data
2. **Embed for small, bounded relationships** - reference for large or unbounded
3. **Index your query patterns** - but don't over-index
4. **Use aggregation for analytics** - it's powerful and efficient
5. **Paginate with range queries** - skip+limit doesn't scale
6. **Version your schemas** - plan for evolution
7. **Monitor with explain plans** - optimize slow queries
8. **Design to avoid transactions** - they're expensive

### What Makes You Production-Ready

```
Junior Developer:
├── Knows CRUD operations
└── Creates collections

Senior Developer:
├── Designs schemas for access patterns
├── Optimizes queries with indexes
├── Understands trade-offs
└── Plans for scale
```

---

## Resources

- [MongoDB University](https://university.mongodb.com/) - Free courses
- [Schema Design Patterns](https://www.mongodb.com/blog/post/building-with-patterns-a-summary)
- [Performance Best Practices](https://www.mongodb.com/docs/manual/administration/analyzing-mongodb-performance/)
- [Index Strategies Guide](https://www.mongodb.com/docs/manual/indexes/)

---

Ready to design production-grade MongoDB applications! 🚀
