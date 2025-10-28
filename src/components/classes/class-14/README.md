# Class 14 – Login & Protected Routes with JWT

## Class Overview (50 minutes)

Class 14 completes the authentication system started in Class 13. While signup created new users and introduced password security concepts, this class focuses on **login verification** and **protecting routes**. Students learn how to verify user credentials, issue JWT tokens, create reusable middleware, and restrict access to authenticated users only.

- **Prerequisites**: Class 13 (Authentication concepts, JWT, bcrypt, signup route)
- **Scope**: Login flow, authentication middleware, protected routes, token verification, authorization headers
- **Outcome**: Students can build complete authentication systems with login and route protection

---

## Section 0: The Big Picture – Completing the Authentication System (5 minutes)

### 0.1 What We Built Last Class

**Class 13 Recap:**
```
User Registration (Signup)
├── Collect email, username, password
├── Validate input
├── Hash password with bcrypt
├── Save user to database
└── Issue JWT token

User can now register, but can they come back?
```

**The Missing Piece:**
- Users can sign up ✅
- Users receive a token ✅
- But what if they close the browser?
- How do they prove who they are next time?
- **This is where login comes in**

### 0.2 The Complete Authentication Journey

```
┌─────────────────────────────────────────────────────────┐
│  Complete Authentication System                         │
└─────────────────────────────────────────────────────────┘

Day 1: New User
├── Signup → Create account
├── Receive token
└── Use app (authenticated)

Day 2: Returning User
├── Login → Prove identity
├── Receive new token
└── Use app (authenticated)

Every Request:
├── Include token in request
├── Middleware verifies token
├── Route handler accesses user info
└── Return user-specific data
```

### 0.3 Today's Learning Objectives

**By the end of this class, you'll understand:**

1. **Login Flow**: How returning users prove their identity
2. **Middleware Concept**: Reusable functions that run before route handlers
3. **Protected Routes**: Restricting access to authenticated users only
4. **Token Verification**: How servers validate JWTs without database lookups
5. **Complete System**: How signup, login, and protected routes work together

**The Mental Model:**
> Signup = **Creating** a bank account
> Login = **Accessing** your existing bank account with password
> Protected Routes = **Services** that require account verification
> Middleware = **Security guard** checking your ID before entry

---

## Section 1: The Login Flow (8 minutes)

### 1.1 Login vs Signup – The Key Differences

```
Signup (Class 13):
├── Purpose: Create NEW user
├── Check: Does user already exist?
├── Action: Create user in database
├── Password: Hash and store
└── Result: New user record + token

Login (Class 14):
├── Purpose: Verify EXISTING user
├── Check: Does user exist?
├── Action: Compare password
├── Password: Verify with bcrypt.compare()
└── Result: No new record, just token
```

**The Core Difference:**
- Signup → **Creating** something new
- Login → **Verifying** something that already exists

### 1.2 What Login Needs to Do

**The High-Level View:**

Login is fundamentally a **verification process**. The user claims to be someone ("I'm Alice"), and the server's job is to prove or disprove that claim.

```
┌─────────────────────────────────────────────────────────┐
│  The Login Process (Conceptual)                         │
└─────────────────────────────────────────────────────────┘

Step 1: User Claims Identity
"I am alice@example.com, my password is Secret123"

Think: User is making a claim. Server must verify it.

Step 2: Find User Record
Look up alice@example.com in database
→ Found? Continue
→ Not found? Reject (invalid credentials)

Why this matters: If email doesn't exist, the claim is false.
But we don't tell the attacker "email not found" - that leaks info!

Step 3: Verify Password
Compare "Secret123" with stored hash
→ Match? Continue
→ No match? Reject (invalid credentials)

This is where bcrypt.compare() does its magic.
We're asking: "Does this password match the hash we stored?"

Step 4: Issue Token
Create JWT containing user info
Sign it with secret key

The token is proof of successful verification.
It says: "We verified this person at time X"

Step 5: Return Token
Send token to user
User stores it for future requests

The token becomes the user's "access card" for your app.
They present it with every future request.

User is now logged in! ✅
```

**The Critical Security Point:**

Notice that Steps 2 and 3 both return the same generic error: "Invalid credentials". This is **intentional**. We never reveal which part failed (email or password) because that information helps attackers enumerate valid emails.

### 1.3 The Mental Model: Airport Security

**Login is like going through airport security:**

```
You: "I'm John Doe, here's my boarding pass"
      └─ Email + Password

Security: Scans your ID
          └─ Looks up your name in system

Security: Verifies it's really you
          └─ Compares password hash

Security: Issues boarding pass
          └─ JWT token with your info

You: Board the plane
     └─ Use token to access protected routes
```

