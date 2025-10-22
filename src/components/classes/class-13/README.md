# Class 13 – Authentication Concepts & Signup Route

## Class Overview (50 minutes)

Class 13 introduces students to one of the most critical aspects of modern web development: **authentication**. Nearly every real-world application needs to know who its users are, verify their identity, and control what they can access. This class bridges backend development with security, teaching students how to build signup systems that protect user data and establish trust.

- **Prerequisites**: Node.js, Express, MongoDB/Mongoose, async/await, REST API fundamentals
- **Scope**: Authentication vs authorization, session vs token-based auth, password security, JWT, signup route implementation
- **Outcome**: Students understand authentication models and can build secure user registration systems

---

## Section 0: The Big Picture – Why Authentication Matters (6 minutes)

### 0.1 The Fundamental Problem

**Imagine a world without authentication:**

```
Anyone can:
- Read your emails
- Post as you on social media
- Access your bank account
- Modify your files
- See your private photos

This is chaos. This is why authentication exists.
```

**The Core Questions Every App Must Answer:**
1. **Who are you?** → Authentication answers this
2. **What can you do?** → Authorization answers this

### 0.2 Authentication vs Authorization

These terms are often confused, but they serve different purposes:

**Authentication = Proving Who You Are**

Think of authentication like showing your ID at airport security:
- You present your passport/driver's license
- Security verifies it's really you
- You're now "authenticated" as John Doe
- But this doesn't tell them where you can fly

**Authorization = Deciding What You Can Do**

Authorization is like your boarding pass:
- You're authenticated as John Doe
- Your ticket says you can board Flight 123, Seat 14A
- You can't board Flight 456 or sit in First Class
- Your permissions are limited to what you're authorized for

**Real-World Web Examples:**

```
Gmail:
├── Authentication: Log in with email + password
│   └── "Yes, you are alice@gmail.com"
└── Authorization: What can you do?
    ├── ✅ Read your own emails
    ├── ✅ Send emails from your account
    ├── ❌ Read someone else's emails
    └── ❌ Delete other users' accounts
```

```
Social Media (Instagram):
├── Authentication: Log in with username + password
│   └── "Yes, you are @alice"
└── Authorization: What can you do?
    ├── ✅ Post on your own feed
    ├── ✅ Edit your photos
    ├── ✅ Delete your comments
    ├── ❌ Delete other users' posts
    └── ❌ Access private accounts you don't follow
```

**The Key Difference:**
- **Authentication**: "Who are you?" → One-time verification
- **Authorization**: "What can you do?" → Ongoing permission checks

### 0.3 Why This Matters for Web Developers

**Real-World Stats:**
- 81% of data breaches involve stolen or weak passwords
- A single data breach costs companies an average of $4.24 million
- 95% of cybersecurity breaches are due to human error (poor authentication)

**What This Means for You:**
Building authentication isn't optional—it's your responsibility as a developer to protect user data. One mistake can expose millions of users.

