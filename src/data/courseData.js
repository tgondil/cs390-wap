export const courseData = {
  title: "CS390 Web Application Programming",
  subtitle: "Tanay Gondil",
  description: "This 16-week course meets twice per week (28 classes total, with holidays observed) and guides students through building a full-stack website using the MERN stack (MongoDB, Express, React, Node.js).",
  duration: "16 weeks",
  totalClasses: 28,
  
  weeks: [
    {
      week: 1,
      weekDates: "Aug 25-29, 2025",
      title: "Orientation, Tools Setup & Web Fundamentals",
      description: "Set up the development environment and revisit fundamental web technologies",
      pso: {
        day: "Tue, Aug 26, 2025",
        title: "PSO: Getting Started",
        description: "Pair programming session focused on course setup and fundamentals"
      },
      classes: [
        {
          classNumber: 1,
          date: "Mon, Aug 25, 2025",
          title: "Course Introduction & Environment Setup",
          objectives: [
            "Review course syllabus and final project expectations",
            "Set up Node.js and VS Code development environment",
            "Learn basic CLI commands for project navigation",
            "Create first 'Hello World' Node.js script"
          ],
          toolsIntroduced: ["Node.js", "npm", "VS Code", "CLI"],
          topics: ["Course overview", "Front-end vs back-end", "Development environment setup"],
          homework: "Set up development environment at home"
        },
        {
          classNumber: 2,
          date: "Wed, Aug 27, 2025",
          title: "JavaScript for the Browser",
          objectives: [
            "Master DOM manipulation with JavaScript",
            "Handle user events and interactions",
            "Work with browser APIs and localStorage",
            "Build interactive web applications without frameworks"
          ],
          toolsIntroduced: ["DOM API", "Event listeners", "Browser APIs", "localStorage"],
          topics: ["DOM manipulation", "Event handling", "Browser APIs", "Interactive web development"],
          homework: "Build interactive JavaScript web application"
        }
      ]
    },
    {
      week: 2,
      weekDates: "Sep 1-5, 2025",
      title: "API Fundamentals",
      description: "Master browser JavaScript and learn to work with external APIs",
      holiday: "Labor Day (Mon, Sep 1) - No class",
      pso: {
        day: "Tue, Sep 02, 2025",
        title: "PSO: Wordle Challenge",
        description: "Build a Wordle clone - practice DOM manipulation and game logic"
      },
      classes: [
        {
          classNumber: 3,
          date: "Wed, Sep 03, 2025",
          title: "Introduction to APIs",
          objectives: [
            "Understand what APIs are and how they work",
            "Learn REST API principles and HTTP methods",
            "Make API calls using fetch and handle responses",
            "Work with JSON data and error handling"
          ],
          toolsIntroduced: ["REST APIs", "Fetch API", "JSON", "HTTP methods"],
          topics: ["API concepts", "HTTP requests", "JSON data", "Error handling"],
          homework: "Build app that fetches data from public API"
        }
      ]
    },
    {
      week: 3,
      weekDates: "Sep 8-12, 2025",
      title: "Databases & Scaling",
      description: "Master database fundamentals and learn how to scale modern applications",
      classes: [
        {
          classNumber: 4,
          date: "Mon, Sep 08, 2025",
          title: "Introduction to Databases",
          objectives: [
            "Understand what databases are and why they're essential",
            "Learn the difference between SQL and NoSQL databases",
            "Master ACID vs BASE principles and their tradeoffs",
            "Explore when to use each type of database"
          ],
          toolsIntroduced: ["Database concepts", "SQL vs NoSQL", "ACID properties", "BASE properties"],
          topics: ["Database fundamentals", "NoSQL emergence", "ACID vs BASE", "Database selection criteria"],
          homework: "Research and compare database options for a project scenario"
        },
        {
          classNumber: 5,
          date: "Wed, Sep 10, 2025",
          title: "Scaling Modern Applications",
          objectives: [
            "Understand why scaling is critical for business survival",
            "Learn database scaling through replication and sharding",
            "Master when and how to transition from monoliths to microservices",
            "Implement performance optimization strategies with caching and load balancing",
            "Analyze real-world scaling decisions from billion-dollar companies"
          ],
          toolsIntroduced: ["Redis", "Database Sharding", "Load Balancers", "CDN", "Microservices Architecture"],
          topics: ["Database Replication", "Sharding Strategies", "Monolith vs Microservices", "Caching Performance", "Load Balancing"],
          homework: "Analyze scaling challenges for a chosen application and propose solutions"
        }
      ]
    },
    {
      week: 4,
      weekDates: "Sep 15-19, 2025",
      title: "Introduction to React",
      description: "Learn React fundamentals and build interactive user interfaces",
      pso: {
        day: "Tue, Sep 16, 2025",
        title: "PSO: React Practice",
        description: "Build interactive React components with pair programming"
      },
      classes: [
        {
          classNumber: 6,
          date: "Mon, Sep 15, 2025",
          title: "Introduction to React",
          objectives: [
            "Understand React's declarative programming model and mental framework",
            "Master JSX syntax and embedding JavaScript expressions in markup",
            "Create reusable components and compose them into complex UIs",
            "Manage component state with useState hook and handle user interactions",
            "Pass data between components using props and understand data flow"
          ],
          toolsIntroduced: ["React", "JSX", "useState Hook", "Component Architecture"],
          topics: ["React Mental Model", "Components & Composition", "JSX Syntax & Rules", "Props & Data Flow", "State Management", "Event Handling", "Conditional Rendering", "List Rendering"],
          homework: "Build interactive React application with multiple components, state, and user interactions"
        },
        {
          classNumber: 7,
          date: "Wed, Sep 17, 2025",
          title: "React Interactivity & Dynamic UI",
          objectives: [
            "Implement event handlers to respond to user interactions",
            "Build conditional UIs that show/hide content based on state",
            "Render dynamic lists from array data using array.map()",
            "Enable child-to-parent communication by passing functions as props",
            "Control form inputs with React state for predictable behavior"
          ],
          toolsIntroduced: ["Event Handling", "Conditional Rendering", "List Rendering", "Function Props", "Controlled Forms"],
          topics: ["onClick and onChange events", "Ternary operators and logical AND", "Array.map() and key props", "Props down, events up", "Controlled vs uncontrolled inputs"],
          homework: "Build interactive React components using all 5 concepts - event handling, conditional rendering, list rendering, function props, and controlled forms"
        }
      ]
    },
    {
      week: 5,
      weekDates: "Sep 22-26, 2025",
      title: "React Side Effects",
      description: "Master useEffect for data fetching and side effect management",
      cancelled: "Mon, Sep 22 - Class cancelled (Hello World Hackathon)",
      classes: [
        {
          classNumber: 8,
          date: "Wed, Sep 24, 2025",
          title: "useEffect & Side Effects in React",
          objectives: [
            "Understand what side effects are in React",
            "Learn to fetch data with useEffect",
            "Manage cleanup functions (e.g., event listeners, intervals)",
            "Differentiate between state updates and effects",
            "Master dependency arrays and when effects run"
          ],
          toolsIntroduced: ["useEffect Hook", "Dependency Arrays", "Cleanup Functions", "Data Fetching Patterns"],
          topics: ["useEffect hook", "Dependency arrays", "Fetching data from APIs", "Cleanup with return functions", "Component lifecycle"],
          homework: "Build a React application using useEffect for data fetching and cleanup"
        }
      ]
    },
    {
      week: 6,
      weekDates: "Sep 29-Oct 3, 2025",
      title: "Backend Foundations – Node.js & MongoDB",
      description: "Transition to backend development with Node.js and MongoDB",
      pso: {
        day: "Tue, Sep 30, 2025",
        title: "PSO: LeetCode Practice",
        description: "Sharpen algorithmic thinking with coding challenges"
      },
      classes: [
        {
          classNumber: 9,
          date: "Mon, Sep 29, 2025",
          title: "Introduction to Node.js",
          objectives: [
            "Understand what Node.js is and why it exists",
            "Learn how Node.js differs from browser JavaScript",
            "Explore the Node.js ecosystem and npm",
            "Understand the event loop and non-blocking I/O",
            "Set up Node.js development environment"
          ],
          toolsIntroduced: ["Node.js Runtime", "npm", "Node Package Manager", "Module System"],
          topics: ["JavaScript runtime", "Event loop", "Module system", "npm ecosystem", "Full-stack development"],
          homework: "Install Node.js and create your first Node.js script"
        },
        {
          classNumber: 10,
          date: "Wed, Oct 01, 2025",
          title: "Introduction to MongoDB",
          objectives: [
            "Understand NoSQL databases and when to use them",
            "Learn MongoDB document structure and BSON",
            "Set up MongoDB Atlas cloud database",
            "Master Mongoose schemas, models, and validation",
            "Implement basic CRUD operations with MongoDB"
          ],
          toolsIntroduced: ["MongoDB", "MongoDB Atlas", "Mongoose", "BSON", "NoSQL"],
          topics: ["NoSQL vs SQL", "Document databases", "MongoDB Atlas", "Mongoose ODM", "Schemas and Models", "CRUD operations", "Query operators"],
          homework: "Set up MongoDB Atlas and create first schema with CRUD operations",
          hasSlides: true
        }
      ]
    },
    {
      week: 7,
      weekDates: "Oct 6-10, 2025",
      title: "Advanced MongoDB & Data Modeling",
      description: "Master advanced MongoDB patterns and data modeling strategies",
      cancelled: "Wed, Oct 8 - Class cancelled (exam week)",
      pso: {
        day: "Tue, Oct 07, 2025",
        title: "PSO: Database Design",
        description: "Practice MongoDB schema design and Mongoose models"
      },
      classes: [
        {
          classNumber: 11,
          date: "Mon, Oct 06, 2025",
          title: "Advanced MongoDB & Data Modeling",
          objectives: [
            "Master data modeling mindset and access-pattern-first thinking",
            "Understand embedding vs referencing patterns and when to use each",
            "Learn indexing strategies and query optimization with explain plans",
            "Implement pagination at scale and advanced query operators",
            "Explore aggregation pipeline, transactions, and production best practices"
          ],
          toolsIntroduced: ["Advanced MongoDB", "Aggregation Pipeline", "Indexes", "Transactions", "Sharding"],
          topics: ["Data modeling patterns", "Indexing strategies", "Query optimization", "Aggregation", "Transactions", "Replication", "Sharding", "Performance", "Security"],
          homework: "Design and optimize a MongoDB schema for a complex application",
          hasSlides: true
        }
      ]
    },
    {
      week: 8,
      weekDates: "Oct 13-17, 2025",
      title: "Mongoose in Practice",
      description: "Implement Mongoose schemas with validation and relationships",
      holiday: "Columbus Day (Mon, Oct 13) - No class",
      classes: [
        {
          classNumber: 12,
          date: "Wed, Oct 15, 2025",
          title: "Mongoose in Practice – Modeling, Validation & Relationships",
          objectives: [
            "Set up Mongoose schemas with validation and defaults",
            "Implement one-to-many relationships with references",
            "Use .populate() to join data across collections",
            "Build REST API endpoints with proper validation"
          ],
          toolsIntroduced: ["Mongoose schemas", "populate()", "Schema validation", "Subdocuments"],
          topics: ["Schema design", "Validation", "Relationships", "Embedding vs Referencing", "REST API"],
          homework: "Build User → Posts API with populated relationships",
          hasSlides: true
        }
      ]
    },
    {
      week: 9,
      weekDates: "Oct 20-24, 2025",
      title: "User Authentication - Part 1",
      description: "Implement user authentication with JWT and password security",
      cancelled: "Mon, Oct 20 - Class cancelled (hackathon recovery)",
      pso: {
        day: "Tue, Oct 21, 2025",
        title: "PSO: Untrusted Game",
        description: "Solve JavaScript security puzzles and logic challenges"
      },
      classes: [
        {
          classNumber: 13,
          date: "Wed, Oct 22, 2025",
          title: "Authentication Concepts & Signup Route",
          objectives: [
            "Understand authentication vs authorization",
            "Learn JWT concepts and password hashing",
            "Create User model with bcrypt",
            "Implement registration endpoint"
          ],
          toolsIntroduced: ["bcrypt", "JWT concepts"],
          topics: ["Authentication", "Password security", "User registration", "Data validation"],
          homework: "Build user registration system",
          hasSlides: true
        }
      ]
    },
    {
      week: 10,
      weekDates: "Oct 27-31, 2025",
      title: "User Authentication - Part 2",
      description: "Complete authentication with login and protected routes",
      cancelled: "Mon, Oct 27 - Class cancelled (room issue)",
      pso: {
        day: "Tue, Oct 28, 2025",
        title: "PSO: Podcast App - Mini Project 2",
        description: "Build a full-stack podcast application (Due: Nov 1)"
      },
      classes: [
        {
          classNumber: 14,
          date: "Wed, Oct 29, 2025",
          title: "Login & Protected Routes with JWT",
          objectives: [
            "Implement login endpoint with JWT creation",
            "Create authentication middleware",
            "Protect API routes",
            "Verify and decode JWT tokens"
          ],
          toolsIntroduced: ["jsonwebtoken", "Auth middleware"],
          topics: ["JWT authentication", "Protected routes", "Token verification", "Security best practices"],
          homework: "Add profile endpoint and user-specific data",
          hasSlides: true
        }
      ]
    },
    {
      week: 11,
      weekDates: "Nov 3-7, 2025",
      title: "Connecting Frontend to Backend (Full-Stack Integration)",
      description: "Connect React frontend with Express backend for full-stack functionality",
      pso: {
        day: "Tue, Nov 04, 2025",
        title: "PSO: Secure Login",
        description: "Build authentication with bcrypt & MongoDB",
        link: "/pso/login"
      },
      classes: [
        {
          classNumber: 15,
          date: "Mon, Nov 03, 2025",
          title: "Full-Stack Integration - Connecting Frontend to Backend",
          objectives: [
            "Configure CORS for cross-origin requests",
            "Make HTTP requests from React using fetch/Axios",
            "Display database data in React components",
            "Handle loading and error states"
          ],
          toolsIntroduced: ["CORS", "Fetch API/Axios"],
          topics: ["Client-server communication", "API integration", "State management", "Error handling"],
          homework: "Connect React app to backend API",
          hasSlides: true
        },
        {
          classNumber: 16,
          title: "Front-End Authentication & Protected Routes",
          objectives: [
            "Create login form in React",
            "Store and manage JWT tokens on frontend",
            "Implement AuthContext for global auth state",
            "Protect frontend routes based on auth status"
          ],
          toolsIntroduced: ["Frontend auth patterns", "Token storage"],
          topics: ["Frontend authentication", "Context for auth", "Protected routes", "Token management"],
          homework: "Build complete authentication UI with registration and login"
        }
      ]
    },
    {
      week: 12,
      weekDates: "Nov 10-14, 2025",
      title: "Advanced Topics & Final Project Planning",
      description: "Cover advanced React patterns and plan capstone projects",
      pso: {
        day: "Tue, Nov 11, 2025",
        title: "PSO: Deployment Workshop",
        description: "Deploy your applications to production"
      },
      classes: [
        {
          classNumber: 17,
          title: "State Management & React Hook Patterns",
          objectives: [
            "Review Context API vs Redux patterns",
            "Deep dive into useEffect patterns",
            "Create custom hooks for reusable logic",
            "Optimize performance and state management"
          ],
          toolsIntroduced: ["Custom hooks", "Redux (conceptual)", "React Query (conceptual)"],
          topics: ["Advanced state management", "Hook patterns", "Performance optimization"],
          homework: "Refactor existing code with advanced patterns"
        },
        {
          classNumber: 18,
          date: "Wed, Nov 12, 2025",
          title: "Final Project Kickoff & Design",
          objectives: [
            "Define capstone project requirements",
            "Plan project scope and features",
            "Create user stories and data models",
            "Set up project timeline"
          ],
          toolsIntroduced: ["Project planning tools"],
          topics: ["Project planning", "Scope definition", "Timeline management", "Technical design"],
          homework: "Submit project proposal and create initial scaffold",
          hasSlides: true
        }
      ]
    },
    {
      week: 13,
      weekDates: "Nov 17-21, 2025",
      title: "Deployment and Mid-Project Checkpoint",
      description: "Deploy applications and reach project milestone",
      pso: {
        day: "Tue, Nov 18, 2025",
        title: "PSO: Project Workshop",
        description: "Work session for final projects with peer review"
      },
      classes: [
        {
          classNumber: 19,
          title: "Deploying the Front-End to Vercel",
          objectives: [
            "Deploy React app to Vercel",
            "Deploy Express API to Render",
            "Configure production environment variables",
            "Test deployed full-stack application"
          ],
          toolsIntroduced: ["Vercel", "Render", "Production deployment"],
          topics: ["Deployment strategies", "Environment configuration", "Production testing"],
          homework: "Deploy your project and test live version"
        },
        {
          classNumber: 20,
          title: "Project Work – Build & Troubleshoot",
          objectives: [
            "Workshop time for project development",
            "Debug deployment and integration issues",
            "Implement core MVP features",
            "Conduct peer testing and feedback"
          ],
          toolsIntroduced: ["Debugging tools", "Testing strategies"],
          topics: ["Project development", "Debugging", "Testing", "Peer review"],
          homework: "Complete MVP features by end of week"
        }
      ]
    },
    {
      week: 14,
      weekDates: "Nov 24-28, 2025",
      title: "Final Project Development & Polishing",
      description: "Complete and polish capstone projects",
      pso: {
        day: "Tue, Nov 25, 2025",
        title: "PSO: Thanksgiving Week Session",
        description: "Final project progress check and troubleshooting"
      },
      classes: [
        {
          classNumber: 21,
          title: "Open Lab – Build Features & Testing",
          objectives: [
            "Complete remaining project features",
            "Conduct thorough testing of all user flows",
            "Perform peer code reviews",
            "Fix bugs and improve user experience"
          ],
          toolsIntroduced: ["Testing methodologies", "Code review practices"],
          topics: ["Feature completion", "Testing", "Code review", "Bug fixing"],
          homework: "Continue project development and testing"
        },
        {
          classNumber: 22,
          title: "UI Polishing & Performance",
          objectives: [
            "Improve UI/UX with consistent styling",
            "Optimize performance and loading states",
            "Ensure mobile responsiveness",
            "Write comprehensive project documentation"
          ],
          toolsIntroduced: ["Performance tools", "Accessibility basics"],
          topics: ["UI/UX improvement", "Performance optimization", "Documentation", "Accessibility"],
          homework: "Finalize project and prepare presentation materials"
        }
      ]
    },
    {
      week: 15,
      weekDates: "Dec 1-5, 2025",
      title: "Project Milestone Demos & Feature Freeze",
      description: "Prepare milestone demos, lock down scope, and plan final tasks",
      pso: {
        day: "Tue, Dec 02, 2025",
        title: "PSO: Final Polish",
        description: "Last touches on projects before presentations"
      },
      classes: [
        {
          classNumber: 23,
          title: "Milestone Demos & Feedback",
          objectives: [
            "Present in-progress capstone demos",
            "Collect structured feedback and identify gaps",
            "Finalize scope for remaining work",
            "Create focused improvement list"
          ],
          toolsIntroduced: ["Peer review rubric", "Demo checklist"],
          topics: ["Demo strategy", "Feedback capture", "Scope control", "Prioritization"],
          homework: "Incorporate feedback and finalize feature list for feature freeze"
        },
        {
          classNumber: 24,
          title: "Feature Freeze & Final Sprint Planning",
          objectives: [
            "Define feature freeze and quality bar",
            "Plan final sprint tasks and owners",
            "Establish testing and acceptance criteria",
            "Schedule dry runs for presentations"
          ],
          toolsIntroduced: ["Sprint planning", "Test checklist"],
          topics: ["Feature freeze", "Testing plan", "Task ownership", "Risks & mitigations"],
          homework: "Execute final sprint plan and begin formal testing"
        }
      ]
    },
    {
      week: 16,
      weekDates: "Dec 8-12, 2025",
      title: "Performance & Quality",
      description: "Polish your app to production quality",
      pso: {
        day: "Tue, Dec 09, 2025",
        title: "PSO: Presentation Prep",
        description: "Practice your final presentations and get feedback"
      },
      classes: [
        {
          classNumber: 25,
          title: "Focused Build Session & Troubleshooting",
          objectives: [
            "Unblock critical issues with instructor support",
            "Triage bugs and prioritize",
            "Stabilize core user flows",
            "Update project status"
          ],
          toolsIntroduced: ["Debugging tools", "Issue tracking"],
          topics: ["Debugging", "Prioritization", "Stabilization", "Status updates"],
          homework: "Continue focused progress over the break"
        }
      ]
    },
    {
      week: 17,
      weekDates: "Dec 15-19, 2025",
      title: "Final Presentations - Week 1",
      description: "Present completed projects and demonstrate your work",
      holiday: "Finals Week",
      classes: [
        {
          classNumber: 26,
          title: "Final Project Presentations (Part 1)",
          objectives: [
            "Present completed full-stack projects",
            "Demonstrate key features and functionality",
            "Discuss technical challenges and solutions",
            "Receive feedback from peers and instructor"
          ],
          toolsIntroduced: ["Presentation skills"],
          topics: ["Project presentation", "Technical discussion", "Peer feedback"],
          homework: "None - focus on presentations"
        },
        {
          classNumber: 27,
          title: "Final Project Presentations (Part 2)",
          objectives: [
            "Complete remaining project presentations",
            "Showcase technical achievements and growth",
            "Discuss lessons learned and next steps",
            "Celebrate course completion"
          ],
          toolsIntroduced: ["Presentation skills"],
          topics: ["Project presentation", "Course reflection", "Peer feedback"],
          homework: "None - focus on presentations"
        },
      ]
    },
    {
      week: 18,
      weekDates: "Dec 22-26, 2025",
      title: "Course Wrap-Up",
      description: "Final presentations and course completion",
      holiday: "Finals Week",
      classes: [
        {
          classNumber: 28,
          title: "Final Presentations & Course Wrap-Up",
          objectives: [
            "Complete remaining project presentations",
            "Reflect on learning journey and key skills acquired",
            "Discuss next steps and continued learning paths",
            "Celebrate course completion and achievements"
          ],
          toolsIntroduced: ["Career development resources"],
          topics: ["Final presentations", "Course reflection", "Future learning", "Career guidance"],
          homework: "Continue the lifelong learning journey!"
        }
      ]
    }
  ],

  classDates: {
    1: "Mon, Aug 25, 2025",
    2: "Wed, Aug 27, 2025",
    3: "Wed, Sep 03, 2025",     // Labor Day (Mon, Sep 2) - No class
    4: "Mon, Sep 08, 2025",
    5: "Wed, Sep 10, 2025",
    6: "Mon, Sep 15, 2025",
    7: "Wed, Sep 17, 2025",
    8: "Wed, Sep 24, 2025",     // Mon, Sep 22 - Cancelled (Hello World Hackathon)
    9: "Mon, Sep 29, 2025",
    10: "Wed, Oct 01, 2025",
    11: "Mon, Oct 06, 2025",
    12: "Wed, Oct 15, 2025",    // Wed, Oct 8 - Cancelled (exam week) | Mon, Oct 13 - Columbus Day
    13: "Wed, Oct 22, 2025",    // Mon, Oct 20 - Cancelled (hackathon recovery)
    14: "Wed, Oct 29, 2025",    // Mon, Oct 27 - Cancelled (room issue)
    15: "Mon, Nov 03, 2025",
    16: "Wed, Nov 05, 2025",
    17: "Mon, Nov 10, 2025",
    18: "Wed, Nov 12, 2025",
    19: "Mon, Nov 17, 2025",
    20: "Wed, Nov 19, 2025",
    21: "Mon, Nov 24, 2025",
    22: "Wed, Nov 26, 2025",
    23: "Mon, Dec 01, 2025",
    24: "Wed, Dec 03, 2025",
    25: "Mon, Dec 08, 2025",
    26: "Wed, Dec 10, 2025",
    27: "Mon, Dec 15, 2025",     // Finals Week
    28: "Wed, Dec 17, 2025"      // Finals Week
  }
};

export const techStack = [
  { name: "HTML", category: "Frontend", week: 1 },
  { name: "CSS", category: "Frontend", week: 1 },
  { name: "JavaScript", category: "Frontend", week: 1 },
  { name: "React", category: "Frontend", week: 4 },
  { name: "JSX", category: "Frontend", week: 4 },
  { name: "Tailwind CSS", category: "Frontend", week: 4 },
  { name: "React Router", category: "Frontend", week: 5 },
  { name: "Context API", category: "Frontend", week: 6 },
  { name: "Node.js", category: "Backend", week: 6 },
  { name: "Express.js", category: "Backend", week: 6 },
  { name: "MongoDB", category: "Database", week: 7 },
  { name: "Mongoose", category: "Database", week: 7 },
  { name: "JWT", category: "Auth", week: 8 },
  { name: "bcrypt", category: "Auth", week: 8 },
  { name: "Vercel", category: "Deployment", week: 11 },
  { name: "Render", category: "Deployment", week: 11 }
]; 