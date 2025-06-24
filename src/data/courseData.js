export const courseData = {
  title: "CS390 Web Application Programming",
  subtitle: "Full-Stack MERN Development",
  description: "This 12-week course meets twice per week (24 classes total) and guides students through building a full-stack website using the MERN stack (MongoDB, Express, React, Node.js).",
  duration: "12 weeks",
  totalClasses: 24,
  
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
          title: "Git, GitHub & HTML/CSS/JS Refresher",
          objectives: [
            "Configure Git and create first repository",
            "Push code to GitHub",
            "Build a simple static page with HTML/CSS",
            "Add basic JavaScript for interactivity"
          ],
          toolsIntroduced: ["Git", "GitHub", "Tailwind CSS (preview)"],
          topics: ["Version control", "HTML semantics", "CSS styling", "JavaScript basics"],
          homework: "Create 'About Me' webpage and push to GitHub"
        }
      ]
    },
    {
      week: 2,
      title: "Introduction to React and Modern JavaScript",
      description: "Learn React fundamentals and modern JavaScript features",
      classes: [
        {
          classNumber: 3,
          title: "Intro to React & Project Setup",
          objectives: [
            "Understand what React is and why we use it",
            "Set up a new React project using Vite or Create React App",
            "Learn JSX syntax and virtual DOM concepts",
            "Create first custom React component"
          ],
          toolsIntroduced: ["React", "JSX", "Vite/Create React App"],
          topics: ["React concepts", "Component architecture", "ES6+ features"],
          homework: "Initialize React app and create custom component"
        },
        {
          classNumber: 4,
          title: "JSX, Components & Props in Depth",
          objectives: [
            "Master JSX syntax and component composition",
            "Learn to pass and use props effectively",
            "Implement dynamic rendering with array.map()",
            "Add basic event handling"
          ],
          toolsIntroduced: ["Props", "Event handling"],
          topics: ["Component composition", "Data flow", "Event handling", "Dynamic rendering"],
          homework: "Build Team Members gallery with reusable components"
        }
      ]
    },
    {
      week: 3,
      title: "State, Events & Tailwind CSS for Styling",
      description: "Add interactivity with state management and style with Tailwind CSS",
      classes: [
        {
          classNumber: 5,
          title: "State and Event Handling in React",
          objectives: [
            "Understand React state with useState hook",
            "Handle user events and update state",
            "Build interactive components (counter, forms)",
            "Learn controlled inputs pattern"
          ],
          toolsIntroduced: ["useState", "useEffect (conceptual)"],
          topics: ["State management", "Event handling", "Controlled components", "Unidirectional data flow"],
          homework: "Build interactive counter and form components"
        },
        {
          classNumber: 6,
          title: "Styling with Tailwind CSS",
          objectives: [
            "Set up Tailwind CSS in React project",
            "Learn utility-first CSS approach",
            "Style components with Tailwind classes",
            "Implement responsive design patterns"
          ],
          toolsIntroduced: ["Tailwind CSS"],
          topics: ["Utility-first CSS", "Responsive design", "Tailwind configuration"],
          homework: "Create styled To-Do List app with state and Tailwind"
        }
      ]
    },
    {
      week: 4,
      title: "React Router & Context API (State Management)",
      description: "Build multi-page SPAs and manage global state",
      classes: [
        {
          classNumber: 7,
          title: "Multi-Page Application with React Router",
          objectives: [
            "Set up React Router for client-side routing",
            "Create multiple pages/views in SPA",
            "Implement navigation with Link components",
            "Use URL parameters for dynamic pages"
          ],
          toolsIntroduced: ["React Router"],
          topics: ["Client-side routing", "SPA navigation", "URL parameters"],
          homework: "Add routing to existing project"
        },
        {
          classNumber: 8,
          title: "Global State with Context API",
          objectives: [
            "Understand prop drilling problems",
            "Create and use React Context",
            "Implement theme or auth context",
            "Use useContext hook to consume context"
          ],
          toolsIntroduced: ["Context API", "useContext"],
          topics: ["Global state management", "Context providers", "State sharing"],
          homework: "Build Personal Portfolio SPA with routing and context"
        }
      ]
    },
    {
      week: 5,
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
      week: 6,
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
      week: 7,
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
      week: 8,
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
      week: 9,
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
      week: 10,
      title: "Deployment (Vercel & Render) and Mid-Project Checkpoint",
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
      week: 11,
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
      week: 12,
      title: "Capstone Project Presentations & Wrap-Up",
      description: "Present completed projects and celebrate achievements",
      classes: [
        {
          classNumber: 23,
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
          classNumber: 24,
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
  ]
};

export const techStack = [
  { name: "HTML", category: "Frontend", week: 1 },
  { name: "CSS", category: "Frontend", week: 1 },
  { name: "JavaScript", category: "Frontend", week: 1 },
  { name: "React", category: "Frontend", week: 2 },
  { name: "Tailwind CSS", category: "Frontend", week: 3 },
  { name: "React Router", category: "Frontend", week: 4 },
  { name: "Context API", category: "Frontend", week: 4 },
  { name: "Node.js", category: "Backend", week: 5 },
  { name: "Express.js", category: "Backend", week: 5 },
  { name: "MongoDB", category: "Database", week: 6 },
  { name: "Mongoose", category: "Database", week: 6 },
  { name: "JWT", category: "Auth", week: 7 },
  { name: "bcrypt", category: "Auth", week: 7 },
  { name: "Vercel", category: "Deployment", week: 10 },
  { name: "Render", category: "Deployment", week: 10 }
]; 