**Your Obligations:**
1. **Store passwords securely** (never in plain text!)
2. **Protect user sessions** (don't let others impersonate users)
3. **Validate inputs** (prevent injection attacks)
4. **Use HTTPS** (encrypt data in transit)
5. **Handle errors carefully** (don't leak security info)

---

## Section 1: Authentication Models (12 minutes)

### 1.1 The Two Main Approaches

Modern web applications use two primary authentication models:

```
Authentication Models
├── 📝 Session-Based (Stateful)
│   └── Server remembers who you are
│   └── Uses cookies to track sessions
│   └── Traditional web apps
│
└── 🎫 Token-Based (Stateless)
    └── Server doesn't remember you
    └── You prove who you are each time
    └── Modern SPAs and mobile apps
```

**Mental Model:**

**Session-Based = Restaurant Reservation**
- You call and make a reservation for 7pm
- The restaurant writes your name in their book
- You arrive and say "I have a reservation under Alice"
- They check their book → "Yes, table for 2"
- The restaurant had to remember you (stateful)

**Token-Based = Movie Ticket**
- You buy a movie ticket
- The ticket itself contains all the info (seat, time, movie)
- You show up, scan the ticket
- The system verifies the ticket is valid (reads the barcode)
- No one had to "remember" you bought it (stateless)

### 1.2 Session-Based Authentication (Stateful)

**How It Works:**

```
┌─────────────────────────────────────────────────────┐
│  Session-Based Authentication Flow                  │
└─────────────────────────────────────────────────────┘

Step 1: Login
User → [POST /login] → Server
       email: alice@example.com
       password: secret123

Step 2: Server Validates & Creates Session
Server:
- Checks password (hashed)
- Creates session: { userId: 123, expires: ... }
- Stores session in memory/database
- Sends session ID as cookie

Step 3: Server Responds
Server → User
Set-Cookie: sessionId=abc123xyz; HttpOnly; Secure

Step 4: Future Requests
User → [GET /profile] → Server
Cookie: sessionId=abc123xyz

Server:
- Reads sessionId from cookie
- Looks up session in storage
- Finds userId: 123
- Returns Alice's profile
```

**The Session Store:**

```javascript
// Server maintains a session store (in-memory or database)
{
  "abc123xyz": {
    userId: 123,
    email: "alice@example.com",
    createdAt: "2024-10-22T10:00:00Z",
    expiresAt: "2024-10-22T22:00:00Z"
  },
  "def456uvw": {
    userId: 456,
    email: "bob@example.com",
    createdAt: "2024-10-22T11:30:00Z",
    expiresAt: "2024-10-22T23:30:00Z"
  }
}
```

**What Happens Each Request:**

```
User makes request with cookie
         ↓
Server reads sessionId from cookie
         ↓
Server looks up session in storage
         ↓
Session found? → Extract user info → Continue
Session not found? → Redirect to login
Session expired? → Delete session → Redirect to login
```

**Cookies Explained:**

Cookies are small pieces of data that:
- Are sent by the server
- Stored in the browser
- Automatically sent with every request to that domain
- Can have expiration dates
- Can be marked secure (HTTPS only) and HttpOnly (JavaScript can't access)

**Example Cookie Header:**
```
Set-Cookie: sessionId=abc123; Max-Age=3600; HttpOnly; Secure; SameSite=Strict
           └─────┬────┘└───────┬──────┘ └────┬───┘ └──┬──┘ └──────┬─────┘
                 │             │             │       │           │
            Cookie name    Expires in      JS can't  HTTPS    Prevents CSRF
                          1 hour (3600s)   access it  only     attacks
```

**Pros of Session-Based Authentication:**
- ✅ **Easy to invalidate**: Delete session on server = user logged out
- ✅ **Server has control**: Can revoke access immediately
- ✅ **Easy to implement**: Well-established patterns and libraries
- ✅ **Works everywhere**: Browsers handle cookies automatically

**Cons of Session-Based Authentication:**
- ❌ **Stateful**: Server must store sessions (memory/database)
- ❌ **Scalability challenges**: Must share sessions across multiple servers
- ❌ **Server resources**: Thousands of sessions consume memory
- ❌ **CORS complexity**: Cookies don't work well cross-domain

**When to Use Session-Based:**
- Traditional server-rendered web applications
- When you need fine-grained session control
- When all your services are on the same domain
- When you're using established frameworks (Rails, Django, Express)

### 1.3 Token-Based Authentication (Stateless)

**How It Works:**

```
┌─────────────────────────────────────────────────────┐
│  Token-Based Authentication Flow                    │
└─────────────────────────────────────────────────────┘

Step 1: Login
User → [POST /login] → Server
       email: alice@example.com
       password: secret123

Step 2: Server Validates & Creates Token
Server:
- Checks password (hashed)
- Creates JWT token containing:
  {
    id: 123,
    email: "alice@example.com",
    exp: 1729612800  // Expiration timestamp
  }
- Signs token with SECRET_KEY
- Does NOT store it anywhere

Step 3: Server Responds
Server → User
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Step 4: Client Stores Token
User stores token in:
- localStorage
- sessionStorage
- Memory (most secure)

Step 5: Future Requests
User → [GET /profile] → Server
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Server:
- Reads token from Authorization header
- Verifies signature (using SECRET_KEY)
- Extracts userId from token
- Returns Alice's profile
```

**The Key Difference:**

**Session-Based:**
```
Server: "I remember you! Let me check my records..."
[Looks up sessionId in database]
Server: "Found you! You're Alice (user 123)"
```

**Token-Based:**
```
Server: "Show me your credentials."
User: "Here's my signed token."
Server: "Let me verify this signature... Valid! You're Alice (user 123)"
[No database lookup needed]
```

**The Mental Model:**

Think of a token like a **tamper-proof ID badge**:
- Your company gives you an ID badge
- The badge has your name, photo, access level
- The badge has a hologram (signature) that can't be faked
- You show your badge at every door
- Security can verify it's legitimate without calling HR
- HR doesn't need to "remember" who has badges

**Pros of Token-Based Authentication:**
- ✅ **Stateless**: Server doesn't store tokens
- ✅ **Scalable**: Any server can verify tokens independently
- ✅ **Cross-domain**: Works with any client (mobile, web, desktop)
- ✅ **Microservices-friendly**: Multiple services can verify the same token
- ✅ **No session storage**: Reduces server memory usage

**Cons of Token-Based Authentication:**
- ❌ **Can't easily revoke**: Token valid until it expires
- ❌ **Token size**: Larger than session IDs (sent with every request)
- ❌ **Storage concerns**: Where to store tokens securely on client
- ❌ **Refresh complexity**: Need refresh tokens for long-lived sessions

**When to Use Token-Based:**
- Single-page applications (React, Vue, Angular)
- Mobile applications (iOS, Android)
- Microservices architecture
- APIs consumed by multiple clients
- Cross-domain authentication

### 1.4 Comparing Session vs Token

| Feature | Session-Based | Token-Based |
|---------|---------------|-------------|
| **State** | Stateful (server stores sessions) | Stateless (server doesn't store) |
| **Storage** | Server memory/database | Client-side |
| **Scalability** | Harder (must share sessions) | Easier (any server can verify) |
| **Revocation** | Easy (delete session) | Hard (wait for expiration) |
| **Size** | Small (just session ID) | Larger (contains data) |
| **Security** | HttpOnly cookies (safer) | localStorage/memory (vulnerable to XSS) |
| **CORS** | Challenging | Works easily |
| **Mobile Apps** | Doesn't work well | Perfect fit |
| **Best For** | Traditional web apps | SPAs, mobile, microservices |

### 1.5 Hybrid Approach: Refresh Tokens

Many modern applications use a **hybrid approach** to get the best of both worlds:

```
┌─────────────────────────────────────────────────────┐
│  Hybrid Approach: Access + Refresh Tokens           │
└─────────────────────────────────────────────────────┘

Login → Server Issues TWO Tokens:

1. Access Token (JWT)
   - Short-lived (15 minutes)
   - Used for API requests
   - Stored in memory
   - Not easily revoked

2. Refresh Token (Random string)
   - Long-lived (7 days)
   - Used to get new access tokens
   - Stored in database
   - Can be revoked

Flow:
User logs in
  ↓
Server sends: { accessToken, refreshToken }
  ↓
Client uses accessToken for requests
  ↓
Access token expires after 15 min
  ↓
Client sends refreshToken to get new accessToken
  ↓
Server checks if refreshToken is revoked
  ↓
If valid: Issue new accessToken
If revoked: User must log in again
```

**Why This Works:**
- **Security**: Short-lived access tokens limit damage if stolen
- **Control**: Can revoke refresh tokens when needed
- **UX**: Users don't have to log in every 15 minutes
- **Balance**: Combines stateless efficiency with revocation control

---

## Section 2: Password Security (10 minutes)

### 2.1 The Danger of Plain Passwords

**The Nightmare Scenario:**

```
Your Database (BAD - NEVER DO THIS!)
┌──────────────────────────────────┐
│ users                            │
├──────────────────────────────────┤
│ id  │ email           │ password │
├─────┼─────────────────┼──────────┤
│ 1   │ alice@ex.com    │ secret123│
│ 2   │ bob@ex.com      │ pass456  │
│ 3   │ charlie@ex.com  │ qwerty   │
└──────────────────────────────────┘

🔴 Database gets hacked
🔴 Hackers have EVERYONE'S passwords
🔴 Users who reuse passwords across sites are now compromised everywhere
🔴 Your company gets sued for negligence
🔴 Your career is over
```

**Real-World Example:**

In 2013, Adobe was hacked. 153 million user passwords were stolen. Why was it catastrophic? **Passwords were encrypted, not hashed.** The encryption was reversible. Every password was compromised.

**The Golden Rule:**
> **NEVER, EVER store passwords in plain text. NEVER use reversible encryption. ALWAYS use one-way hashing with salt.**

### 2.2 Encryption vs Hashing

These are fundamentally different concepts:

**Encryption = Two-Way (Reversible)**

```
Encryption: Password ──[secret key]──> Encrypted
Decryption: Encrypted ──[secret key]──> Password

Example:
Password: "secret123"
Secret Key: "mykey"
Encrypted: "xK9mP2@vL8"

With the key, you can get back "secret123"
```

**Why Encryption is BAD for passwords:**
- If someone steals your secret key, ALL passwords are compromised
- The key must be stored somewhere (another security risk)
- If the key leaks, it's game over

**Hashing = One-Way (Irreversible)**

```
Hashing: Password ──[hash function]──> Hash

Example:
Password: "secret123"
Hash: "$2b$10$xK9mP2vL8nQ5wR7..."

❌ Cannot get back "secret123" from the hash
✅ Can verify if a password matches the hash
```

**How Verification Works:**

```
Signup:
User provides: "secret123"
  ↓
Hash it: "$2b$10$xK9mP2vL8nQ5wR7..."
  ↓
Store hash in database

Login:
User provides: "secret123"
  ↓
Hash it: "$2b$10$xK9mP2vL8nQ5wR7..."
  ↓
Compare with stored hash
  ↓
Match? → Login success ✅
No match? → Login failed ❌
```

**The Magic:**
- You never store the actual password
- You never know the user's password
- Even if your database is stolen, passwords are safe
- The hash is useless without knowing the original password

### 2.3 The Problem with Simple Hashing

**Naive Approach (Still Vulnerable):**

```javascript
// DON'T DO THIS
const hash = sha256("secret123");
// Always produces: "e64b78fc3bc91bcbc7dc232ba8ec59e0"
```

**The Problem: Rainbow Tables**

Attackers have pre-computed hashes for common passwords:

```
Rainbow Table (Pre-computed Hashes)
┌───────────────┬──────────────────────────────┐
│ Password      │ SHA-256 Hash                 │
├───────────────┼──────────────────────────────┤
│ password      │ 5e884898da28047151d0e56f8dc6...│
│ 123456        │ 8d969eef6ecad3c29a3a629280e68...│
│ secret123     │ e64b78fc3bc91bcbc7dc232ba8ec...│
│ qwerty        │ 65e84be33532fb784c48129675f9e...│
└───────────────┴──────────────────────────────┘

Hacker:
1. Steals your database of hashes
2. Looks up each hash in rainbow table
3. Instantly finds passwords!
```

**Real-World Impact:**

In 2012, LinkedIn was hacked. 6.5 million password hashes were leaked. Why was it bad? **No salt.** Hackers used rainbow tables to crack millions of passwords within hours.

### 2.4 Salting: The Solution

**What is a Salt?**

A salt is **random data added to the password before hashing**.

```
Without Salt:
Password: "secret123"
  ↓
Hash: "e64b78fc3bc91bcbc7dc232ba8ec59e0"
(Same for everyone who uses "secret123")

With Salt:
Password: "secret123"
Salt: "k9mP2vL8"  (random, unique per user)
  ↓
Hash("secret123" + "k9mP2vL8")
  ↓
Result: "$2b$10$k9mP2vL8nQ5wR7..."
(Different for every user, even with same password!)
```

**Why Salt Works:**

```
Two users with same password:

User 1:
Password: "secret123"
Salt: "k9mP2vL8"
Hash: "$2b$10$k9mP2vL8nQ5wR7..."

User 2:
Password: "secret123"
Salt: "x3tN7wK2"  (different random salt!)
Hash: "$2b$10$x3tN7wK2mR8pQ5..."

Hashes are completely different!
Rainbow tables are useless!
```

**Salt Properties:**
1. **Random**: Different for every user
2. **Unique**: Even same passwords produce different hashes
3. **Public**: Stored alongside the hash (not a secret!)
4. **Defeats rainbow tables**: Pre-computed tables become useless

**The Mental Model:**

Think of salt like a secret ingredient:
- Two chefs make the same dish (password)
- Each adds a different secret ingredient (salt)
- The final dishes taste completely different (different hashes)
- You can't use a recipe book (rainbow table) because every dish is unique

### 2.5 bcrypt: The Industry Standard

**What is bcrypt?**

bcrypt is a password hashing algorithm specifically designed for passwords. It combines:
1. ✅ **Automatic salting** (generates random salt for each password)
2. ✅ **Slow by design** (makes brute-force attacks impractical)
3. ✅ **Adjustable difficulty** (can make it slower as computers get faster)
4. ✅ **Battle-tested** (used by industry leaders for decades)

**Why Slow is Good:**

```
Normal Hash Function (SHA-256):
- Processes passwords in microseconds
- Attacker can try billions of guesses per second
- Your password can be cracked quickly

bcrypt:
- Takes ~100 milliseconds per password
- Attacker can only try 10 guesses per second
- Cracking takes millions of times longer
```

**For Your App:**
- 100ms delay on signup/login? User doesn't notice ✅
- Attacker limited to 10 guesses/sec? Massively protected ✅

**The Cost Factor:**

bcrypt has a "cost factor" (also called "rounds"):

```
Cost: 10 (default)
- Takes ~100ms to hash
- 2^10 = 1,024 iterations
- Good for most applications

Cost: 12
- Takes ~400ms to hash
- 2^12 = 4,096 iterations
- More secure, but slower

Cost: 14
- Takes ~1,600ms to hash
- 2^14 = 16,384 iterations
- Very secure, but too slow for UX
```

**Choosing Cost Factor:**
- **10**: Most common, good balance
- **12**: For high-security applications
- **14+**: Only for extremely sensitive data

### 2.6 Using bcrypt in Code

**Installation:**
```bash
npm install bcrypt
```

**Hashing a Password:**

```javascript
const bcrypt = require('bcrypt');

// Hash password during signup
async function signupUser(email, password) {
  // Generate salt and hash password in one step
  const saltRounds = 10;  // Cost factor
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  
  // hashedPassword looks like:
  // "$2b$10$k9mP2vL8nQ5wR7tQ3mE2Ouv.C5zl9L8mPk4Rw7..."
  //  │  │   │                 │
  //  │  │   │                 └─ The hash (53 chars)
  //  │  │   └─────────────────── The salt (22 chars)
  //  │  └───────────────────────── Cost factor (10)
  //  └──────────────────────────── Algorithm version (2b)
  
  // Store hashedPassword in database
  await User.create({
    email,
    password: hashedPassword  // NEVER store plain password!
  });
}
```

**Comparing Passwords (Login):**

```javascript
async function loginUser(email, password) {
  // Find user in database
  const user = await User.findOne({ email });
  
  if (!user) {
    return { success: false, error: 'User not found' };
  }
  
  // Compare provided password with stored hash
  const isMatch = await bcrypt.compare(password, user.password);
  
  // bcrypt.compare automatically:
  // 1. Extracts the salt from the stored hash
  // 2. Hashes the provided password with that salt
  // 3. Compares the result with the stored hash
  
  if (isMatch) {
    return { success: true, user };
  } else {
    return { success: false, error: 'Invalid password' };
  }
}
```

**What Happens Under the Hood:**

```
Signup:
User password: "secret123"
  ↓
bcrypt.hash("secret123", 10)
  ↓
1. Generate random salt: "k9mP2vL8nQ5wR7tQ3mE2Ou"
2. Hash "secret123" + salt 1,024 times (2^10)
3. Combine algorithm + cost + salt + hash
  ↓
Result: "$2b$10$k9mP2vL8nQ5wR7tQ3mE2Ouv.C5zl9L8mPk4Rw7..."
  ↓
Store this in database

Login:
User provides: "secret123"
Stored hash: "$2b$10$k9mP2vL8nQ5wR7tQ3mE2Ouv.C5zl9L8mPk4Rw7..."
  ↓
bcrypt.compare("secret123", storedHash)
  ↓
1. Extract salt from hash: "k9mP2vL8nQ5wR7tQ3mE2Ou"
2. Extract cost: 10
3. Hash "secret123" + salt 1,024 times
4. Compare with stored hash
  ↓
Match? → return true
No match? → return false
```

**Common Mistakes:**

```javascript
// ❌ DON'T: Hash password synchronously (blocks event loop)
const hash = bcrypt.hashSync(password, 10);

// ✅ DO: Use async version
const hash = await bcrypt.hash(password, 10);

// ❌ DON'T: Compare with === (won't work!)
if (password === user.password) { ... }

// ✅ DO: Use bcrypt.compare
if (await bcrypt.compare(password, user.password)) { ... }

// ❌ DON'T: Hash an already-hashed password
const hash = await bcrypt.hash(user.password, 10); // user.password is already hashed!

// ✅ DO: Only hash plain passwords
const hash = await bcrypt.hash(plainPassword, 10);
```

---

## Section 3: JSON Web Tokens (JWT) (12 minutes)

### 3.1 What is a JWT?

**JSON Web Token (JWT)** is a compact, URL-safe token format that securely transmits information between parties.

**The Big Idea:**
> A JWT is a **signed JSON object** that proves authenticity without needing a database lookup.

**Real-World Analogy:**

Think of a JWT like a **driver's license**:
- Contains your information (name, birthdate, address)
- Has a photo and hologram (signature)
- Anyone can verify it's legitimate
- The DMV doesn't need to remember issuing it
- If you try to alter it, the hologram (signature) breaks

### 3.2 JWT Structure

A JWT consists of three parts separated by dots:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImVtYWlsIjoiYWxpY2VAZXhhbXBsZS5jb20iLCJleHAiOjE3Mjk2MTI4MDB9.K8SN4k3L9mP2vW7xQ5tR8uY6zA1bC3dE4fG7hI9jK0l
└──────────────┬──────────────┘ └──────────────────────┬────────────────────────┘ └──────────────┬──────────────┘
           HEADER                                   PAYLOAD                                  SIGNATURE
```

**Part 1: Header**

```json
{
  "alg": "HS256",    // Algorithm: HMAC SHA-256
  "typ": "JWT"       // Type: JSON Web Token
}
```

Base64 encoded → `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`

**Part 2: Payload (Claims)**

```json
{
  "id": "123",
  "email": "alice@example.com",
  "role": "user",
  "iat": 1729610000,    // Issued At: timestamp
  "exp": 1729612800     // Expires: timestamp
}
```

Base64 encoded → `eyJpZCI6IjEyMyIsImVtYWlsIjoiYWxpY2VAZXhhbXBsZS5jb20iLCJleHAiOjE3Mjk2MTI4MDB9`

**Part 3: Signature**

```
signature = HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  SECRET_KEY
)
```

Result → `K8SN4k3L9mP2vW7xQ5tR8uY6zA1bC3dE4fG7hI9jK0l`

**Important Notes:**
- Header and payload are **NOT encrypted** (anyone can decode them)
- They're just Base64 encoded (easily reversible)
- **DO NOT put secrets in the payload!**
- The signature ensures **tamper-proof** integrity

### 3.3 How JWT Verification Works

**Creating a Token:**

```
Server has SECRET_KEY: "my-super-secret-key-12345"

Step 1: Create payload
{
  id: "123",
  email: "alice@example.com",
  exp: 1729612800
}

Step 2: Encode header + payload
header = base64(header)
payload = base64(payload)

Step 3: Create signature
signature = HMACSHA256(header + "." + payload, SECRET_KEY)

Step 4: Combine
token = header + "." + payload + "." + signature
```

**Verifying a Token:**

```
Client sends: Authorization: Bearer <token>

Step 1: Split token into parts
header = token.split('.')[0]
payload = token.split('.')[1]
signature = token.split('.')[2]

Step 2: Recreate signature
expectedSignature = HMACSHA256(header + "." + payload, SECRET_KEY)

Step 3: Compare signatures
if (signature === expectedSignature) {
  ✅ Token is valid
  ✅ Payload hasn't been tampered with
  ✅ Token was issued by this server
} else {
  ❌ Token is invalid/tampered
}

Step 4: Check expiration
if (payload.exp < currentTime) {
  ❌ Token has expired
}
```

**Why This is Secure:**

```
Attacker tries to change payload:
Original: { id: "123", email: "alice@example.com" }
Tampered: { id: "123", email: "attacker@example.com" }

Server:
1. Decodes payload → sees "attacker@example.com"
2. Recreates signature with SECRET_KEY
3. Compares with token's signature
4. Signatures DON'T match (payload was changed!)
5. Rejects token ❌

Why it fails:
- Attacker doesn't know the SECRET_KEY
- Can't create valid signature for tampered payload
- Server immediately detects tampering
```

### 3.4 JWT Claims (Payload Data)

**Standard Claims:**

```json
{
  // Registered Claims (standard JWT fields)
  "iss": "myapp.com",            // Issuer: who created the token
  "sub": "123",                  // Subject: who this token is about (user ID)
  "aud": "myapp-users",          // Audience: who can use this token
  "exp": 1729612800,             // Expiration: when token expires (Unix timestamp)
  "nbf": 1729610000,             // Not Before: token not valid until this time
  "iat": 1729610000,             // Issued At: when token was created
  "jti": "abc123",               // JWT ID: unique identifier for this token
  
  // Custom Claims (your application data)
  "email": "alice@example.com",
  "role": "admin",
  "permissions": ["read", "write"],
  "username": "alice",
  "verified": true
}
```

**What to Include:**

```
✅ DO Include:
- User ID (primary identifier)
- Email (for display/logic)
- Role/permissions (for authorization)
- Token metadata (exp, iat)
- Non-sensitive user info

❌ DON'T Include:
- Passwords (even hashed!)
- Credit card numbers
- Social security numbers
- API keys or secrets
- Large amounts of data (keep tokens small)
```

**Token Expiration:**

```javascript
// Short-lived token (15 minutes)
const token = jwt.sign(
  { id: user._id, email: user.email },
  SECRET_KEY,
  { expiresIn: '15m' }
);

// Long-lived token (7 days)
const token = jwt.sign(
  { id: user._id, email: user.email },
  SECRET_KEY,
  { expiresIn: '7d' }
);

// Custom expiration
const token = jwt.sign(
  { id: user._id, email: user.email },
  SECRET_KEY,
  { expiresIn: 60 * 60 }  // 1 hour (in seconds)
);
```

**Expiration Recommendations:**
- **Access tokens**: 15 minutes to 1 hour
- **Refresh tokens**: 7 days to 30 days
- **Remember me tokens**: 30 days to 1 year
- **Email verification tokens**: 24 hours
- **Password reset tokens**: 1 hour

### 3.5 Using JWT in Node.js

**Installation:**
```bash
npm install jsonwebtoken
```

**Creating Tokens:**

```javascript
const jwt = require('jsonwebtoken');

// Your secret key (MUST be stored in environment variable!)
const SECRET_KEY = process.env.JWT_SECRET;

// Sign a token
function createToken(user) {
  const payload = {
    id: user._id.toString(),
    email: user.email,
    role: user.role || 'user'
  };
  
  const token = jwt.sign(
    payload,                    // Data to encode
    SECRET_KEY,                 // Secret key
    { expiresIn: '1h' }         // Options
  );
  
  return token;
}

// Example usage
const user = { _id: '123', email: 'alice@example.com', role: 'admin' };
const token = createToken(user);
// Returns: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyI..."
```

**Verifying Tokens:**

```javascript
function verifyToken(token) {
  try {
    // Verify token and decode payload
    const decoded = jwt.verify(token, SECRET_KEY);
    
    // decoded contains:
    // {
    //   id: '123',
    //   email: 'alice@example.com',
    //   role: 'admin',
    //   iat: 1729610000,    // When token was issued
    //   exp: 1729613600     // When token expires
    // }
    
    return { valid: true, payload: decoded };
  } catch (error) {
    // Token is invalid, expired, or tampered
    return { valid: false, error: error.message };
  }
}

// Example usage
const result = verifyToken(token);
if (result.valid) {
  console.log('User:', result.payload.email);
} else {
  console.log('Invalid token:', result.error);
}
```

**Common Errors:**

```javascript
// jwt.verify() throws specific errors:

// 1. Token expired
TokenExpiredError: jwt expired

// 2. Invalid signature (tampered or wrong secret)
JsonWebTokenError: invalid signature

// 3. Malformed token
JsonWebTokenError: jwt malformed

// 4. Token used before "not before" time
NotBeforeError: jwt not active
```

### 3.6 JWT in Practice: Middleware

**Creating Auth Middleware:**

```javascript
// middleware/auth.js
function authenticate(req, res, next) {
  // Get token from header
  const authHeader = req.headers.authorization;
  const token = authHeader?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach user info to request
    next();  // Continue to route handler
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
```

**Using the Middleware:**

```javascript
// Public route (anyone can access)
app.get('/api/public', (req, res) => {
  res.json({ message: 'Public data' });
});

// Protected route (must be logged in)
app.get('/api/profile', authenticate, (req, res) => {
  res.json({ user: req.user });  // req.user from middleware
});
```

**Client-Side Usage:**

```javascript
// Include token in request header
fetch('/api/profile', {
  headers: { 'Authorization': `Bearer ${token}` }
})
```

### 3.7 JWT Best Practices

**Security:**

```
✅ DO:
- Store SECRET_KEY in environment variables
- Use strong, random secrets (at least 32 characters)
- Use short expiration times for access tokens
- Implement refresh tokens for long sessions
- Use HTTPS to prevent token interception
- Validate token on every protected request

❌ DON'T:
- Put secrets in the payload
- Use weak or predictable secrets
- Store tokens in localStorage if XSS is a concern
- Trust the payload without verifying the signature
- Use the same secret for different purposes
- Store sensitive data in tokens
```

**Token Storage (Client-Side):**

```
Storage Options:
├── localStorage
│   ✅ Simple API
│   ✅ Persists after browser close
│   ❌ Vulnerable to XSS attacks
│   └── Use for: Low-security applications
│
├── sessionStorage
│   ✅ Simple API
│   ✅ Cleared when tab closes
│   ❌ Still vulnerable to XSS
│   └── Use for: Medium-security, single-session apps
│
├── Memory (JavaScript variable)
│   ✅ Not vulnerable to XSS
│   ❌ Lost on page refresh
│   ❌ More complex to implement
│   └── Use for: High-security applications
│
└── HttpOnly Cookie
    ✅ Not accessible to JavaScript (safe from XSS)
    ✅ Automatic inclusion in requests
    ❌ Requires CORS configuration
    └── Use for: Highest security (but more setup)
```

**Secret Key Management:**

```javascript
// ❌ BAD: Hardcoded
const SECRET_KEY = 'my-secret-key';

// ✅ GOOD: Environment variable
const SECRET_KEY = process.env.JWT_SECRET;
```

---

## Section 4: Building a Signup Route (8 minutes)

### 4.1 The Signup Flow

**What Happens Conceptually:**

```
┌─────────────────────────────────────────────────────┐
│  User Signup Flow                                   │
└─────────────────────────────────────────────────────┘

Step 1: User Submits Form
  ↓
  email: "alice@example.com"
  password: "secret123"

Step 2: Server Validates Input
  ↓
  ✅ Email format correct?
  ✅ Password strong enough?
  ✅ Required fields present?

Step 3: Check if User Exists
  ↓
  Query: User.findOne({ email: "alice@example.com" })
  ↓
  Already exists? → Return error ❌
  Doesn't exist? → Continue ✅

Step 4: Hash Password
  ↓
  bcrypt.hash("secret123", 10)
  ↓
  Result: "$2b$10$xK9mP2vL8nQ5wR7..."

Step 5: Save User to Database
  ↓
  User.create({
    email: "alice@example.com",
    password: "$2b$10$xK9mP2vL8nQ5wR7..."
  })

Step 6: Generate JWT Token
  ↓
  jwt.sign({ id: user._id, email: user.email }, SECRET_KEY)
  ↓
  Result: "eyJhbGciOiJIUzI1NiIs..."

Step 7: Send Response
  ↓
  {
    success: true,
    token: "eyJhbGciOiJIUzI1NiIs...",
    user: { id: "123", email: "alice@example.com" }
  }

Step 8: Client Stores Token
  ↓
  localStorage.setItem('token', token)

User is now logged in! ✅
```

### 4.2 User Schema with Validation

**The Schema Structure:**

```javascript
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false  // Don't return password by default
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });
```

**Key Validation Points:**
- Email must be unique and valid format
- Password minimum 8 characters (will be hashed before storing)
- Username required and unique
- `select: false` on password means it won't be returned in queries by default
- `timestamps: true` automatically adds `createdAt` and `updatedAt` fields

### 4.3 Signup Route Implementation

**The 8 Steps of Signup:**

**Step 1-3: Validate Input**
```javascript
router.post('/signup', async (req, res) => {
  const { email, password, username } = req.body;
  
  // Check required fields
  if (!email || !password || !username) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Check password strength
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password too short' });
  }
```

**Step 4: Check if User Exists**
```javascript
  // Check for duplicate email or username
  const existingUser = await User.findOne({ 
    $or: [{ email }, { username }] 
  });
  
  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }
```

**Step 5: Hash Password**
```javascript
  // Hash password with bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);
```

**Step 6: Save User**
```javascript
  // Create user in database
  const newUser = await User.create({
    email,
    username,
    password: hashedPassword  // Store hashed, not plain!
  });
```

**Step 7: Generate Token**
```javascript
  // Create JWT token
  const token = jwt.sign(
    { id: newUser._id, email: newUser.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
```

**Step 8: Send Response**
```javascript
  // Return token and user info (no password!)
  res.status(201).json({
    success: true,
    token,
    user: { id: newUser._id, email: newUser.email }
  });
});
```

**Error Handling:**
- Wrap everything in `try/catch`
- Return appropriate status codes (400, 409, 500)
- Don't reveal which field caused the error (security)

### 4.4 Login Route

**The Core Steps:**

**Step 1: Find User**
```javascript
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Find user and include password field
  const user = await User.findOne({ email }).select('+password');
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
```

**Step 2: Compare Password**
```javascript
  // Use bcrypt to compare hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
```

**Step 3: Generate Token & Respond**
```javascript
  // Create token
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  
  // Send back token
  res.json({ success: true, token, user: { id: user._id, email: user.email } });
});
```

**Security Note:**
- Use same error message for "user not found" and "wrong password"
- This prevents attackers from discovering which emails are registered

### 4.5 Input Validation Best Practices

**What to Validate:**

```javascript
// Email: Must look like an email
const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

