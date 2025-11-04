# Secure Login PSO

## Resources
- **GitHub Repository:** https://github.com/tgondil/pso-login
- **MongoDB Atlas Connection Guide:** https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369
- **MongoDB Database Users Documentation:** https://www.mongodb.com/docs/atlas/security-add-mongodb-users/

## What This Covers
- **bcrypt** - Password hashing
- **MongoDB/Mongoose** - Database storage
- **CORS** - Cross-origin requests (for test.html)

## Files

**Students get:**
- `server-starter.js` - Assignment file with TODOs
- `test-connection.js` - Test MongoDB connection
- `test.html` - Browser-based API tester
- `package.json` - Dependencies
- `.env.example` - Config template

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Setup MongoDB Atlas (Required):**
   
   a. **Create account:** https://www.mongodb.com/cloud/atlas
   
   b. **Create free cluster (M0):**
      - Click "Build a Database"
      - Choose "M0 FREE" tier
      - Select a cloud provider and region
      - Click "Create"
   
   c. **Create database user:**
      - Go to "Database Access" in left sidebar
      - Click "Add New Database User"
      - Choose "Password" authentication
      - Set username and password (save these!)
      - Click "Add User"
   
   d. **Whitelist your IP:**
      - Go to "Network Access" in left sidebar
      - Click "Add IP Address"
      - Click "Allow Access from Anywhere" (for development)
      - Click "Confirm"
   
   e. **Get connection string:**
      - Go back to "Database" → Click "Connect" on your cluster
      - Choose "Connect your application"
      - Copy the connection string
      - Replace `<password>` with your actual password
      - Add `/secure-login` at the end before `?`
      - Example: `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/secure-login?retryWrites=true`

3. **Create `.env` file:**
```
MONGO_URI=your-connection-string-here
PORT=3000
```

4. **Test connection:**
```bash
npm test
```

5. **Run the assignment:**
```bash
npm start
```

## Testing

**Option 1 - Browser (Recommended):**
- Open `test.html` in browser
- Open Developer Tools (F12 or Cmd+Option+I)
- Fill out forms and test

**Debugging in Browser:**
- **Network Tab:** See all API requests/responses (incoming/outgoing connections)
- **Console Tab:** See JavaScript errors and logs
- **Terminal/Server Logs:** See server-side errors and connection info

**Option 2 - Terminal:**
```bash
# Signup
curl -X POST http://localhost:3000/signup \
  -H "Content-Type: application/json" \
  -d '{"username": "test", "password": "test123"}'

# Login
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username": "test", "password": "test123"}'
```

## Assignment Tasks

Students need to complete TODOs in `server-starter.js`:

1. Setup (dotenv, express, cors, mongoose)
2. Define User schema
3. Build `/signup` route:
   - Validate input
   - Check for duplicates
   - Hash password with bcrypt
   - Save to database
4. Build `/login` route:
   - Find user
   - Compare password with bcrypt.compare()
   - Return success/error

## Key Concepts

**Password Hashing:**
```javascript
// ❌ NEVER do this
const user = new User({ password: "hello123" });

// ✅ Always hash first
const hashed = await bcrypt.hash("hello123", 10);
const user = new User({ password: hashed });
```

**Password Verification:**
```javascript
// ❌ NEVER do this
if (password === user.password) { ... }

// ✅ Use bcrypt.compare()
const valid = await bcrypt.compare(password, user.password);
if (valid) { ... }
```

## Troubleshooting

**Connection Issues:**
- Check server logs in terminal for error messages
- Run `npm test` to verify MongoDB connection
- Make sure IP is whitelisted in Atlas Network Access
- Verify password is correct in `.env`

**API Issues:**
- Open Browser Network Tab (F12 → Network)
  - See request status (200, 400, 500)
  - View request payload (what you sent)
  - View response (error messages)
- Check Browser Console Tab for JavaScript errors
- Check server terminal for backend errors

**Common Errors:**
- `400 Bad Request` → Check request body, likely validation error
- `401 Unauthorized` → Wrong password
- `500 Server Error` → Check server logs, likely database issue
- `CORS Error` → Make sure `app.use(cors())` is added

## Grading Checklist

- [ ] MongoDB Atlas setup and connected
- [ ] User schema defined correctly
- [ ] Signup creates user with hashed password
- [ ] Signup blocks duplicate usernames
- [ ] Login succeeds with correct password
- [ ] Login fails with wrong password
- [ ] CORS enabled (test.html works)
- [ ] Proper error handling

