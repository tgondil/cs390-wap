# Class 4: Databases - The Foundation of Modern Applications

**Duration:** 40 minutes  
**Topic:** Introduction to Databases, SQL vs NoSQL, and Scaling Concepts

---

## 🎯 Learning Objectives

By the end of this class, students will understand:
- Why applications need persistent data storage
- Fundamental concepts of relational (SQL) databases
- Overview of NoSQL databases and their use cases
- Basic scaling strategies for databases
- When to choose SQL vs NoSQL for different scenarios

---

## 1. 🔥 Motivation: Why Databases Matter

### The Instagram Story: A $1 Billion Lesson in Data Persistence

In 2010, Kevin Systrom and Mike Krieger launched Instagram with just 13 employees. Within 2 months, they had 1 million users. By 2012, when Facebook acquired them for $1 billion, they had 100 million users.

**The Challenge:** Imagine if Instagram stored all photos and user data in memory only:
- Every time the app restarted → **All photos gone** 📸💥
- Server crash → **Millions of memories lost** 😱
- No way to share photos between devices
- No user profiles, no followers, no history

**The Reality:** Instagram's success was built on robust database architecture:
- **Persistent storage** kept photos safe beyond program runtime
- **Scalable databases** handled explosive user growth
- **Reliable data** enabled features like feeds, search, and recommendations

### Why Apps Need Databases

**Memory vs Storage:**
```
RAM (Memory)          vs       Database (Disk)
├── Fast access               ├── Persistent storage
├── Volatile (lost on restart) ├── Survives crashes/restarts
├── Limited size              ├── Massive storage capacity
└── Expensive                 └── Cost-effective for large data
```

**Key Benefits:**
- **Persistence:** Data survives beyond program execution
- **Concurrency:** Multiple users can access data simultaneously
- **Consistency:** Data integrity across operations
- **Scalability:** Handle growing amounts of data and users

---

## 2. 🗃️ Relational Databases (SQL Basics)

### Core Concepts

**Tables, Rows, and Columns:**
*Let's build a Spotify-like music streaming app!*

```sql
Artists Table:
┌──────────┬─────────────────┬─────────────┬─────────────────┐
│ ArtistID │ Name            │ Genre       │ Monthly_Streams │
├──────────┼─────────────────┼─────────────┼─────────────────┤
│    1     │ Taylor Swift    │ Pop         │   83,000,000    │
│    2     │ Drake           │ Hip-Hop     │   75,000,000    │
│    3     │ Bad Bunny       │ Reggaeton   │   71,000,000    │
└──────────┴─────────────────┴─────────────┴─────────────────┘

Songs Table:
┌────────┬──────────┬───────────────────────┬─────────────┬─────────────┐
│ SongID │ ArtistID │ Title                 │ Duration    │ Release_Date│
├────────┼──────────┼───────────────────────┼─────────────┼─────────────┤
│   1    │    1     │ Anti-Hero             │ 3:20        │ 2022-10-21  │
│   2    │    1     │ Shake It Off          │ 3:39        │ 2014-08-18  │
│   3    │    2     │ God's Plan            │ 3:19        │ 2018-01-19  │
│   4    │    3     │ Tití Me Preguntó      │ 4:02        │ 2022-05-06  │
└────────┴──────────┴───────────────────────┴─────────────┴─────────────┘
```

### Keys and Relationships

**Primary Key:** Unique identifier for each row
- `ArtistID` in Artists table (each artist gets a unique ID)
- `SongID` in Songs table (each song gets a unique ID)

**Foreign Key:** Links tables together
- `ArtistID` in Songs table references `ArtistID` in Artists table
- Creates **one-to-many relationship** (one artist can have many songs)
- Example: Taylor Swift (ArtistID: 1) has multiple songs linked to her

### Essential SQL Queries

**INSERT - Adding Data:**
```sql
-- Olivia Rodrigo just dropped a new album!
INSERT INTO Artists (Name, Genre, Monthly_Streams) 
VALUES ('Olivia Rodrigo', 'Pop-Rock', 45000000);

-- Add her hit song "vampire"
INSERT INTO Songs (ArtistID, Title, Duration, Release_Date)
VALUES (4, 'vampire', '3:39', '2023-06-30');
```

**SELECT - Retrieving Data:**
```sql
-- Find all pop artists (building a pop playlist)
SELECT * FROM Artists WHERE Genre = 'Pop';

-- Get the longest songs (for those late-night study sessions)
SELECT Title, Duration FROM Songs WHERE Duration > '4:00';

-- Find Taylor Swift's most recent songs
SELECT * FROM Songs WHERE ArtistID = 1 AND Release_Date > '2020-01-01';
```