// Password: At least 8 chars, has uppercase, lowercase, number
const isStrongPassword = (password) => 
  password.length >= 8 && 
  /[a-z]/.test(password) && 
  /[A-Z]/.test(password) && 
  /[0-9]/.test(password);

// Username: 3-20 chars, alphanumeric only
const isValidUsername = (username) => 
  username.length >= 3 && 
  username.length <= 20 && 
  /^[a-zA-Z0-9_]+$/.test(username);
```

**When to Validate:**
- Always validate on the **server** (don't trust client)
- Validate **before** hashing or database operations
- Return clear error messages for user experience

### 4.6 Security: Error Messages

**What NOT to do:**

```javascript
// ❌ BAD: Reveals too much information
const existingUser = await User.findOne({ email });
if (existingUser) {
  return res.status(400).json({
    error: 'A user with this email already exists'
  });
}

// Attacker now knows:
// - This email is registered
// - Can enumerate all users by trying emails
```

**What TO do:**

```javascript
// ✅ GOOD: Generic error message
const existingUser = await User.findOne({ email });
if (existingUser) {
  return res.status(400).json({
    error: 'Unable to create account with provided information'
  });
}

// Or during login:
// ❌ BAD
if (!user) return res.status(400).json({ error: 'User not found' });
if (!isMatch) return res.status(400).json({ error: 'Wrong password' });