**Key Point:**
- Security doesn't **create** you (that was when you bought the ticket = signup)
- Security **verifies** you already exist (that's login)

### 1.4 Why Password Comparison is Special

**The Fundamental Challenge:**

When a user logs in, they give you a plain password. But in your database, you stored a hash (from signup). How do you compare them?

**You Can't Just Compare Strings:**

```
❌ WRONG (This will NEVER work):
User provides: "Secret123"
Database has: "$2b$10$xK9mP2vL8nQ5wR7..."

if (providedPassword === storedHash) {
  // This will ALWAYS be false!
  // "Secret123" ≠ "$2b$10$xK9mP2vL8..."
}
```

**Why String Comparison Fails:**
- Stored password is **hashed** (one-way transformation)
- Provided password is **plain text**
- They'll never match with `===`
- Even if the user typed the correct password!

**The Beginner's Mistake:**

New developers often think: "Why not just reverse the hash to get the original password, then compare?"

**Answer:** You **can't** reverse a hash. That's the whole point! Hashing is one-way. If you could reverse it, so could a hacker who steals your database.

**The Right Way (bcrypt.compare):**

```
✅ CORRECT:
User provides: "Secret123"
Database has: "$2b$10$xK9mP2vL8nQ5wR7..."

bcrypt.compare("Secret123", storedHash)
  ↓
1. Extract salt from storedHash
2. Hash "Secret123" with that salt (same process as signup)
3. Compare the NEW hash with the STORED hash
4. If they match → correct password!
  ↓
Return true or false
```

**Understanding the Process:**

```
┌─────────────────────────────────────────────────────────┐
│  How bcrypt.compare() Works Under the Hood              │
└─────────────────────────────────────────────────────────┘

During Signup (Class 13):
User password: "Secret123"
  ↓
bcrypt.hash("Secret123", 10)
  ↓
1. Generate random salt: "xK9mP2vL8nQ5wR7"
2. Hash "Secret123" + salt → Result: "abc...xyz"
3. Store: "$2b$10$xK9mP2vL8nQ5wR7$abc...xyz"
         └─┬─┘└┬┘└──────┬──────┘└────┬───┘
        Algo Cost    Salt         Hash

During Login (Class 14):
User provides: "Secret123"
Stored hash: "$2b$10$xK9mP2vL8nQ5wR7$abc...xyz"
  ↓
bcrypt.compare("Secret123", storedHash)
  ↓
1. Parse stored hash to extract:
   - Algorithm: $2b
   - Cost: 10
   - Salt: "xK9mP2vL8nQ5wR7"
   - Original hash: "abc...xyz"

2. Take user's password and the extracted salt
3. Hash "Secret123" + "xK9mP2vL8nQ5wR7" using cost 10
4. Get result → Let's say "abc...xyz"

5. Compare:
   New hash: "abc...xyz"
   Stored hash: "abc...xyz"
   Match? → Return TRUE → Correct password! ✅

If user had typed wrong password:
   New hash: "def...uvw" (different!)
   Stored hash: "abc...xyz"
   No match? → Return FALSE → Wrong password! ❌
```

**The Magic of bcrypt.compare:**
- Takes plain password and hashed password
- Re-hashes the plain password using the stored salt (extracted from the hash)
- Compares the two hashes (not plain text!)
- Returns `true` if they match, `false` otherwise
- **You never see the original password**
- The original password doesn't even exist anymore - it was destroyed during signup!

**Why This is Brilliant:**
- The salt is **not secret** - it's stored right in the hash
- But without knowing the password, you can't generate the matching hash
- Even with the salt, brute-forcing takes millions of years due to bcrypt's slow hashing
- This is why bcrypt is the industry standard

### 1.5 Security: Same Error Message

**The Vulnerability:**

```
❌ BAD (Leaks information):
if (!user) {
  return "No user found with that email"
}
if (!passwordMatch) {
  return "Wrong password"
}

Attacker learns:
- "No user found" → Email not registered
- "Wrong password" → Email IS registered, wrong password
- Can enumerate all registered emails!
```

**The Solution:**

```
✅ GOOD (Same message for both):
if (!user || !passwordMatch) {
  return "Invalid email or password"
}

Attacker learns:
- Same message every time
- Can't tell if email exists
- Can't enumerate users
```

**Real-World Impact:**
- Prevents user enumeration attacks
- Protects user privacy (can't discover who has accounts)
- Makes brute-force attacks harder
- Industry standard practice

---

## Section 2: Middleware – The Concept (10 minutes)

### 2.1 What is Middleware?

**The Core Concept:**
> Middleware = Functions that run **between** receiving a request and sending a response

**Why "Middleware"?**

The name tells you exactly what it is:
- **Middle** = In the middle
- **Ware** = Software

It's software that sits in the **middle** of the request-response cycle.

**The Mental Model: Security Checkpoints**

```
Think of middleware like airport security layers:

Passenger → [Check boarding pass] → [Metal detector] → [Bag scan] → Gate
Request →   [Middleware 1]       → [Middleware 2]    → [Middleware 3] → Route Handler
```

Each checkpoint:
- **Inspects** something about the request
- **Decides**: let them through OR stop them
- **Can modify** the request (attach information like user data)
- **Can reject early** (return error without reaching the route)

**Real-World Code Example (Conceptual):**

```
Without Middleware (Bad):
app.get('/profile', (req, res) => {
  // Have to check auth HERE
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'No token' });
  
  try {
    const user = jwt.verify(token, SECRET);
    // Now do profile logic
    res.json({ user });
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
});

app.get('/settings', (req, res) => {
  // Have to check auth AGAIN (copy-paste!)
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'No token' });
  
  try {
    const user = jwt.verify(token, SECRET);
    // Now do settings logic
    res.json({ settings: user.settings });
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
});

// Copy-paste auth logic into EVERY protected route! 😱
```

```
With Middleware (Good):
function authenticate(req, res, next) {
  // Auth logic written ONCE
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'No token' });
  
  try {
    const user = jwt.verify(token, SECRET);
    req.user = user;  // Attach to request
    next();  // Continue to route
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Now use it everywhere:
app.get('/profile', authenticate, (req, res) => {
  res.json({ user: req.user });  // User already verified!
});

app.get('/settings', authenticate, (req, res) => {
  res.json({ settings: req.user.settings });  // User already verified!
});

// Auth logic in ONE place, used everywhere! 🎉
```

**Key Insight:**

Middleware lets you write logic once and reuse it. It's the DRY principle (Don't Repeat Yourself) applied to request handling.

### 2.2 How Middleware Works

**The Request Pipeline:**

```
┌─────────────────────────────────────────────────────────┐
│  Request Flow Through Middleware                        │
└─────────────────────────────────────────────────────────┘

1. Request Arrives
   ↓
2. Middleware 1 (Logger)
   - Log request details
   - Call next()
   ↓
3. Middleware 2 (Authentication)
   - Check if token exists
   - Verify token
   - If valid: attach user to req, call next()
   - If invalid: return 401 error (STOP HERE)
   ↓
4. Route Handler
   - Access req.user (from middleware)
   - Do business logic
   - Send response
```

**Key Insight:**
- Middleware can **stop** the pipeline (return error)
- Middleware can **modify** the request (attach data)
- Middleware can **continue** the pipeline (call `next()`)

### 2.3 The `next()` Function

**What is `next()`?**
> `next()` = "I'm done, pass control to the next function in the pipeline"

**Why Does `next()` Exist?**

In Express, the server doesn't automatically know when your middleware is "done". You have to explicitly tell it:

- **Option 1:** Send a response → Pipeline ends, client gets answer
- **Option 2:** Call `next()` → Continue pipeline, next function runs

**The Relay Race Analogy:**

```
Runner 1 (Middleware 1):
- Runs their leg
- Passes baton to Runner 2
- next() = passing the baton

Runner 2 (Middleware 2):
- Receives baton
- Runs their leg
- Passes baton to Runner 3
- next() = passing the baton

Runner 3 (Route Handler):
- Receives baton
- Finishes race
- Sends response
```

**Code Example:**

```javascript
// Middleware 1: Logger
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();  // ← I'm done, move to next middleware
}

// Middleware 2: Auth
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  
  if (!token) {
    // Don't call next() - send error and STOP
    return res.status(401).json({ error: 'No token' });
  }
  
  try {
    req.user = jwt.verify(token, SECRET);
    next();  // ← Token valid, continue to route
  } catch (err) {
    // Don't call next() - send error and STOP
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Route Handler
function getProfile(req, res) {
  // No next() here - this is the end of the pipeline
  res.json({ user: req.user });
}

// Apply them:
app.get('/profile', logger, authenticate, getProfile);
//                   ↓       ↓            ↓
//                  Run 1st  Run 2nd     Run 3rd (if auth passes)
```

**What Happens Without `next()`?**

```javascript
function brokenMiddleware(req, res, next) {
  console.log('Checking something...');
  // Oops! Forgot to call next()
  // Pipeline STOPS here
}

app.get('/test', brokenMiddleware, (req, res) => {
  // This NEVER runs!
  res.json({ message: 'Success' });
});

// Result:
// 1. Client sends request
// 2. brokenMiddleware runs, logs message
// 3. Pipeline stops (no next() called)
// 4. Route handler never runs
// 5. No response sent
// 6. Client waits... waits... waits... TIMEOUT
```

**The Golden Rules:**

```
✅ Call next() when:
- Everything is okay
- You want the pipeline to continue
- You're NOT sending a response

❌ Don't call next() when:
- You're sending a response (return res.json(...))
- You want to stop the pipeline (like on auth failure)
- You're in the route handler (last function)

🚨 NEVER do both:
function badMiddleware(req, res, next) {
  res.json({ error: 'Something wrong' });
  next();  // ← BUG! Already sent response!
}
// This causes "Can't set headers after they're sent" error
```

**When NOT to Call `next()`:**
- When you send a response (error or success)
- When you want to stop the pipeline
- When authentication fails
- When you're in the final route handler

**Understanding the Flow:**

```
Request arrives
  ↓
Middleware 1: next() called → Continue
  ↓
Middleware 2: next() called → Continue
  ↓
Middleware 3: NO next() + res.json() → End
  ↓
Response sent to client
```

### 2.4 Authentication Middleware Specifically

**Purpose:**
> Check if user is logged in before allowing access to protected routes

**What Auth Middleware Does:**

```
┌─────────────────────────────────────────────────────────┐
│  Authentication Middleware Flow                         │
└─────────────────────────────────────────────────────────┘

Step 1: Extract Token
Look for Authorization header
→ Header exists? Continue
→ No header? Return 401 "No token provided"

Step 2: Verify Token
Use jwt.verify() with secret key
→ Valid? Continue
→ Invalid/Expired? Return 401 "Invalid token"

Step 3: Attach User Info
Extract user data from token payload
Attach to req.user

Step 4: Continue
Call next()
Route handler can now access req.user
```

### 2.5 The `req` Object as a Messenger

**Important Concept:**
> The `req` object travels through the entire pipeline. Middleware can attach data to it.

**Understanding the `req` Object:**

The `req` (request) object is JavaScript object that represents the HTTP request. When a client makes a request, Express creates this object and passes it through your middleware pipeline.

**Key Point:** It's the **same object** passed to every function in the pipeline. This means middleware can modify it, and those modifications are visible to all subsequent functions.

**The Messenger Analogy:**

```
Think of req as a messenger carrying a package that gets stamps/stickers added at each checkpoint:

Client sends request
  ↓
req = { 
  method: 'GET', 
  url: '/profile', 
  headers: { authorization: 'Bearer token123' }
}
  ↓
Middleware 1: Adds timestamp stamp
req.timestamp = Date.now()
  ↓
Middleware 2 (Auth): Adds user info sticker
req.user = { id: '123', email: 'alice@example.com' }
  ↓
Middleware 3: Adds request ID
req.requestId = 'req_xyz789'
  ↓
Route Handler: Opens the package
console.log(req.timestamp)  // 1698765432000
console.log(req.user)        // { id: '123', email: 'alice@example.com' }
console.log(req.requestId)   // 'req_xyz789'
```

**Detailed Example:**

```javascript
// Middleware 1: Logging
function requestLogger(req, res, next) {
  req.startTime = Date.now();  // ← Attach start time
  console.log(`[${req.method}] ${req.url}`);
  next();
}

// Middleware 2: Authentication
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }
  
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;  // ← Attach user to request
    req.isAuthenticated = true;  // ← Attach auth flag
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Route Handler
function getProfile(req, res) {
  // We can access EVERYTHING attached by middleware:
  console.log('Request started at:', req.startTime);
  console.log('User is authenticated:', req.isAuthenticated);
  console.log('User info:', req.user);
  
  // Use the user info to return their profile
  res.json({
    profile: {
      id: req.user.id,
      email: req.user.email,
      requestedAt: req.startTime
    }
  });
}

app.get('/profile', requestLogger, authenticate, getProfile);
```

**What Gets Attached:**

```
Initial req object (from Express):
{
  method: 'GET',
  url: '/profile',
  headers: { authorization: 'Bearer abc123...' },
  query: {},
  params: {},
  body: {}
}

After requestLogger middleware:
{
  method: 'GET',
  url: '/profile',
  headers: { authorization: 'Bearer abc123...' },
  query: {},
  params: {},
  body: {},
  startTime: 1698765432000  // ← Added by middleware
}

After authenticate middleware:
{
  method: 'GET',
  url: '/profile',
  headers: { authorization: 'Bearer abc123...' },
  query: {},
  params: {},
  body: {},
  startTime: 1698765432000,
  user: {  // ← Added by middleware
    id: '123',
    email: 'alice@example.com'
  },
  isAuthenticated: true  // ← Added by middleware
}

Route handler receives FULL object with all additions!
```

**Why This Matters:**
- **Middleware does the work** (extracting/verifying token)
- **Route handler gets clean data** (req.user is already there)
- **Separation of concerns**: Auth logic separate from business logic
- **Single source of truth**: User info extracted once, used everywhere

**The Power of This Pattern:**

Without this pattern, every route would need to:
1. Extract the token from headers
2. Verify the token
3. Decode the payload
4. Then do its actual work

With this pattern:
1. Middleware handles steps 1-3 ONCE
2. Route just uses req.user

This is why middleware is so powerful!

### 2.6 Reusability – The Power of Middleware

**One Middleware, Many Routes:**

```
Authentication Middleware:
└─ Written once
   ├─ Protect /api/profile
   ├─ Protect /api/posts (create, update, delete)
   ├─ Protect /api/comments (create, update, delete)
   ├─ Protect /api/settings
   └─ Protect any future routes

Without Middleware:
└─ Copy-paste token verification code into EVERY route
   └─ 10 routes = 10 copies of the same code
   └─ Bug fix = update 10 places
   └─ Maintenance nightmare
```

**The DRY Principle:**
- **D**on't **R**epeat **Y**ourself
- Write auth logic once
- Apply everywhere
- Change once, affect all routes

---

## Section 3: Authorization Headers (6 minutes)

### 3.1 How Tokens Travel

**The Question:** You have a JWT token. The server needs it. How does it get there?

**Answer:** Through HTTP headers!

**HTTP Headers Refresher:**
> Headers = Metadata about the request (separate from the body)

Think of an HTTP request like sending a package:
- **URL** = The delivery address
- **Body** = The package contents
- **Headers** = The shipping labels and metadata

Headers tell the server *about* the request without being part of the actual data.

**Common Headers:**
```
Content-Type: application/json     ← What kind of data you're sending
Accept: application/json            ← What kind of data you want back
User-Agent: Mozilla/5.0...          ← What browser/client you're using
Host: api.example.com               ← Which server to send to
Cookie: sessionId=abc123            ← Session cookies (if using sessions)
Authorization: Bearer <token>       ← Proof of identity (our focus!) 🎯
```

**Why Not in the Body?**

You might wonder: "Why not send the token in the request body?"

```json
POST /api/profile
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "otherData": "..."
}
```

**Problems with this approach:**
1. **GET requests don't have bodies** - You'd need different logic for GET vs POST
2. **Mixing concerns** - Auth info mixed with business data
3. **Not standard** - Every API would handle it differently
4. **Harder to implement** - Need to check body for every request

**Why Headers Work Better:**
1. ✅ **Universal** - All request types (GET, POST, PUT, DELETE) have headers
2. ✅ **Separation** - Auth separate from business logic
3. ✅ **Standard** - Everyone uses the Authorization header the same way
4. ✅ **Automatic** - Middleware can extract it in one place

### 3.2 The Authorization Header Standard

**Standard Format:**
```
Authorization: Bearer <token>
              └──┬──┘ └───┬───┘
                 │        └─ The actual JWT token
                 └─ The authentication scheme
```

**Breaking It Down:**

```
Full Header:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyJ9.abc123

Part 1: "Authorization"
  → The header name (standard HTTP header)

Part 2: "Bearer"
  → The authentication scheme/type
  → Tells server HOW to interpret the credential

Part 3: "eyJhbGciOiJIUz..."
  → The actual JWT token
  → The credential itself
```

**Why "Bearer"?**

The word "Bearer" has a specific legal/financial meaning:

- **Bearer** = "The bearer of this token is authenticated"
- "Whoever possesses (bears) this token is authorized"
- Like a bearer bond or bearer check: whoever physically holds it owns it

**Real-World Analogy:**

```
Movie Theater Ticket:
"Admit one bearer"
  ↓
Whoever holds this ticket can enter
No ID check needed
The ticket itself is proof

JWT Token:
"Authorization: Bearer <token>"
  ↓
Whoever presents this token is authenticated
No password needed
The token itself is proof
```

**Other Authentication Schemes (Less Common):**

```
1. Basic Auth:
   Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
   └─ Username:password encoded in Base64
   └─ Less secure (credentials sent with every request)
   └─ Used for simple APIs

2. Digest Auth:
   Authorization: Digest username="alice", realm="..."
   └─ Hash-based authentication
   └─ More secure than Basic
   └─ Rarely used today

3. Bearer (JWT/OAuth):
   Authorization: Bearer eyJhbGci...
   └─ Token-based
   └─ Most common for modern apps ✅
   └─ What we're using!

4. API Key (non-standard):
   Authorization: ApiKey abc123
   OR
   X-API-Key: abc123
   └─ Custom schemes
   └─ Common for public APIs
```

**Why Bearer + JWT is the Standard:**
- ✅ **Stateless** - No server-side session storage needed
- ✅ **Scalable** - Works across multiple servers
- ✅ **Flexible** - Works for web, mobile, IoT
- ✅ **Secure** - Cryptographically signed
- ✅ **Standard** - Everyone uses it the same way

### 3.3 Where Does the Token Come From?

**The Token Lifecycle:**

```
┌─────────────────────────────────────────────────────────┐
│  Token Journey                                          │
└─────────────────────────────────────────────────────────┘

1. User Logs In
   POST /api/auth/login
   { email, password }

2. Server Returns Token
   Response: { token: "eyJhbGciOiJIUzI1NiIs..." }

3. Client Stores Token
   localStorage.setItem('token', token)
   OR
   sessionStorage.setItem('token', token)
   OR
   In-memory variable

4. Client Includes Token in Future Requests
   fetch('/api/profile', {
     headers: {
       'Authorization': `Bearer ${token}`
     }
   })

5. Server Extracts and Verifies Token
   Middleware reads Authorization header
   Verifies token
   Attaches user to req.user
```

### 3.4 Reading the Authorization Header

**Extracting the Token:**

```
Authorization Header: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                       └──┬──┘ └────────────────┬──────────────────┘
                        Word     Actual token we want
                      "Bearer"

Steps to Extract:
1. Get header: req.headers.authorization
2. Check it exists and starts with "Bearer "
3. Remove "Bearer " prefix
4. What's left is the token
```

**Why the "Bearer " Prefix Matters:**
- Follows HTTP standards
- Indicates the auth scheme being used
- Server knows how to interpret the token
- Tools (Postman, browsers) recognize the format

### 3.5 Security Considerations

**HTTPS is Critical:**

```
HTTP (Unencrypted):
Client → [Token visible in plain text] → Server
         └─ Anyone monitoring network can see token
         └─ Anyone can steal and use it

HTTPS (Encrypted):
Client → [Token encrypted in transit] → Server
         └─ Network monitoring sees gibberish
         └─ Token is safe from eavesdropping
```

**Best Practices:**
- ✅ Always use HTTPS in production
- ✅ Use short token expiration times (15 min - 1 hour)
- ✅ Never log tokens in server logs
- ✅ Never send tokens in URL query params (visible in logs)
- ❌ Don't use HTTP (tokens stolen easily)
- ❌ Don't store tokens in cookies without HttpOnly flag

---

## Section 4: Protected Routes (8 minutes)

### 4.1 Public vs Protected Routes

**The Concept:**
> Some data is for everyone, some data is private

**Real-World Examples:**

```
Public Routes (No Authentication):
├── Homepage
├── Product Listings
├── Blog Posts (published)
├── About Page
├── Login/Signup Pages
└── Public API Documentation

Protected Routes (Authentication Required):
├── User Profile
├── Account Settings
├── Shopping Cart
├── Order History
├── Draft Blog Posts
├── Admin Dashboard
└── User-Specific Data
```

**The Key Question:**
> "Should this data be visible/modifiable by everyone, or only by authenticated users?"

### 4.2 How Route Protection Works

**Without Middleware (Public Route):**

```
Request: GET /api/public-posts
  ↓
Route Handler runs immediately
  ↓
Return data
```

**With Middleware (Protected Route):**

```
Request: GET /api/my-posts
  ↓
Auth Middleware runs first
  ├─ Token valid? → Continue to Route Handler
  └─ No token / Invalid token? → Return 401 (STOP)
  ↓
Route Handler runs (only if middleware passed)
  ↓
Access req.user (from middleware)
  ↓
Return user-specific data
```

### 4.3 Protecting a Route – The Pattern

**Applying Middleware:**

```
Public Route (no middleware):
app.get('/api/posts', handleGetPosts)
           └──┬──┘      └──────┬─────┘
           Route path    Route handler
                         (runs immediately)

Protected Route (with middleware):
app.get('/api/profile', authenticate, handleGetProfile)
           └──┬──┘      └─────┬─────┘  └───────┬──────┘
           Route path    Middleware    Route handler
                        (runs first)   (runs if middleware passes)
```

**Multiple Middlewares:**

```
app.post('/api/admin/users', authenticate, requireAdmin, handleCreateUser)
                              └──────┬──────┘ └─────┬────┘ └──────┬──────┘
                                     │              │             │
                              Check logged in  Check is admin  Create user

Middleware run in order:
1. authenticate → Is user logged in?
2. requireAdmin → Is user an admin?
3. handleCreateUser → Create the user (only if both pass)
```

### 4.4 Accessing User Info in Route Handlers

**Why Middleware Attaches req.user:**

```
┌─────────────────────────────────────────────────────────┐
│  From Token to req.user                                 │
└─────────────────────────────────────────────────────────┘

Token Payload:
{
  id: "12345",
  email: "alice@example.com",
  role: "user"
}

Middleware:
1. Verify token
2. Extract payload
3. Attach to req.user

Route Handler:
req.user is now available:
{
  id: "12345",
  email: "alice@example.com",
  role: "user"
}

Use it for:
- Finding user's specific data
- Checking permissions
- Logging actions
- Personalization
```

**Example Use Cases:**

```
Get My Profile:
→ Find user with ID from req.user.id

Get My Posts:
→ Find posts where author = req.user.id

Update My Settings:
→ Update user with ID = req.user.id

Delete My Comment:
→ Find comment by ID
→ Check comment.authorId === req.user.id
→ If match: delete, else: 403 Forbidden
```

### 4.5 User-Specific Data Retrieval

**The Pattern:**
> Use `req.user.id` to find data belonging to the authenticated user

**Mental Model: Filtering by Owner**

```
Database has many posts:
[
  { id: 1, title: "Post 1", authorId: "123" },
  { id: 2, title: "Post 2", authorId: "456" },
  { id: 3, title: "Post 3", authorId: "123" },
  { id: 4, title: "Post 4", authorId: "789" }
]

Request: GET /api/my-posts
Token decoded: { id: "123", email: "alice@example.com" }

Filter: posts where authorId === req.user.id
Result: 
[
  { id: 1, title: "Post 1", authorId: "123" },
  { id: 3, title: "Post 3", authorId: "123" }
]

Only returns posts belonging to the authenticated user!
```

---

## Section 5: Token Verification (8 minutes)

### 5.1 What Verification Checks

**The Four Checks:**

```
┌─────────────────────────────────────────────────────────┐
│  JWT Verification Process                               │
└─────────────────────────────────────────────────────────┘

Check 1: Structure
Is it three parts? (header.payload.signature)
→ Yes? Continue
→ No? Reject (malformed token)

Check 2: Signature
Recreate signature using header + payload + SECRET_KEY
Does it match the token's signature?
→ Match? Continue (token is authentic)
→ No match? Reject (token was tampered with)

Check 3: Expiration
Is current time < exp claim?
→ Yes? Continue
→ No? Reject (token expired)

Check 4: Algorithm
Is the algorithm what we expect? (HS256)
→ Yes? Continue
→ No? Reject (algorithm confusion attack)

All checks pass? → Token is valid ✅
```

### 5.2 Why Verification is Stateless

**The Power of JWT:**
> Server doesn't need to look up anything in a database to verify authenticity

**Session-Based (Stateful):**
```
Request comes in with session ID
  ↓
Look up session ID in database/memory
  ↓
Found? User is authenticated
Not found? Reject

Database hit on EVERY request
```

**Token-Based (Stateless):**
```
Request comes in with JWT token
  ↓
Verify signature with SECRET_KEY (CPU operation)
  ↓
Signature valid? User is authenticated
Signature invalid? Reject

No database hit needed!
```

**Why This Matters:**
- **Performance**: No database lookup = faster
- **Scalability**: Any server can verify tokens (no shared session store)
- **Simplicity**: Server doesn't need to remember tokens

### 5.3 The Signature Proves Authenticity

**How Tampering is Detected:**

```
Original Token:
Payload: { id: "123", email: "alice@example.com" }
Signature: HMACSHA256(header + payload, SECRET_KEY) = "xyz789"

Attacker Tries to Change Payload:
Payload: { id: "123", email: "hacker@evil.com" }
But attacker doesn't know SECRET_KEY
So attacker can't create valid signature
Signature: still "xyz789" (doesn't match new payload)

Server Verification:
1. Recreate signature: HMACSHA256(header + tampered_payload, SECRET_KEY)
2. Result: "abc123" (different!)
3. Compare with token signature: "xyz789"
4. Mismatch! → Reject token ❌
```

**The Security Guarantee:**
- Only someone with the SECRET_KEY can create valid signatures
- Attacker can change payload, but can't forge signature
- Server detects tampering immediately

### 5.4 Token Expiration – Time-Limited Access

**Why Tokens Expire:**
```
Without Expiration:
Token stolen → Valid forever
User can't revoke access
Token compromised? → No defense

With Expiration:
Token stolen → Valid for limited time
Expires after 1 hour (or 15 min)
Attacker has limited window
User can wait it out (or change password to invalidate future tokens)
```

**Common Expiration Times:**
- **Access tokens**: 15 minutes to 1 hour (short-lived)
- **Refresh tokens**: 7 days to 30 days (long-lived)
- **Email verification**: 24 hours
- **Password reset**: 1 hour

**The Expiration Check:**
```
Token payload: { exp: 1729612800 }  // Unix timestamp
Current time:  1729610000

Is current time < exp?
1729610000 < 1729612800 → Yes, token still valid ✅

[2800 seconds later...]

Current time: 1729615000
Is current time < exp?
1729615000 < 1729612800 → No, token expired ❌
```

### 5.5 Common Token Errors

**Error Types:**

```
1. TokenExpiredError
Reason: Token's exp claim is in the past
Fix: User must log in again

2. JsonWebTokenError: invalid signature
Reason: Token was tampered with, or wrong SECRET_KEY
Fix: User must log in again

3. JsonWebTokenError: jwt malformed
Reason: Token doesn't have three parts (header.payload.signature)
Fix: User must log in again

4. JsonWebTokenError: invalid algorithm
Reason: Token uses unexpected algorithm
Fix: User must log in again
```

**Handling Errors:**
- All verification errors → Return 401 Unauthorized
- User must log in again to get new valid token
- Frontend should redirect to login page

---

## Section 6: HTTP Status Codes (5 minutes)

### 6.1 Authentication Status Codes

**The Key Codes:**

```
200 OK
└─ Request succeeded
   └─ Used for: Successful login, successful data retrieval

201 Created
└─ Resource was created
   └─ Used for: Successful signup (new user created)

400 Bad Request
└─ Client sent invalid data
   └─ Used for: Missing fields, invalid email format, weak password

401 Unauthorized (really means "Unauthenticated")
└─ User didn't prove who they are
   └─ Used for: No token, invalid token, expired token, wrong password

403 Forbidden (really means "Unauthorized")
└─ User proved who they are, but doesn't have permission
   └─ Used for: Valid token, but user lacks permissions (not admin, not owner)

409 Conflict
└─ Request conflicts with existing data
   └─ Used for: Email already registered, username taken

500 Internal Server Error
└─ Something went wrong on server
   └─ Used for: Database errors, unexpected exceptions
```

### 6.2 401 vs 403 – The Confusion

**The Names are Misleading:**

```
401 "Unauthorized" actually means "Unauthenticated"
├─ "Who are you?"
├─ "I don't recognize you"
├─ "Prove your identity"
└─ Missing/invalid token, wrong password

403 "Forbidden" actually means "Unauthorized"
├─ "I know who you are"
├─ "But you can't do this"
├─ "Insufficient permissions"
└─ Valid token, but wrong role/permissions
```

**Examples:**

```
401 Scenarios:
├─ User not logged in (no token)
├─ Token expired
├─ Token invalid
└─ Wrong password on login

403 Scenarios:
├─ Regular user trying to access admin panel
├─ User trying to delete someone else's post
├─ User trying to modify another user's profile
└─ Valid login, insufficient permissions
```

### 6.3 When to Use Which Code

**Decision Tree:**

```
Is the user logged in (valid token)?
├─ NO → 401 Unauthorized
│   └─ "You need to log in"
│
└─ YES → Does the user have permission?
    ├─ NO → 403 Forbidden
    │   └─ "You can't do this"
    │
    └─ YES → Continue with request
        └─ 200 OK or 201 Created
```

---

## Section 7: Logout – The Paradox (5 minutes)

### 7.1 The JWT Logout Problem

**The Challenge:**
> JWTs are stateless – server doesn't "remember" issuing them, so server can't "forget" them either

**What Logout Means:**

```
Session-Based (Stateful):
Logout → Delete session from server
       → Session ID becomes invalid
       → User can't access protected routes
       
Token-Based (Stateless):
Logout → ??? 
       → Server doesn't store tokens
       → Token remains valid until expiration
       → Can't "delete" something server doesn't have
```

### 7.2 Client-Side Logout (Simple Approach)

**The Most Common Solution:**
> Delete the token from client storage

```
┌─────────────────────────────────────────────────────────┐
│  Client-Side Logout Flow                                │
└─────────────────────────────────────────────────────────┘

User clicks "Logout"
  ↓
Client deletes token from storage
  localStorage.removeItem('token')
  OR
  Set token variable to null
  ↓
Client redirects to login page
  ↓
Future requests don't include token
  ↓
Server sees no token → 401 Unauthorized
  ↓
User effectively logged out
```

**Why This Works:**
- User can no longer include token in requests
- Without token, can't access protected routes
- Simple, no server-side changes needed

**The Limitation:**
- Token is still technically valid until expiration
- If attacker stole token before logout, they can still use it
- Solution: Short expiration times (15 min - 1 hour)

### 7.3 Server-Side Logout (Advanced)

**Approaches:**

```
1. Token Blacklist
├─ Store invalidated tokens in database/Redis
├─ Check blacklist on every request
├─ If token in blacklist → Reject
└─ Problem: Defeats the purpose of stateless tokens

2. Token Versioning
├─ Store version number in user record
├─ Include version in JWT payload
├─ On logout: increment user's version
├─ On verification: check token version matches user's version
└─ Problem: Requires database lookup (less stateless)

3. Short Expiration + Refresh Tokens
├─ Access token expires in 15 minutes
├─ Refresh token stored in database
├─ On logout: delete refresh token from database
├─ Access token invalid after 15 min
└─ Best practice for high-security apps
```

### 7.4 Refresh Token Pattern (Industry Standard)

**The Hybrid Approach:**

```
┌─────────────────────────────────────────────────────────┐
│  Access Token + Refresh Token Pattern                   │
└─────────────────────────────────────────────────────────┘

Login:
Issue TWO tokens:
1. Access Token (JWT)
   - Short-lived (15 min)
   - Used for API requests
   - Stateless (not stored)
   
2. Refresh Token (Random string)
   - Long-lived (7 days)
   - Stored in database
   - Used to get new access tokens

Using the App:
- Include access token in requests
- Access token expires after 15 min
- Use refresh token to get new access token
- Refresh token checked against database

Logout:
- Delete access token from client
- Delete refresh token from database
- Access token invalid after 15 min
- Refresh token can't issue new tokens
```

**Why This Works:**
- Short-lived access tokens limit exposure
- Can revoke refresh tokens in database
- Balances security and user experience
- User doesn't log in every 15 minutes

---

## Section 8: Putting It All Together (5 minutes)

### 8.1 The Complete Authentication Flow

```
┌─────────────────────────────────────────────────────────┐
│  End-to-End Authentication System                       │
└─────────────────────────────────────────────────────────┘

DAY 1: NEW USER
═══════════════

1. Signup
   POST /api/auth/signup
   { email, username, password }
   ↓
   Server:
   - Validate input
   - Hash password with bcrypt
   - Save user to database
   - Generate JWT token
   - Return { token, user }
   ↓
   Client:
   - Store token
   - Redirect to app

2. Use App (Authenticated)
   GET /api/profile
   Headers: { Authorization: Bearer <token> }
   ↓
   Middleware:
   - Extract token from header
   - Verify signature and expiration
   - Attach user to req.user
   ↓
   Route Handler:
   - Access req.user
   - Return user-specific data

DAY 2: RETURNING USER
═════════════════════

3. Login
   POST /api/auth/login
   { email, password }
   ↓
   Server:
   - Find user by email
   - Compare password with bcrypt.compare()
   - Generate NEW JWT token
   - Return { token, user }
   ↓
   Client:
   - Store new token
   - Redirect to app

4. Use App (Authenticated)
   [Same as step 2]

5. Logout
   Client:
   - Delete token from storage
   - Redirect to login
```

### 8.2 The Security Layers

```
Layer 1: Password Security
└─ bcrypt hashing (one-way, salted, slow)

Layer 2: Token Security
└─ JWT signature (tamper-proof, expiring)

Layer 3: Transport Security
└─ HTTPS (encrypted in transit)

Layer 4: Storage Security
└─ Secure token storage (HttpOnly cookies or secure localStorage)

Layer 5: Validation Security
└─ Input validation (prevent injection attacks)

Layer 6: Error Security
└─ Generic error messages (don't leak info)
```

### 8.3 Common Vulnerabilities

```
❌ Storing Passwords in Plain Text
Fix: Always hash with bcrypt

❌ Using Weak/Predictable SECRET_KEY
Fix: Generate strong random secret (32+ characters)

❌ No Token Expiration
Fix: Always set expiration (expiresIn: '1h')

❌ Tokens in URL Query Params
Fix: Use Authorization header only

❌ Not Using HTTPS
Fix: Always use HTTPS in production

❌ Storing Tokens in Plain localStorage (XSS risk)
Fix: Use HttpOnly cookies or in-memory storage for high-security apps

❌ Revealing "User exists" vs "Wrong password"
Fix: Use generic "Invalid credentials" message
```

### 8.4 Production Checklist

```
✅ Environment Variables
   - JWT_SECRET in .env (not hardcoded)
   - Strong random secret (32+ characters)

✅ Password Requirements
   - Minimum 8 characters
   - Complexity requirements (optional)
   - Rate limiting on login/signup

✅ Token Configuration
   - Short expiration (15 min - 1 hour)
   - Refresh token pattern for long sessions

✅ HTTPS
   - All production traffic encrypted
   - Secure cookie flags if using cookies

✅ Input Validation
   - Email format validation
   - Password strength requirements
   - Sanitize inputs

✅ Error Handling
   - Generic error messages
   - Don't leak user existence
   - Log errors securely (don't log tokens/passwords)

✅ Monitoring
   - Log failed login attempts
   - Alert on unusual patterns
   - Track token usage
```

---

## Section 9: Homework Assignment (3 minutes)

### Assignment: Complete Authentication System

**Requirements:**

**1. Login Route (30 points)**
- POST `/api/auth/login`
- Accept email and password
- Find user in database
- Verify password with bcrypt.compare()
- Generate JWT token (expires in 7 days)
- Return token and user info (without password)
- Handle errors (user not found, wrong password)
- Use same error message for both cases

**2. Authentication Middleware (25 points)**
- Create `authenticate` middleware function
- Extract token from Authorization header
- Remove "Bearer " prefix
- Verify token with jwt.verify()
- Attach decoded user to req.user
- Handle errors (no token, invalid token, expired token)
- Return 401 for all auth failures

**3. Protected Route (25 points)**
- Create GET `/api/profile` route
- Apply authenticate middleware
- Access req.user from middleware
- Find user in database by req.user.id
- Return user profile (without password)
- Return 401 if not authenticated

**4. User-Specific Route (20 points)**
- Create GET `/api/my-posts` route
- Apply authenticate middleware
- Find posts where authorId = req.user.id
- Return only the authenticated user's posts
- Ensure users can't see other users' posts

**Bonus Challenges** (Extra Credit):
- Logout endpoint with token blacklist (+10 points)
- Refresh token implementation (+15 points)
- Rate limiting on login endpoint (+5 points)
- Role-based authorization middleware (+10 points)

**Testing Checklist:**
- ✅ Can login with correct credentials
- ✅ Rejects wrong password
- ✅ Rejects non-existent email
- ✅ Same error message for both failures
- ✅ Can access /api/profile with valid token
- ✅ Rejects access without token
- ✅ Rejects access with invalid token
- ✅ Rejects access with expired token
- ✅ /api/my-posts returns only user's posts
- ✅ Token includes user info in payload

**Deliverables:**
- Complete authentication system (signup from Class 13 + login from Class 14)
- Authentication middleware
- At least 2 protected routes
- Thunder Client/Postman collection for testing
- README with API documentation

---

## Key Takeaways

**The Three Pillars of Authentication:**

1. **Login = Verification + Token Issuance**
   - Don't create new user, verify existing one
   - Use bcrypt.compare() to check password
   - Issue fresh JWT token on successful login

2. **Middleware = Reusable Security Layer**
   - Functions that run before route handlers
   - Extract and verify JWT token
   - Attach user info to req.user
   - Call next() to continue pipeline

3. **Protected Routes = Middleware + Route Handler**
   - Apply authenticate middleware to protect routes
   - Middleware ensures user is logged in
   - Route handler accesses req.user
   - Return user-specific data

**The Request Lifecycle:**
```
Request → Middleware (verify token) → Route Handler (business logic) → Response
         └─ Attach req.user          └─ Access req.user
```

**Security Best Practices:**
1. Use bcrypt.compare() for password verification (never `===`)
2. Same error message for "user not found" and "wrong password"
3. Always verify tokens on protected routes
4. Use HTTPS in production
5. Short token expiration times
6. Store SECRET_KEY in environment variables

**Token Flow:**
```
Login → Issue token → Client stores token → Include in headers → Middleware verifies → Route accesses user info
```

---

## Additional Resources

**JWT Tools:**
- [JWT.io](https://jwt.io/) - Decode and debug JWTs
- [jsonwebtoken npm](https://www.npmjs.com/package/jsonwebtoken) - Official JWT library

**Middleware Concepts:**
- [Express Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)
- [Writing Middleware](https://expressjs.com/en/guide/writing-middleware.html)

**Security Reading:**
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [JWT Security Best Practices](https://tools.ietf.org/html/rfc8725)

**Advanced Topics:**
- Refresh token patterns
- Token rotation strategies
- OAuth 2.0 and social login
- Multi-factor authentication (MFA)
- Role-based access control (RBAC)

---

**Remember:** Authentication is a two-step process: **Signup** creates the account, **Login** verifies identity. Middleware is your reusable security layer that keeps route handlers clean and focused on business logic. 🔐