**JOIN - Combining Tables:**
```sql
-- Get all songs with their artist names (for the "Now Playing" display)
SELECT Artists.Name, Songs.Title, Songs.Duration
FROM Artists
JOIN Songs ON Artists.ArtistID = Songs.ArtistID;

-- Result:
┌─────────────────┬───────────────────────┬─────────────┐
│ Artist Name     │ Song Title            │ Duration    │
├─────────────────┼───────────────────────┼─────────────┤
│ Taylor Swift    │ Anti-Hero             │ 3:20        │
│ Taylor Swift    │ Shake It Off          │ 3:39        │
│ Drake           │ God's Plan            │ 3:19        │
│ Bad Bunny       │ Tití Me Preguntó      │ 4:02        │
└─────────────────┴───────────────────────┴─────────────┘
```

### Normalization vs Denormalization

**Normalization (Avoid Duplication):**
- ✅ Reduces data redundancy
- ✅ Maintains data consistency
- ❌ Requires JOINs (can be slower)

**Denormalization (Optimize for Speed):**
- ✅ Faster queries (no JOINs needed)
- ✅ Better for read-heavy applications
- ❌ Data duplication
- ❌ Risk of inconsistency

### ACID Properties

Critical for data reliability:

- **Atomicity:** All operations in a transaction succeed or fail together
- **Consistency:** Database remains in valid state after transactions
- **Isolation:** Concurrent transactions don't interfere with each other
- **Durability:** Committed changes persist even after system failure

**Example Transaction:**
*When someone buys a concert ticket on Ticketmaster:*
```sql
BEGIN TRANSACTION;
  -- Reserve the seat
  UPDATE Seats SET Status = 'SOLD', UserID = 12345 WHERE SeatID = 'A-14';
  -- Charge their credit card
  INSERT INTO Payments VALUES (12345, 150.00, 'CHARGED', NOW());
  -- Send confirmation email
  INSERT INTO EmailQueue VALUES (12345, 'ticket_confirmation', NOW());
COMMIT; -- All steps succeed together, or customer doesn't get charged
```

---

## 3. 📊 NoSQL Overview

### Why NoSQL Emerged

**Traditional SQL Limitations:**
- Fixed schema (rigid structure)
- Vertical scaling challenges
- Complex relationships for simple data
- Not ideal for rapid development

**NoSQL Solutions:**
- Schema flexibility
- Horizontal scaling
- Simpler data models
- Better for certain use cases

### Document Store: MongoDB Example

**Structure:**
*Netflix user profile with viewing history:*
```javascript
// Users Collection
{
  "_id": "507f1f77bcf86cd799439011",
  "email": "sarah.chen@email.com",
  "subscription": "Premium",
  "profile": {
    "displayName": "Sarah",
    "avatar": "https://netflix.com/avatars/sarah.jpg",
    "preferences": {
      "genres": ["thriller", "sci-fi", "korean-drama"],
      "maturityRating": "TV-MA",
      "language": "en-US"
    }
  },
  "watchHistory": [
    {
      "showId": "stranger-things-4",
      "title": "Stranger Things",
      "season": 4,
      "episode": 9,
      "watchedAt": "2024-01-15T22:30:00Z",
      "progress": 0.85,
      "rating": 5
    },
    {
      "showId": "squid-game",
      "title": "Squid Game", 
      "season": 1,
      "episode": 6,
      "watchedAt": "2024-01-14T21:15:00Z",
      "progress": 1.0,
      "rating": 4
    }
  ],
  "myList": ["wednesday", "dark", "money-heist"],
  "deviceHistory": [
    {"device": "iPhone 14", "lastUsed": "2024-01-15T22:45:00Z"},
    {"device": "Samsung TV", "lastUsed": "2024-01-14T21:30:00Z"}
  ]
}
```

**Benefits:**
- Flexible schema (can add fields anytime)
- Natural fit for JSON/JavaScript applications
- No complex JOINs needed
- Easier to scale horizontally

### Key-Value Store: Redis Example

**Use Cases:**
- Caching frequently accessed data
- Session storage
- Real-time analytics
- Message queues

**Example:**
*TikTok storing trending hashtags and user sessions:*
```redis
-- Cache trending hashtags (updates every 10 minutes)
SET trending:hashtags '["#fyp", "#viral", "#dance", "#comedy", "#food"]'
EXPIRE trending:hashtags 600

-- Store user's active session
SET session:user_sarah123 '{"userId": "sarah123", "lastVideo": "dance_viral_2024", "scrollPosition": 1247}'
EXPIRE session:user_sarah123 7200  // 2 hours

-- Real-time view counter for viral video
INCR video:dance_viral_2024:views  // Instantly increment view count
GET video:dance_viral_2024:views   // Returns: "2847291"
```

### SQL vs NoSQL Tradeoffs

| Aspect | SQL | NoSQL |
|--------|-----|-------|
| **Schema** | Fixed, structured | Flexible, evolving |
| **Scaling** | Vertical (more powerful hardware) | Horizontal (more servers) |
| **Consistency** | ACID guarantees | Eventual consistency |
| **Queries** | Complex JOINs, SQL language | Simple queries, API-based |
| **Use Cases** | Banks, e-commerce, payroll systems | Instagram, IoT sensors, gaming leaderboards |
| **Learning Curve** | Steeper (SQL syntax) | Gentler (familiar JSON-like) |