// ✅ GOOD: Same error for both cases
if (!user || !isMatch) {
  return res.status(401).json({ error: 'Invalid email or password' });
}
```

**Why This Matters:**
- Prevents username/email enumeration
- Doesn't reveal which part of login failed
- Makes brute-force attacks harder
- Protects user privacy

---

## Section 5: Environment Variables & Security (5 minutes)

### 5.1 Why Environment Variables?

**The Problem:**

```javascript
// ❌ NEVER DO THIS
const JWT_SECRET = 'my-super-secret-key-12345';
const MONGODB_URI = 'mongodb://localhost:27017/myapp';

// If you commit this to GitHub:
// ✓ Anyone can see your secrets
// ✓ Hackers can access your database
// ✓ Attackers can forge JWT tokens
// ✓ Your app is compromised
```

**The Solution: Environment Variables**

```javascript
// ✅ DO THIS
const JWT_SECRET = process.env.JWT_SECRET;
const MONGODB_URI = process.env.MONGODB_URI;

// Secrets are stored in .env file (NOT committed to Git)
```

### 5.2 Setting Up Environment Variables

**Install dotenv:**

```bash
npm install dotenv
```

**Create .env file:**

```bash
JWT_SECRET=your-super-long-random-secret-key-here
MONGODB_URI=mongodb://localhost:27017/myapp
PORT=3000
```

**Generate a secure JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Load environment variables (server.js):**

```javascript
// Load .env file first
require('dotenv').config();

