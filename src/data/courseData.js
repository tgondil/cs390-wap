export const courseData = {
  title: "CS390 Web Application Programming",
  subtitle: "Tanay Gondil",
  description: "This 16-week course meets twice per week (29 classes total, with holidays observed) and guides students through building a full-stack website using the MERN stack (MongoDB, Express, React, Node.js).",
  duration: "16 weeks",
  totalClasses: 29,
  
  weeks: [
    {
      week: 1,
      title: "Orientation, Tools Setup & Web Fundamentals",
      description: "Set up the development environment and revisit fundamental web technologies",
      classes: [
        {
          classNumber: 1,
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
      title: "JavaScript for the Browser and API Fundamentals",
      description: "Master browser JavaScript and learn to work with external APIs",
      holiday: "Labor Day (Mon, Sep 2) - No class",
      classes: [
        {
          classNumber: 3,
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
      title: "Databases & Scaling",
      description: "Master database fundamentals and learn how to scale modern applications",
      classes: [
        {
          classNumber: 4,
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
      title: "Introduction to React",
      description: "Learn React fundamentals and build interactive user interfaces",
      classes: [
        {
          classNumber: 6,
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
      title: "React Router & Context API",
      description: "Build multi-page SPAs and manage global state",
      holiday: "Columbus Day (Mon, Oct 14) - No class",
      classes: [
        {
          classNumber: 8,
          title: "Multi-Page Applications with React Router",
          objectives: [
            "Set up React Router for client-side routing",
            "Create multiple pages/views in single-page applications",
            "Implement navigation with Link components and programmatic routing",
            "Use URL parameters and query strings for dynamic pages",
            "Handle nested routes and route protection"
          ],
          toolsIntroduced: ["React Router", "Client-side Routing", "SPA Navigation"],
          topics: ["Client-side routing", "SPA navigation", "URL parameters", "Nested routes", "Route protection"],
          homework: "Add multi-page routing to your React application"
        }
      ]
    },
    {
      week: 6,
      title: "Back-End Foundations – Node.js and Express.js",
      description: "Transition to backend development with Node.js and Express",
      classes: [
        {
          classNumber: 9,
          title: "Intro to Node.js and Express",
          objectives: [
            "Understand Node.js runtime and its uses",
            "Set up basic Express server",
            "Create simple API endpoints",
            "Return JSON responses"
          ],
          toolsIntroduced: ["Express.js", "Nodemon", "Postman"],
          topics: ["Server-side JavaScript", "HTTP methods", "API endpoints", "JSON"],
          homework: "Build basic Express server with endpoints"
        },
        {
          classNumber: 10,
          title: "Building RESTful APIs (Express continued)",
          objectives: [
            "Implement full CRUD operations",
            "Handle different HTTP methods (GET, POST, PUT, DELETE)",
            "Use middleware for JSON parsing",
            "Handle errors and status codes"
          ],
          toolsIntroduced: ["REST API principles", "HTTP status codes"],
          topics: ["CRUD operations", "RESTful design", "Error handling", "Middleware"],
          homework: "Create complete REST API for chosen resource"
        }
      ]
    },
    {
      week: 7,
      title: "MongoDB & Mongoose – Database Integration",
      description: "Add persistent data storage with MongoDB",
      classes: [
        {
          classNumber: 11,
          title: "Intro to Databases and MongoDB",
          objectives: [
            "Understand databases and NoSQL vs SQL",
            "Set up MongoDB Atlas cloud database",
            "Connect Express app to MongoDB using Mongoose",
            "Define schemas and models"
          ],
          toolsIntroduced: ["MongoDB", "MongoDB Atlas", "Mongoose"],
          topics: ["Database concepts", "NoSQL", "Schema design", "ODM"],
          homework: "Connect API to MongoDB database"
        },
        {
          classNumber: 12,
          title: "CRUD with MongoDB via Mongoose",
          objectives: [
            "Implement database CRUD operations",
            "Use Mongoose methods (find, create, update, delete)",
            "Handle async operations with promises",
            "Add input validation"
          ],
          toolsIntroduced: ["Mongoose methods", "Environment variables"],
          topics: ["Database operations", "Async/await", "Data validation", "Error handling"],
          homework: "Extend API with additional models or query features"
        }
      ]
    },
    {
      week: 8,
      title: "User Authentication & Security Basics",
      description: "Implement user authentication and security best practices",
      classes: [
        {
          classNumber: 13,
          title: "Authentication Concepts & Signup Route",
          objectives: [
            "Understand authentication vs authorization",
            "Learn JWT concepts and password hashing",
            "Create User model with bcrypt",
            "Implement registration endpoint"
          ],
          toolsIntroduced: ["bcrypt", "JWT concepts"],
          topics: ["Authentication", "Password security", "User registration", "Data validation"],
          homework: "Build user registration system"
        },
        {
          classNumber: 14,
          title: "Login & Protected Routes with JWT",
          objectives: [
            "Implement login endpoint with JWT creation",
            "Create authentication middleware",
            "Protect API routes",
            "Verify and decode JWT tokens"
          ],
          toolsIntroduced: ["jsonwebtoken", "Auth middleware"],
          topics: ["JWT authentication", "Protected routes", "Token verification", "Security best practices"],
          homework: "Add profile endpoint and user-specific data"
        }
      ]
    },
    {
      week: 9,
      title: "Connecting Frontend to Backend (Full-Stack Integration)",
      description: "Connect React frontend with Express backend for full-stack functionality",
      classes: [
        {
          classNumber: 15,
          title: "Fetching Data from the Backend (Read & Display)",
          objectives: [
            "Configure CORS for cross-origin requests",
            "Make HTTP requests from React using fetch/Axios",
            "Display database data in React components",
            "Handle loading and error states"
          ],
          toolsIntroduced: ["CORS", "Fetch API/Axios"],
          topics: ["Client-server communication", "API integration", "State management", "Error handling"],
          homework: "Connect React app to backend API"
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
      week: 10,
      title: "Advanced Topics & Final Project Planning",
      description: "Cover advanced React patterns and plan capstone projects",
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
          title: "Final Project Kickoff & Design",
          objectives: [
            "Define capstone project requirements",
            "Plan project scope and features",
            "Create user stories and data models",
            "Set up project timeline"
          ],
          toolsIntroduced: ["Project planning tools"],
          topics: ["Project planning", "Scope definition", "Timeline management", "Technical design"],
          homework: "Submit project proposal and create initial scaffold"
        }
      ]
    },
    {
      week: 11,
      title: "Deployment and Mid-Project Checkpoint",
      description: "Deploy applications and reach project milestone",
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
      week: 12,
      title: "Final Project Development & Polishing",
      description: "Complete and polish capstone projects",
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
      week: 13,
      title: "Project Milestone Demos & Feature Freeze",
      description: "Prepare milestone demos, lock down scope, and plan final tasks",
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
      week: 14,
      title: "Thanksgiving Week – Focused Development",
      description: "Make focused progress and plan around the holiday",
      holiday: "Thanksgiving (Thu, Nov 27-28) - Wed class only",
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
      week: 15,
      title: "Performance, Accessibility & Code Quality",
      description: "Polish your app to production quality",
      classes: [
        {
          classNumber: 26,
          title: "Performance Optimization & Monitoring",
          objectives: [
            "Profile rendering and network performance",
            "Apply code splitting and memoization",
            "Optimize API usage and caching",
            "Add basic monitoring"
          ],
          toolsIntroduced: ["React Profiler", "Lighthouse", "Code splitting"],
          topics: ["Rendering performance", "Bundle size", "Caching", "Monitoring"],
          homework: "Address top performance issues and measure improvements"
        },
        {
          classNumber: 27,
          title: "Accessibility & Quality Audits",
          objectives: [
            "Run a11y audits and fix issues",
            "Ensure keyboard and screen reader support",
            "Finalize code quality gates",
            "Prepare release candidate"
          ],
          toolsIntroduced: ["Lighthouse", "Axe", "ARIA"],
          topics: ["Accessibility", "Quality checks", "Documentation", "Release prep"],
          homework: "Finish a11y fixes and finalize documentation"
        }
      ]
    },
    {
      week: 16,
      title: "Capstone Project Presentations & Wrap-Up",
      description: "Present completed projects and celebrate achievements",
      holiday: "Finals Week - Presentations only",
      classes: [
        {
          classNumber: 28,
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
          classNumber: 29,
          title: "Final Project Presentations (Part 2) and Course Wrap-Up",
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
    8: "Wed, Oct 15, 2025",     // Columbus Day (Mon, Oct 14) - No class
    9: "Mon, Oct 20, 2025",
    10: "Wed, Oct 22, 2025",
    11: "Mon, Oct 27, 2025",
    12: "Wed, Oct 29, 2025",
    13: "Mon, Nov 03, 2025",
    14: "Wed, Nov 05, 2025",
    15: "Mon, Nov 10, 2025",
    16: "Wed, Nov 12, 2025",
    17: "Mon, Nov 17, 2025",
    18: "Wed, Nov 19, 2025",
    19: "Mon, Nov 24, 2025",
    20: "Wed, Nov 26, 2025",     // Thanksgiving week - shortened week
    21: "Mon, Dec 01, 2025",
    22: "Wed, Dec 03, 2025",
    23: "Mon, Dec 08, 2025",
    24: "Wed, Dec 10, 2025",
    25: "Wed, Dec 17, 2025",     // Thanksgiving (Mon, Nov 25) - No class
    26: "Mon, Jan 13, 2026",     // Winter break gap
    27: "Wed, Jan 15, 2026",
    28: "Mon, Jan 20, 2026",     // Finals week
    29: "Wed, Jan 22, 2026"
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