---

## 4. 🚀 Scaling & System Design

### Vertical vs Horizontal Scaling

**Vertical Scaling (Scale Up):**
```
Before:     After:
┌─────┐     ┌─────┐
│ 4GB │ --> │16GB │  More RAM
│2CPU │     │8CPU │  More CPU cores
│100GB│     │1TB  │  More storage
└─────┘     └─────┘
```
- ✅ Simple to implement
- ❌ Hardware limits
- ❌ Single point of failure
- ❌ Expensive

**Horizontal Scaling (Scale Out):**
```
Before:        After:
┌─────┐       ┌─────┐ ┌─────┐ ┌─────┐
│ DB  │  -->  │ DB1 │ │ DB2 │ │ DB3 │
└─────┘       └─────┘ └─────┘ └─────┘
```
- ✅ No hardware limits
- ✅ Better fault tolerance
- ✅ Cost-effective
- ❌ Complex to manage
- ❌ Data consistency challenges

### Replication (Copies for Redundancy)

**Master-Slave Replication:**
```
          ┌─ Slave 1 (Read-only)
Master ───┼─ Slave 2 (Read-only)
(Write)   └─ Slave 3 (Read-only)
```

**Benefits:**
- **Redundancy:** If master fails, promote a slave
- **Performance:** Distribute read queries across slaves
- **Backup:** Always have up-to-date copies

### Sharding (Splitting Data)

**Horizontal Partitioning:**
*How Discord handles millions of servers worldwide:*
```
Discord Servers by Region:
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   Shard 1   │ │   Shard 2   │ │   Shard 3   │
│   (US-West) │ │   (Europe)  │ │ (Asia-Pacific)│
│Gaming servers│ │Study groups │ │ Anime/K-pop │
│   1-500K    │ │  500K-1M    │ │   1M-1.5M   │
└─────────────┘ └─────────────┘ └─────────────┘
```

**Benefits:**
- Distribute load across multiple databases
- Each shard handles subset of data
- Can scale infinitely by adding shards

**Challenges:**
- Cross-shard queries are complex
- Rebalancing data when adding shards
- Choosing good shard key is crucial

### CAP Theorem (High-Level)

**"You Can't Have It All"**

Pick any 2 out of 3:
- **Consistency:** All nodes see the same data simultaneously
- **Availability:** System remains operational
- **Partition Tolerance:** System continues despite network failures

**Real-World Examples:**
- **Venmo/PayPal (CP):** Choose Consistency + Partition Tolerance → Your payment might fail, but you'll never be double-charged
- **Instagram/TikTok (AP):** Choose Availability + Partition Tolerance → You might see old like counts, but the app stays online during outages  
- **Your Bank's ATM (CA):** Choose Consistency + Availability → Perfect data accuracy, but assumes the ATM network never fails

---

## 5. 🎬 Wrap-Up

### Key Takeaways

**SQL Databases:**
- ✅ Structured data with complex relationships
- ✅ ACID guarantees for critical applications
- ✅ Mature ecosystem and tools
- 🎯 **Best for:** Banking apps, Shopify stores, university registration systems

**NoSQL Databases:**
- ✅ Flexible schema for evolving requirements
- ✅ Horizontal scaling for massive datasets
- ✅ Simple data models
- 🎯 **Best for:** Instagram feeds, smart home devices, blogging platforms, hackathon projects

### Decision Framework

**Choose SQL when:**
- Complex relationships between data
- Need ACID transactions
- Well-defined, stable schema
- Team familiar with SQL

**Choose NoSQL when:**
- Rapidly changing requirements
- Need to scale horizontally
- Simple data relationships
- Working with JSON-like data

### 🔮 Next Class Preview

**Hands-On with MongoDB:**
- Setting up MongoDB locally
- Creating collections and documents  
- CRUD operations with MongoDB
- Building a **Spotify playlist manager** with artists, songs, and playlists
- Connecting MongoDB to a Node.js backend with real music data

**Come prepared to code!** 💻

---

## 📚 Additional Resources

### SQL Resources
- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)
- [SQLBolt Interactive Lessons](https://sqlbolt.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

### NoSQL Resources
- [MongoDB University](https://university.mongodb.com/)
- [Redis Documentation](https://redis.io/documentation)
- [NoSQL Explained](https://www.mongodb.com/nosql-explained)

### System Design
- [High Scalability Blog](http://highscalability.com/)
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Database Scaling Patterns](https://www.digitalocean.com/community/tutorials/understanding-database-scaling-patterns)

---

*"Data is the new oil, but databases are the refineries that make it useful."* 🛢️➡️⚡