// Validate required variables
if (!process.env.JWT_SECRET || !process.env.MONGODB_URI) {
  console.error('ERROR: Missing required environment variables');
  process.exit(1);
}

// Now use process.env safely
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI);
app.listen(PORT);
```

### 5.3 Protecting Your .env File

**Create .gitignore:**

```
.env
node_modules/
```

**Create .env.example (for teammates):**

```
JWT_SECRET=your-secret-key-here
MONGODB_URI=mongodb://localhost:27017/your-db-name
PORT=3000
```

**The Workflow:**

```
Developer 1 (You):
1. Create .env with actual secrets
2. Add .env to .gitignore
3. Create .env.example with placeholder values
4. Commit .env.example to Git (NOT .env)
5. Push to GitHub

Developer 2 (Your Teammate):
1. Clones repository
2. Copies .env.example to .env
3. Fills in their own secret values
4. Never commits .env
```

### 5.4 Validation Helper

**Check Required Environment Variables:**

```javascript
// config/validateEnv.js
function validateEnv() {
  const required = ['JWT_SECRET', 'MONGODB_URI', 'PORT'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing:', missing.join(', '));
    process.exit(1);
  }
}
```

**Use Before Starting Server:**

```javascript
// server.js
require('dotenv').config();
validateEnv();  // Check env vars first

// Now safe to use process.env.JWT_SECRET, etc.
```

---

## Section 6: Testing Your Auth System (5 minutes)

### 6.1 Manual Testing with Thunder Client / Postman

**Test Signup:**

```http
POST http://localhost:3000/api/auth/signup
Content-Type: application/json

{
  "email": "alice@example.com",
  "username": "alice",
  "password": "Secret123"
}
```

**Expected Response:**

```json
{
  "success": true,
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "671829abc12345678901",
    "email": "alice@example.com",
    "username": "alice",
    "role": "user"
  }
}
```

**Test Login:**

```http
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "alice@example.com",
  "password": "Secret123"
}
```

**Test Protected Route:**

```http
GET http://localhost:3000/api/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 6.2 Edge Cases to Test

**Validation Tests:**

```http
# Missing fields
POST /api/auth/signup
{ "email": "alice@example.com" }
→ Should return 400 error

# Invalid email format
POST /api/auth/signup
{ "email": "not-an-email", "username": "alice", "password": "Secret123" }
→ Should return 400 error

# Weak password
POST /api/auth/signup
{ "email": "alice@example.com", "username": "alice", "password": "123" }
→ Should return 400 error

# Duplicate email
POST /api/auth/signup (same email twice)
→ Second request should return 409 error

# Wrong password during login
POST /api/auth/login
{ "email": "alice@example.com", "password": "WrongPassword" }
→ Should return 401 error

# Expired/invalid token
GET /api/profile
Authorization: Bearer invalid-token
→ Should return 401 error
```

### 6.3 Automated Testing Example

**Test Structure:**

```javascript
// tests/auth.test.js
describe('Authentication', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'alice@example.com', username: 'alice', password: 'Secret123' });
    
    expect(res.status).toBe(201);
    expect(res.body.token).toBeDefined();
  });
  
  it('should reject duplicate email', async () => {
    // Create first user
    await signup('alice@example.com');
    
    // Try duplicate - should fail
    const res = await signup('alice@example.com');
    expect(res.status).toBe(409);
  });
  
  it('should reject weak password', async () => {
    const res = await signup('alice@example.com', '123');
    expect(res.status).toBe(400);
  });
});
```

**Key Testing Points:**
- Test successful signup/login
- Test validation failures
- Test duplicate prevention
- Test wrong password rejection
- Test token generation

---

## Section 7: Complete Project Structure (2 minutes)

**Recommended File Organization:**

```
my-auth-app/
├── .env                    # Environment variables (NOT committed)
├── .env.example            # Template for .env
├── .gitignore              # Protects secrets
├── package.json
├── package-lock.json
│
├── server.js               # Entry point
│
├── config/
│   ├── db.js               # MongoDB connection
│   └── validateEnv.js      # Environment validation
│
├── models/
│   └── User.js             # User schema
│
├── routes/
│   └── auth.js             # Authentication routes
│
├── middleware/
│   ├── auth.js             # JWT authentication middleware
│   └── errorHandler.js     # Global error handler
│
└── utils/
    ├── generateToken.js    # JWT token generation
    └── validators.js       # Input validation helpers
```

---

## Section 8: Homework Assignment (3 minutes)

### Assignment: Build a User Registration System

**Requirements:**

1. **User Model** (25 points)
   - Email (required, unique, validated)
   - Username (required, unique, 3-20 characters)
   - Password (required, hashed with bcrypt, min 8 characters)
   - Role (default: 'user', enum: ['user', 'admin'])
   - Timestamps (createdAt, updatedAt)

2. **Signup Route** (25 points)
   - POST `/api/auth/signup`
   - Validate input (email format, password strength, required fields)
   - Check for existing user (email and username)
   - Hash password with bcrypt (cost: 10)
   - Save user to database
   - Generate JWT token (expires in 7 days)
   - Return token and user info (without password)

3. **Login Route** (25 points)
   - POST `/api/auth/login`
   - Validate input
   - Find user by email
   - Compare password using bcrypt
   - Generate JWT token
   - Return token and user info

4. **Protected Route** (15 points)
   - GET `/api/profile`
   - Require JWT authentication (middleware)
   - Return authenticated user's profile
   - Handle invalid/expired tokens

5. **Error Handling** (10 points)
   - Handle validation errors
   - Handle duplicate key errors
   - Handle missing environment variables
   - Secure error messages (don't leak info)

**Bonus Challenges** (Extra Credit):
- Email verification system (+10 points)
- Password reset functionality (+10 points)
- Rate limiting on auth routes (+5 points)
- Refresh token implementation (+15 points)

**Deliverables:**
- Complete source code
- .env.example file (NOT .env)
- README with setup instructions
- Thunder Client/Postman collection for testing

**Testing Checklist:**
- ✅ Can create new user with valid data
- ✅ Rejects invalid email format
- ✅ Rejects weak passwords
- ✅ Prevents duplicate emails
- ✅ Prevents duplicate usernames
- ✅ Can login with correct credentials
- ✅ Rejects incorrect password
- ✅ Can access protected route with valid token
- ✅ Rejects expired/invalid tokens
- ✅ Passwords are hashed in database

---

## Key Takeaways

**Authentication Fundamentals:**
1. **Authentication** = Proving who you are (login)
2. **Authorization** = Determining what you can do (permissions)
3. **Session-based** = Server remembers you (stateful)
4. **Token-based** = You prove yourself each time (stateless)

**Password Security:**
1. **NEVER** store passwords in plain text
2. Use **bcrypt** for hashing (not encryption)
3. **Salt** makes identical passwords have different hashes
4. **Slow hashing** protects against brute-force attacks

**JWT Best Practices:**
1. Store **SECRET_KEY** in environment variables
2. Use **short expiration** times for access tokens
3. **Don't** put secrets in the payload
4. **Verify** tokens on every protected request

**Security Mindset:**
1. **Validate** all user input
2. Use **generic error messages** (don't leak info)
3. **Protect** your .env file (never commit it)
4. Use **HTTPS** in production
5. Think like an **attacker** when building

---

## Additional Resources

**Documentation:**
- [bcrypt npm package](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken npm package](https://www.npmjs.com/package/jsonwebtoken)
- [JWT.io - Decode and verify JWTs](https://jwt.io/)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

**Further Learning:**
- OAuth 2.0 and social login (Google, GitHub)
- Two-factor authentication (2FA)
- Password reset flows
- Email verification
- Refresh token patterns
- Session management
- CORS and credentials

**Security Reading:**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Have I Been Pwned](https://haveibeenpwned.com/) - Check for breached passwords
- [Password strength guidelines](https://pages.nist.gov/800-63-3/sp800-63b.html)

---

**Remember:** Authentication is not just a feature—it's a fundamental responsibility. Users trust you with their data. Build systems that honor that trust. 🔒

