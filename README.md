This 12-week course meets twice per week (24 classes total) and guides students through building a full-stack website using the MERN stack (MongoDB, Express, React, Node.js). The curriculum progresses from a refresher on basics (HTML, CSS, JavaScript) to advanced front-end and back-end topics, and culminates in a hands-on capstone project. Each week highlights specific learning objectives, introduces new tools (e.g. React, Tailwind CSS, Node.js, Express, MongoDB, Git/GitHub, Vercel, Render), and involves practical coding exercises. Homework, mini-projects, and in-class activities emphasize *learning by doing*, with the final 2–3 weeks dedicated to a full-stack capstone project. By the end of the course, students will have built a complete website and deployed it online.

## Week 1: Orientation, Tools Setup & Web Fundamentals

**Topics & Objectives:**

* Set up the development environment (Node.js, VS Code) and learn basic Command Line Interface (CLI) usage for project navigation.
* Initialize version control with Git and create a GitHub repository for the course.
* Revisit fundamental web technologies (HTML, CSS, JavaScript) and how the front-end and back-end work together.
* Understand the course structure, expectations, and the roadmap from basics to a full-stack project.

**Class 1:** *Course Introduction & Environment Setup* – Review the course syllabus and final project expectations. Explain the difference between front-end and back-end roles in a web application (the browser vs. server model). Guide students through installing **Node.js** (confirming Node and npm versions) and setting up a code editor (e.g. VS Code). Demonstrate basic **CLI** commands (creating directories, navigating file system) to ensure everyone is comfortable with the terminal. If time permits, have students write a "Hello World" in Node (a simple script printing to console) to verify their setup. Discuss the importance of hands-on practice and version control for learning.

**Class 2:** *Git, GitHub & HTML/CSS/JS Refresher* – Introduce **Git** for version control: configuring name/email, creating a local repository, and making the first commit. Show how to push to **GitHub** (each student creates a repo, e.g. *personal-website*). Next, review core HTML/CSS by building a simple static page (such as a personal profile or portfolio homepage). Emphasize semantic HTML and basic CSS styling; optionally introduce **Tailwind CSS** CDN just to preview (full Tailwind integration comes later). Touch on JavaScript basics in the browser (a simple `<script>` for form validation or button click) to refresh JS knowledge. By the end of Class 2, students will have a basic static site in a GitHub repo. *Optional in-class activity:* Pair up students to review each other’s HTML/CSS code or to practice Git commits (one writes a section of HTML, the other reviews and commits it).

**Homework:** Set up your development environment at home (install Node and VS Code) and clone the class GitHub repo. Create a simple **“About Me” webpage** using HTML and CSS (or enhance the in-class page) and push it to GitHub. Write a short paragraph in the README about your experience with HTML/CSS/JS so far (to gauge comfort levels). *Submission:* URL of your GitHub repository with the webpage. This ensures everyone starts with basic web content and Git practice.

**Tools Introduced:** Node.js (JavaScript runtime), npm, VS Code, Git (CLI), GitHub. *(While Node is installed now, focus on Node’s usage will come in later weeks.)*

**Optional Activities:** Brainstorm ideas for the final project – have an open discussion about what full-stack apps students might want to build (e.g. blog, to-do app, small e-commerce). This gets students thinking ahead and excited about applying what they’ll learn.

---

## Week 2: Introduction to React and Modern JavaScript

**Topics & Objectives:**

* Understand what **React** is and why we use it for front-end development (dynamic, component-based UIs).
* Learn modern JavaScript (ES6+) features that React uses (import/export modules, arrow functions, `let/const`, etc.).
* Create the first React application and practice building **components** and using **JSX** syntax.
* Use props to pass data to components and render dynamic content.
* Prepare the groundwork for a single-page application (SPA) using React.

**Class 3:** *Intro to React & Project Setup* – Explain that **React is a JavaScript library for building user interfaces**, enabling creation of dynamic single-page applications. Discuss how React uses **JSX** (XML-like syntax in JavaScript) and a virtual DOM for efficient updates. Set up a new React project (using a tool like `create-react-app` or **Vite**). Walk through the generated project structure (node\_modules, public, src, etc.) and how the React app runs in development mode. In-class, everyone initializes a React app and runs `npm start` to see the default page. Demonstrate creating a simple React **component** (e.g. `HelloMessage` component that displays a greeting) and importing it into the main App component. Emphasize that React components let us split the UI into reusable pieces. Cover a brief ES6+ refresher as needed (for example, arrow functions for component definitions, template literals for strings, `map()` for arrays). By the end of Class 3, students have a running React app and have created their first custom component.

**Class 4:** *JSX, Components & Props in Depth* – Dive deeper into JSX and component composition. Show how to create multiple components (e.g. a Header, a Footer, and a ProfileCard component) and include them in App. Introduce **props**: have the ProfileCard component accept props like `name`, `image`, `bio` and render those. Students practice passing different prop values to multiple instances of the component. Highlight that props are how data flows into components. Demonstrate dynamic rendering: use an array of objects and JavaScript’s `array.map()` to generate a list of components (e.g. rendering a list of to-do items or contacts). This reinforces JSX’s ability to embed code (`{}` syntax) to loop and render lists. If time, introduce basic user interaction: an onClick event on a button that triggers a `console.log` or alert, showing how JSX ties into event handling. Throughout, emphasize React’s declarative nature (we describe UI via components and state, which we will cover next). *Optional discussion:* The difference between **library vs framework** (React is a library – focus on UI – which we can complement with other tools).

**Homework:** Build a simple **React mini-project**: a multi-component page such as a **“Team Members” gallery**. Create an array of at least 3 members (name, photo URL, role) and use React to display each member via a reusable component. Ensure you use props for each member’s data and `.map()` to render them. Style it minimally with CSS (you can use plain CSS or inline styles for now). Push the React project to GitHub. *Challenge:* Add an interactive element, e.g. a button on each member card that, when clicked, toggles showing more info about that member (hint: you’ll need state – which we formally cover next week, but you can attempt using `useState` with guidance from documentation).

**Tools Introduced:** React (via Create React App or Vite), JSX, ES6 features (modules, arrow functions, etc.), Node.js used for running the dev server. No new external libraries yet – focus on core React.

**Optional Activities:** Live-code as a group: pick a simple UI (like a user card or a navbar) and have students help break it into components on the whiteboard before coding. This helps develop component-thinking. Also consider showing the official React dev tools extension to inspect component structure in the browser.

---

## Week 3: State, Events & Tailwind CSS for Styling

**Topics & Objectives:**

* Introduce **state management** in React using the `useState` hook to create interactive, dynamic components.
* Handle user **events** (onClick, onChange, form submit) and update state in response.
* Integrate **Tailwind CSS** for rapid UI styling and discuss the utility-first CSS approach (styling directly with CSS classes in JSX).
* Build an interactive React component (e.g. a simple form or counter) and style it with Tailwind.

**Class 5:** *State and Event Handling in React* – Explain that components can have **state**: mutable data that React watches for changes to re-render the UI. Use the `useState` hook to add state to a component (e.g. a counter component with a "count" state). Live-code a simple **Counter**: a number displayed on screen with “+” and “–” buttons to increment/decrement using `setState`. Students see how clicking the button triggers the state update and React re-renders the new value. Emphasize the **unidirectional data flow**: state lives in a component and is passed down as props if needed. Cover controlled inputs: show an example of a form input whose value is tied to state (using onChange to update state, and value prop to reflect state). This could be a simple **“Live Preview”** text input that displays what the user types in real-time. Introduce the `useEffect` hook conceptually (if not using it fully yet) to explain how to handle side effects like data fetching – note that we will use it when connecting to our backend later. By the end of Class 5, students are comfortable creating and updating state and understand basic event handling in React.

**Class 6:** *Styling with Tailwind CSS* – Introduce **Tailwind CSS**, a utility-first CSS framework that provides pre-designed utility classes for rapid styling. Explain how Tailwind differs from traditional CSS or frameworks like Bootstrap: instead of prebuilt components, Tailwind offers low-level utility classes (e.g. `px-4`, `text-center`, `bg-blue-500`) that can be composed to style elements directly in JSX. Set up Tailwind in the React project (using `npm install tailwindcss` and configuring it, or using Create React App’s integration). Demonstrate styling a component using Tailwind classes: for example, take the Counter or form from Class 5 and beautify it with Tailwind (add spacing, colors, responsive layouts). Show the benefit of rapid prototyping with Tailwind – no need to write custom CSS for common styles. Also cover conditional classes: e.g. use state to conditionally apply a class (like highlighting a value red if negative). Have students practice by creating a small **UI component (like an Alert or Card)** and styling it with Tailwind classes. By doing so, they learn common Tailwind utilities (flex, padding, margins, text sizes, colors, etc.). Additionally, discuss maintaining readability with Tailwind (using config or extracting components if needed) but highlight how it speeds up development. *Optional in-class activity:* a quick design challenge – give students a reference image of a simple styled component and let them race to implement it in React with Tailwind classes.

**Homework:** Create a **“To-Do List” React app** that integrates state and Tailwind styling. The app should allow adding new to-do items (use an input field and a button to update an array of tasks in state). Display the list of tasks on the page (each with a checkbox or delete button). Use Tailwind to style the list (e.g. make it a nice card with a heading, use spacing utilities for list items, etc.). This homework combines state (managing the list), events (handling form submit and delete clicks), and UI skills. *Bonus:* Use `localStorage` to persist the tasks (requiring a useEffect to load/save tasks – optional challenge for eager students).

**Tools Introduced:** React Hooks (`useState`; mention `useEffect` conceptually), **Tailwind CSS** (with build configuration). Also introduce **Tailwind Documentation** as a tool for finding classes. Students continue using Git for version control on their React projects.

**Optional Activities:** Discuss UI/UX basics – since students are styling now, share a few tips on making interfaces clean (alignment, spacing, consistent colors). Possibly show how to use an icon library (like Heroicons with Tailwind) to add icons to buttons, which can make the app look more polished and keep motivation high as their apps start to look better.

---

## Week 4: React Router & Context API (State Management)

**Topics & Objectives:**

* Implement client-side routing in React using **React Router** to create a multi-page (multi-view) single-page application.
* Learn how to define routes and links for navigation, and how to pass URL parameters if needed.
* Introduce **Context API** for global state management in React, to share data across components without prop drilling.
* Apply Context in a simple scenario (e.g. user theme or simple authentication state) and use the `useContext` hook to consume it in nested components.
* Solidify React skills with a mid-course front-end mini-project integrating components, state, router, context, and styling.

**Class 7:** *Multi-Page Application with React Router* – Explain that so far we have built single-view apps; now we want multiple pages (e.g. Home, About, Dashboard) without a full page reload. Introduce **React Router** library to handle client-side routing. Walk through installation (`npm install react-router-dom`) and set up: use `<BrowserRouter>` in index.js, and define routes using `<Routes>` and `<Route>` components. In-class example: create a simple app with at least two pages, like a “Home” page and an “About” page, each as separate components. Demonstrate navigation with `<Link>` or `<NavLink>` components to switch pages. Emphasize that React Router keeps the user in a SPA while swapping content. Show how to use URL parameters (e.g. `/profile/:id`) to create dynamic pages – perhaps create a page that reads an ID from the URL and displays corresponding data (you can simulate data for now). By end of Class 7, students can add React Router to their projects to enable multiple views. They should grasp the idea of an SPA with multiple routes.

**Class 8:** *Global State with Context API* – Discuss scenarios where data needs to be accessible by many components (e.g. user login status, theme selection) and how passing props through intermediate components can become cumbersome (**prop drilling**). Introduce **React Context** as a built-in solution for state sharing. Explain that *“React Context provides a simple and efficient way to share state across components without manually passing props at every level”*. Demonstrate creating a Context: use `React.createContext()` and a Context Provider component. In-class example: implement a **ThemeContext** that holds a state for light/dark mode. Wrap the application (or relevant part) with `<ThemeProvider>` and show consuming the context in a deep child component with `useContext(ThemeContext)`. Toggle the theme via a button in some component, and show another component (at a different tree level) responding to the change. This illustrates shared state. Another example: create a simple **AuthContext** with a boolean “loggedIn” state and show how one component (login form) could update it and another (nav bar) could react by showing different links. Keep it simple due to time, focusing on the mechanics of Provider and Consumer (`useContext`). Have students incorporate Context into their ongoing React app (perhaps wrapping their whole app in a Context that stores something like a username or theme).

**Homework:** Consolidate front-end knowledge by creating a **Mini-Project: Personal Portfolio SPA**. This React project should have multiple pages (use React Router for navigation, e.g. “Home”, “Projects”, “Contact”). Include a global context – for example, a theme context to allow switching between light/dark mode across all pages, or a simple context to store contact form input globally (for a fun twist). Use Tailwind to style the site and make it responsive. The site can be about the student (biography, list of projects, etc.), giving them something to actually showcase. **Context usage example:** a toggle in the navbar to switch theme, with context providing the current theme class to all pages. This project is a checkpoint for front-end skills before moving to backend. *Submission:* GitHub repo link. (This could be graded as a mini-project.)

**Tools Introduced:** **React Router** (for routing), React Context API (no external library, but a new React pattern), continuing use of Tailwind CSS. Possibly introduce a **Browser DevTools** tip: how to inspect React Router routes or debug context by logging.

**Optional Activities:** Group discussion on how single-page apps compare to traditional multi-page sites (pros/cons like performance, SEO considerations). Perhaps show how to use the Network tab to observe that routing doesn’t reload the page. Also, you might do a code review session of one student’s portfolio (with their permission) to reinforce good React practices learned so far.

---

## Week 5: Back-End Foundations – Node.js and Express.js

**Topics & Objectives:**

* Transition to back-end development: understand what **Node.js** is and how it enables JavaScript to run server-side.
* Set up a basic **Express.js** server – a minimal web framework for Node that simplifies building APIs.
* Handle HTTP requests and responses in Express; create a few simple **RESTful API** endpoints (GET, POST, etc.) returning static or in-memory data.
* Learn how to structure an Express app (routes, middleware) and use tools like **nodemon** for auto-reloading.
* Understand the concept of REST APIs and JSON data format for client-server communication.

**Class 9:** *Intro to Node.js and Express* – Begin with Node.js concepts: Node.js is a JavaScript runtime built on Chrome’s V8 engine, allowing JS to run outside the browser on the server. Explain non-blocking I/O and why Node is great for scalable network applications (briefly, no need to deep dive). Next, introduce **Express.js**, describing it as a “fast, unopinionated minimalist web framework for Node.js” that makes it easier to create web servers and APIs. Initialize a new Node project (`npm init`) and install Express. Live-code a basic **Express server**: create an `index.js` that sets up an Express app listening on a port and responds with "Hello World" for a GET request on `/`. When students run this (`node index.js` or using **nodemon** for auto-restart), they can visit localhost in the browser to see the response. Then demonstrate returning JSON: e.g., define a route `/api/greet` that responds with `res.json({ message: "Hello from Express" })`. Emphasize the use of **JSON** as the format for data exchange between front-end and back-end. Cover basic routing methods (GET, POST) and how to parse JSON request bodies using `express.json()` middleware. By the end of Class 9, the class has a simple API running. Highlight that this is the “backend” that our React app can call.

**Class 10:** *Building RESTful APIs (Express continued)* – Expand the Express server into a simple REST API with a few endpoints. For example, create an in-memory array of objects (like `let books = [{id:1, title:"..."}]`). Implement CRUD routes for this resource:

* `GET /api/books` – return list of books (JSON).
* `GET /api/books/:id` – return a single book by ID (or a 404 message if not found).
* `POST /api/books` – add a new book to the array (demonstrate reading `req.body`; use Postman or similar to test sending JSON).
* `PUT /api/books/:id` – update a book (if exists) in the array.
* `DELETE /api/books/:id` – remove a book.

Walk through each route, discussing status codes (200 OK, 201 Created, 404 Not Found, 500 Server Error) and the importance of error handling. Show how to use a tool like **Postman** or VSCode REST plugin to test API endpoints. Students should follow along, coding these routes on their own machines. This hands-on practice solidifies how an Express API works. Point out the concept of **REST** – organizing URLs and HTTP methods to perform operations on resources. Also mention using **nodemon** (installed via npm) to automatically restart the server on code changes, improving developer experience. By end of Class 10, students have a functioning (albeit in-memory) REST API.

*Optional in-class activity:* Break students into small groups, each group writes one of the CRUD routes, then share the solutions and test as a class. This encourages collaboration and understanding of each route.

**Homework:** Create your own Express.js API for a resource of your choice (different from the class example). For instance, **“Tasks API”** or **“Movies API”** with similar CRUD endpoints. Define the data structure (e.g. a task has id, title, done; a movie has id, title, year, rating). Implement at least: GET all, GET by ID, POST, and DELETE routes. Test your API using Postman and document the endpoints in a README. *Stretch goal:* Implement error handling middleware in Express to handle not found (return a 404 JSON) or validate request data (e.g., return 400 if required fields are missing in POST). Commit and push the project to GitHub. This homework reinforces building APIs and prepares for adding a database.

**Tools Introduced:** Node.js (for scripting/server), **Express.js** web framework, Nodemon (dev utility), Postman or HTTP client for testing APIs. Also the concept of JSON as a tool for data exchange. Continue using Git/GitHub for project code.

**Optional Activities:** Discuss real-world REST APIs – e.g., talk about how a service like Twitter or Spotify exposes an API that follows REST principles. Perhaps show a public API (like a sample from JSONPlaceholder or GitHub API) and how it returns JSON, to connect what students are building to real-world services. This can get them excited that they are now creating similar APIs.

---

## Week 6: MongoDB & Mongoose – Database Integration

**Topics & Objectives:**

* Understand the role of a **database** in full-stack applications and why we use one instead of in-memory data.
* Learn about **MongoDB**, a popular NoSQL document-oriented database that stores data in JSON-like documents (BSON).
* Set up a cloud MongoDB database (using MongoDB Atlas) or local instance for development.
* Introduce **Mongoose** (Object Data Modeling library for Node) to define schemas and interact with MongoDB in an Express app.
* Refactor the Express API to use MongoDB: implement persistence by replacing the in-memory array with database CRUD operations.
* Practice designing a simple data model and running queries with Mongoose (create, read, update, delete documents).

**Class 11:** *Intro to Databases and MongoDB* – Start with fundamental concepts: what is a database and difference between **SQL vs NoSQL**. Highlight that MongoDB is a **document-oriented NoSQL database** that stores data in flexible JSON-like documents. (No fixed schema, each document can have varying fields, which offers flexibility). Set up **MongoDB Atlas** (free cloud cluster) – walk through creating an account, cluster, and obtaining a connection string (or use a local MongoDB server if preferred). Next, introduce **Mongoose** as a way to interact with MongoDB using JS objects. Show how to install Mongoose and connect to the database in the Express app (using the connection string, handling the async connection). Define a Mongoose **Schema** and **Model** for the resource used in Week 5 (e.g. Book or Task). For example, create a schema with fields and data types (title: String, author: String, etc.) and compile a model. Replace one of the API endpoints (say, GET all) to fetch data from the MongoDB collection via the model (`Model.find()` returns a Promise). Ensure everyone can successfully connect and read/write to the DB. Emphasize that now data will persist across server restarts. By end of Class 11, the API is partially backed by a real database, and students grasp how Express and MongoDB work together (**MERN** stack in action).

**Class 12:** *CRUD with MongoDB via Mongoose* – Continue integrating MongoDB for all routes. Implement the remaining CRUD operations with Mongoose:

* `POST` route uses `Model.create()` to save a new document.
* `GET by ID` uses `Model.findById(id)` to retrieve a document.
* `PUT` uses `Model.findByIdAndUpdate(id)` to update, and
* `DELETE` uses `Model.findByIdAndDelete(id)` to remove.
  Walk through each, noting the asynchronous nature (use async/await or `.then()` promises). Handle errors (e.g., invalid ID format, or item not found). Teach how Mongoose returns the updated document and how to handle if not found. Also mention input validation basics (ensuring required fields, using Mongoose schema validation or simple checks). Test each route again with Postman to confirm they interact with the database correctly. Optionally, demonstrate directly viewing the data in MongoDB Atlas’s UI or Compass to show the documents. At this point, students have a fully functional REST API with persistent storage 🎉. Discuss the significance: the backend can now **store data permanently**, a major step in full-stack development. *Optional:* if time allows, introduce the concept of relationships (referring one document to another) or mention that more complex schemas exist, but perhaps leave in-depth for later or final projects.

**Homework:** Extend the API by designing an additional model or adding a new feature:

* **Option A:** Add another related model (if our API was Books, add an Author model; if Tasks, perhaps a User model) and create at least one endpoint that uses a Mongo query involving both (or a subdocument array). For example, an endpoint to get all books by a certain author.
* **Option B:** Add basic **query** capabilities to an existing endpoint, e.g., allow filtering the GET results with a query string (like `/api/books?author=Alice` returns books by Alice).
* **Option C (simpler):** Implement server-side **pagination** on the GET all endpoint (limit & skip in Mongo queries) if there are many documents.
  Choose one option that interests you. Document how to use the new feature in the README. This homework encourages exploring Mongo/Mongoose beyond the exact class examples and solidifies understanding of database operations. Push updates to GitHub.

**Tools Introduced:** **MongoDB** (with MongoDB Atlas cloud service), **Mongoose** for ODM, MongoDB Compass (GUI) or Atlas web UI to inspect data. Also .env files for managing secrets (connection string) – likely introduced here, explaining not to hardcode credentials (but be careful not to commit actual credentials to GitHub!). This is a good point to talk about environment variables and using a library like `dotenv`.

**Optional Activities:** A short quiz or group discussion on database schema design: have students propose what fields to use for a given data scenario (like designing a "Product" document for an e-commerce site). Discuss trade-offs of NoSQL (flexibility, but fewer relational constraints) vs SQL. Also, consider showing how to use **CRUD operations in Mongo shell or Compass** for one example, to demystify what Mongoose is doing under the hood.

---

## Week 7: User Authentication & Security Basics

**Topics & Objectives:**

* Explain the need for **authentication** in web apps (managing users and secure access to data).
* Introduce the concept of **JSON Web Tokens (JWT)** for stateless authentication and **bcrypt** for password hashing.
* Implement a basic **User** model in MongoDB (with fields like email, password hash) and routes for **Register** and **Login**.
* Use **bcrypt** to hash passwords before saving, and to compare for login.
* Use **jsonwebtoken** library to create and verify JWTs. Protect certain API routes using a middleware that checks for a valid token.
* Discuss authentication vs authorization, and common security best practices (never store plaintext passwords, use HTTPS in production, etc.).

**Class 13:** *Authentication Concepts & Signup Route* – Begin with a high-level discussion: authentication (confirming user identity) vs authorization (permissions). Describe common methods: sessions/cookies vs token-based (JWT). We will use JWT for our API. Define **JWT (JSON Web Token)** as an open standard for transmitting signed information as JSON. Show a quick example of JWT structure (header.payload.signature) and how it can be used to prove identity without storing session on server. Next, introduce **bcrypt** as a library for hashing passwords. **Never store plaintext passwords!**. In code, set up a **User model** with Mongoose (fields: username/email, passwordHash, etc.). Implement a **Registration (Sign Up)** route: `POST /api/auth/register`. When a user registers, hash their password using bcrypt (e.g., `bcrypt.hash()` with a salt) and save the new user document. Perhaps also include a simple validation (e.g., check if email already in use). Once registered, you can either return a success message or immediately create a JWT for them. For now, maybe just return a message or the new user (excluding password hash). Test this with Postman by sending a sample JSON (email, password) and checking the saved user in DB. Emphasize the importance of hashing – even if the database is compromised, passwords aren’t in plain text. By end of Class 13, students have a register endpoint and understand how authentication data is stored.

**Class 14:** *Login & Protected Routes with JWT* – Implement the **Login** route: `POST /api/auth/login`. When a user attempts to log in, find the user by email, use `bcrypt.compare()` to check the provided password against the stored hash. If valid, create a **JWT** token signed with a secret key (using `jsonwebtoken.sign()` with user info and a secret from env). Return the token to the client. Explain the token contains claims (like user ID) and a signature to prevent tampering. Next, demonstrate protecting routes: create an **auth middleware** that checks for a JWT in the `Authorization` header of incoming requests. Use `jsonwebtoken.verify()` to validate the token. If valid, allow the request to proceed; if not, respond with 401 Unauthorized. Apply this middleware to certain routes, e.g., protect the book/task creation or deletion endpoints – only accessible if logged in. Test with Postman: try accessing a protected route without a token (get 401), then with a token (by adding header `Authorization: Bearer <token>`) and see success. This is a big step: our API now supports user authentication! Discuss storing JWT on client (we will handle that next week in the React app, likely storing in memory or localStorage). Also mention security best practices: use HTTPS in production so tokens aren’t intercepted, and set appropriate expiration on tokens (could mention but not necessarily implement token expiry for simplicity). *Optional:* If time, mention more advanced topics like refresh tokens or OAuth, but not required to implement. By end of Class 14, students have a basic auth system in their backend.

**Homework:** Enhance authentication and prepare for integration:

* Implement a **“My Profile” endpoint** (e.g., `GET /api/auth/me`) that, when given a valid JWT, returns the user's info (excluding sensitive data). Use the auth middleware for this. This reinforces using JWT to fetch data for the logged-in user.
* Refactor one of your previous routes to associate data with a user. For example, if you have a Task model, add a field `userId` to it and modify the POST route to attach the `req.user.id` (from the decoded JWT) to the task, so tasks are tied to a user. Then modify GET to filter tasks by the logged-in user. *(This simulates multi-user capability.)*
* Test these changes with multiple users to ensure user A cannot access user B’s data.
  Document any new endpoints in your README. This homework solidifies understanding of authentication in a practical way.

**Tools Introduced:** **bcrypt** (password hashing), **jsonwebtoken** (JWT creation/verification). Also Postman for testing auth flows (with headers). Environment variables (.env) usage becomes critical for secrets (JWT secret, DB URL); ensure students are using a `.env` file and not committing it. Possibly introduce **Passport.js** conceptually as another auth solution, but we stick to manual JWT for learning purposes.

**Optional Activities:** Discussion on common security pitfalls: e.g., the danger of JWT if stolen (need to protect tokens, perhaps store in httpOnly cookies vs localStorage – mention different strategies). Also could role-play an authentication sequence or draw a diagram of client-server auth interactions (client stores token, sends on requests, server verifies). This helps visual learners.

---

## Week 8: Connecting Frontend to Backend (Full-Stack Integration)

**Topics & Objectives:**

* Connect the React front-end with the Express/MongoDB back-end API to create a true full-stack application.
* Learn to make HTTP requests from React to the backend (using **fetch API** or **Axios**) to fetch or send data.
* Implement front-end features that consume API endpoints: display database data in React components, submit new data via forms to the backend, etc.
* Integrate **authentication on the front-end**: create a login form in React that obtains a JWT from the backend, store the token, and conditionally render UI based on auth state (using Context or state).
* Handle cross-origin requests by enabling **CORS** on the backend and understanding basics of same-origin policy.
* Deploy the combined app on a local dev setup (running React dev server and Express concurrently, or using proxy) to simulate production integration.

**Class 15:** *Fetching Data from the Backend (Read & Display)* – Before coding, configure the backend for cross-origin resource sharing (**CORS**): install and use the `cors` middleware in Express so that your React dev server (running on localhost:3000) can talk to API (on, say, localhost:5000) without issues. Next, in the React app, introduce making HTTP requests. If using the native **Fetch API**, demonstrate it with `useEffect`: e.g., fetch a list of items from the backend API endpoint when a component loads. Alternatively, install **Axios** for simplicity of requests. In-class example: in the React application, create a component (e.g. `BookList` or `TaskList`) that on mount fetches data from `GET /api/...` and displays the list of items from the database. Handle loading and error states (at least a basic "Loading..." text while waiting). Ensure to update state with the fetched data and map it into JSX. Students should see their frontend now showing real data that they perhaps added via Postman earlier. Next, implement a form in React to add a new item (e.g. a form to add a new book or task). On submit, send a `POST` request to the API and upon success, update the UI (perhaps by refetching the list or optimistically updating state). Emphasize the flow: client (React) -> HTTP request -> server (Express + DB) -> responds -> client updates state/UI. This class is a pivotal moment: merging front and back into a seamless experience. By the end of Class 15, each student’s React app can communicate with their Express API for at least read (and possibly create) operations.

**Class 16:** *Front-End Authentication & Protected Routes* – Now integrate the auth system on the frontend. First, create a **Login page** in React with a form for email and password. When the form is submitted, send a request to the backend login API (`POST /api/auth/login`) using fetch/Axios. On success (which returns a JWT), store the token on the client. Discuss options: simplest is storing in `localStorage` or a React Context state. For this course, using a Context (AuthContext) might be cleaner, or even just a state in a parent component if contexts feel heavy. Implement an **AuthContext** that holds the token and user info (maybe decoded token or fetched profile). Wrap the app with AuthProvider (similar to what was done in Week 4). After login, save token in context and set a flag that user is authenticated. Use this state to conditionally render things: e.g., if logged in, show a “Logout” button and protected components; if not, show the Login form or a redirect. Demonstrate protecting front-end routes: e.g., if a user is not logged in and tries to access the dashboard route, redirect them to login. Use React Router’s redirect or conditional rendering for this. Also, ensure that when making API calls to protected endpoints (like adding a book/task), the React app includes the JWT in the Authorization header (`fetch(url, { headers: { 'Authorization': 'Bearer <token>'} }`). Test the full flow: register a user via API or a simple Register form, log in via React, get token, fetch protected data (like “my tasks”) from API, display in UI. This end-to-end test is very satisfying for students – they have a basic full-stack app with authentication! Finally, implement Logout: basically remove the token (clear context/localStorage) and update UI accordingly.

**Homework:** Build out the front-end of your application to fully utilize the backend:

1. **Authentication UI:** Create a Register page in React (if not already) to allow new users to sign up from the front-end. This should call the `/register` API and perhaps auto-login or prompt login after.
2. **Full CRUD in UI:** If your app has a data list (tasks, books, etc.), add functionality in React to Update and Delete items as well. For example, a form to edit an item (that sends PUT) and a delete button (that sends DELETE). Ensure these actions only show for logged-in users if appropriate.
3. **Polish & Feedback:** Add error handling on the front-end – e.g., show an error message if login fails or if a fetch request returns an error. Also, add some form validation feedback for a better UX.
   By doing this homework, students essentially complete a **MERN stack application** with authentication.

**Tools Introduced:** **CORS** middleware (for backend), **Fetch API/Axios** for HTTP requests in React, Context (for auth state) applied in a real scenario, browser Local Storage (for token persistence, if used). Possibly JWT decode library if they want to parse token on client (not necessary though).

**Optional Activities:** Have students demo their app login flow to a partner – one student acts as a user and the other explains what's happening behind the scenes when they log in or create data. This peer teaching can reinforce their understanding. Additionally, a debugging workshop: intentionally break the API (shut server, or use wrong URL) and see how the front-end handles it – teach them to read console/network errors for troubleshooting.

---

## Week 9: Advanced Topics & Final Project Planning

**Topics & Objectives:**

* Cover any remaining advanced topics or useful tools (based on class interest or needs): e.g., more on **state management** (introduce Redux for perspective, or deeper use of Context), or additional React hooks (`useEffect` in detail for data fetching, `useRef` if needed).
* Discuss **deployment planning** and prepare students for deploying their app (which is coming in Week 10).
* Introduce project planning techniques for the capstone: writing user stories, drawing simple ERDs (entity relationship diagrams) or component trees, and making a project timeline.
* Ensure all students have a feasible idea for their final project and a plan to execute it in the remaining weeks.
* Optionally, introduce any additional technology that might benefit projects (for example, if someone wants to implement file uploads, or use a third-party API, give a brief overview of how to approach it).

**Class 17:** *State Management & React Hook Patterns* – Revisit front-end state management now that apps have grown. Discuss when **Context API** is sufficient vs when a library like **Redux** might be used in large apps (no requirement to implement Redux in this course, but good to mention it as a tool in industry). If any common issues were observed in student apps (like deeply nested state or prop drilling still happening), show how context or custom hooks can solve it. Dive a bit deeper into **useEffect** to ensure everyone understands how to properly fetch data or run side effects at component mount (dependency arrays, cleanup functions). If relevant, demonstrate a custom hook example (e.g., useDocumentTitle to change page title, or useAuth hook to encapsulate auth logic) to encourage code reuse. Keep this class flexible to address gaps or curiosities – possibly cover **React Context for Auth vs using Redux** debate, or mention alternatives like **React Query** for data fetching (just conceptually). The goal is to consolidate React knowledge and prepare students to be self-sufficient in building out their projects.

**Class 18:** *Final Project Kickoff & Design* – Shift focus to the **Final Capstone Project**. Provide guidelines for the project: it should be a full-stack application using the technologies learned (React front-end, Node/Express/MongoDB back-end, JWT auth). It could be an extension of something already built (e.g., expand the homework app) or a fresh idea. Encourage creativity but also scope it to something achievable in \~2 weeks. In class, have each student (or team, if grouping) **pitch their project idea** in 1-2 minutes: what the app will do, what features it will have. Provide immediate feedback on scope – identify any features too ambitious (e.g. “real-time chat” might be out of scope unless websockets taught) and suggest simplifications if needed. Once ideas are set, guide them in planning: write down the core user stories (e.g. “User can register and log in”, “User can create a blog post”, “User can comment on a post”, etc.). Then outline the data models they’ll need (collections and their fields) and the main pages/components on the front-end. Essentially, each student should come away with a rough **project plan**: what to build first, next, etc. Discuss how to break the project into manageable tasks (maybe suggest a week-by-week or day-by-day plan). Also remind them to consider deployment (which will be covered next week) – their project should be deployable for the final presentation. By end of Class 18, students are officially working on their capstone, with an initial repo set up and perhaps the basic app scaffold (React app + Express server) created.

**Homework:** Finalize the project plan and start implementation:

* **Project Planning Deliverable:** Write a short project proposal (one page) including: project title, description, list of features (MVP and nice-to-haves), tech stack (which libraries/services, any extras?), data models outline, and a timeline for the next two weeks (which features to complete by when). Submit this to the instructor for approval/feedback by the next class.
* **Initial Code:** Create the skeleton of your project: generate a new React app, initialize an Express server, and push both to GitHub (consider using a single repository with `/client` and `/server` folders, or separate repos). Get the basic “Hello World” for both front-end and back-end working as a starting point.
  This sets the stage for focused project work in coming weeks.

**Tools Introduced:** No major new tech this week, but possibly mention of **Redux** (conceptually) or other libraries by name if relevant to certain projects (e.g., if someone needs file upload, mention Multer; if someone wants to use third-party APIs like Google Maps, mention how to include script or use a React wrapper). Also project management tools: even a simple Trello board or GitHub Projects to track tasks could be suggested.

**Optional Activities:** If time, let students start coding in class for their projects (open lab style) while the instructor walks around providing help or validation of setups (ensuring their new repos run, etc.). This helps catch any setup issues early. Also, encourage peer feedback: have students pair up to talk through each other’s project plans and identify any potential challenges or suggest improvements.

---

## Week 10: Deployment (Vercel & Render) and Mid-Project Checkpoint

**Topics & Objectives:**

* Learn how to **deploy** both front-end and back-end of a MERN application to cloud services so that the app is live on the internet.
* Use **Vercel** to deploy the React front-end (Vercel is well-suited for React/SPA deployments and offers seamless GitHub integration).
* Use **Render** (or similar, e.g. Heroku) to deploy the Express/MongoDB back-end as a web service. Configure environment variables (like DB connection, JWT secret) on the hosting service.
* Set up the database in production (e.g., using MongoDB Atlas for a cloud Mongo database).
* Test the deployed application (ensure front-end calls the deployed API, fix any CORS or URL issues in production).
* Mid-week, have a checkpoint on project progress and address any issues in implementation.

**Class 19:** *Deploying the Front-End to Vercel* – Start by explaining why deployment is important: it allows others (and potential employers) to view and use your project. Outline the deployment targets:

* **Frontend** (React app) will go to **Vercel** (which is optimized for frontend frameworks, with automatic builds and continuous deployment from Git).
* **Backend** (Node/Express) will go to **Render** as a web service with Node environment.
* **Database** will use **MongoDB Atlas** (cloud DB) since it’s already set up; just ensure the connection string is configured on Render.

Walk through **Vercel deployment**: create a Vercel account (if not already), connect to GitHub. On Vercel, “Import Project” from GitHub – select the React app repo or the client folder if monorepo, and deploy. Emphasize that Vercel provides continuous deployment: every push to main branch can auto-deploy. Once deployed, demonstrate accessing the live URL. If any environment-specific config is needed (like setting `homepage` in package.json or handling client-side routing on Vercel), address that. Next, deployment of **backend to Render**: create a Render account, choose “New Web Service”, link the GitHub repo for the backend. Configure the start command (`npm start` or whatever), and set environment variables in Render’s dashboard (e.g., `MONGODB_URI`, `JWT_SECRET`, maybe `CLIENT_ORIGIN` if using CORS restrictions). Deploy and get a live API URL. Ensure CORS on backend is configured to allow the Vercel domain. After both are live, update the React app’s API base URLs to point to Render’s URL (if not using relative paths or proxy). Test the live site: open the Vercel URL, try registering a user, logging in, and performing data actions – it should communicate with the Render-hosted API and Atlas DB. Debug any issues (common ones: forgetting to add env vars on Render, CORS mistakes, or hardcoded localhost URLs). By the end of Class 19, at least one example project (perhaps instructor’s or a volunteer student’s) is deployed front and back. Encourage students that their hard work is now real-world accessible!

**Class 20:** *Project Work – Build & Troubleshoot* – Use this session primarily as a **workshop/lab** for students to progress on their projects. Instructor and TAs (if any) move around to help with any roadblocks. Ensure everyone has attempted deployment – ideally, each student deploys their app by end of this week, even if not feature-complete, to catch any deployment-specific issues early. Some students may still be finishing up features; assist with tricky parts (common needs might include: sorting data, filtering, handling form validation, etc.). Mid-way through class, conduct a **round-table status update**: each student gives a brief update – “Here’s what’s working, here’s what I’m stuck on, here’s what I plan next.” This can surface common issues to address as a group. Reiterate the timeline: after this week, only two weeks remain, mostly for project completion and polish. Advise students to focus on core functionality first (MVP), then add nice-to-have features if time. Also, discuss presentation expectations for the final class: likely each student will do a short demo of their project, so they should plan to have a polished, deployable app and possibly slides or talking points.

**Homework:** Continue building the final project:

* Aim to have all core **MVP features completed by end of Week 10**. This includes basic CRUD, auth, and any primary user story.
* Ensure the app is deployed and update the deployment with the latest code as you progress. Test the live version thoroughly (sometimes bugs appear in production that didn't locally).
* Gather some feedback – ask a friend or classmate to try using your deployed app and note any issues or UX improvements.
  Next week will be for additional features, testing, and polishing, so getting the basics done now is crucial.

**Tools Introduced:** **Vercel** (for React deployment), **Render** (for Node deployment) – both with Git integration (auto deploy on commit). Also **MongoDB Atlas** in production (likely same cluster as dev, but ensure using a separate database or proper string). If time, mention alternative deployment options (Netlify for front, Heroku for back) just for their awareness, but focus on Vercel/Render as chosen stack.

**Optional Activities:** If some students finish early, have them do a “deployment help desk” for others – students who got it working can assist peers. This not only helps classmates but reinforces their own knowledge by teaching. Additionally, show how to monitor the deployed services (Vercel’s dashboard, Render’s logs) so they know how to debug live issues.

---

## Week 11: Final Project Development & Polishing

**Topics & Objectives:**

* Full focus on completing the capstone projects: implementing remaining features, optimizing, and testing.
* Conduct code reviews or testing sessions to catch bugs and ensure quality.
* Provide time for UI/UX improvements: encourage using Tailwind to make the app look professional, add responsiveness if not yet done.
* Introduce any final touches like **analytics** or **SEO** considerations for deployed app (if relevant, e.g., using a `<Helmet>` for React to change document titles, etc., purely optional).
* Prepare students for presenting their projects: tips on presenting, emphasizing problem solved, tech used, and a demo flow.

**Class 21:** *Open Lab – Build Features & Testing* – This class is largely an open lab for project work. Instructors should check in with each project: ensure any major feature left is on track. Encourage students to test all user flows: sign up -> log in -> create data -> edit -> delete -> log out, etc., to find bugs. Common things to check: form validations (do they handle empty fields gracefully?), error messages from backend (are they shown to user?), security (can a user do something they shouldn’t if they manipulate the frontend?). Have students do **peer testing**: swap projects and use each other’s apps as end-users, reporting any issues or confusing UI. During the class, hold mini code reviews: look at one student’s code (on projector if they’re willing) and highlight good patterns or suggest improvements (this can be anonymized if sensitive). This reinforces best practices for all, e.g., “notice how this student used context to avoid passing props down three levels” or “maybe refactor this component for clarity.” Keep the atmosphere supportive and positive. If some students are done with core features, suggest small enhancements: perhaps adding loading spinners during async ops, or an extra minor feature that adds polish. Remind everyone to commit and deploy their latest code frequently (don’t wait to deploy at the last minute). Also, start thinking about presentations: ask each student to prepare a 5-minute demo highlighting what their app does and one challenge they overcame.

**Class 22:** *UI Polishing & Performance* – Emphasize making the app *presentable*. This means focusing on UI/UX now that functionality is mostly done. Provide a checklist: consistent styling across pages, use of Tailwind classes to quickly make things look neat, ensuring mobile responsiveness (open each app on a narrow screen and fix any glaring layout issues using Tailwind responsive utilities). Introduce any quick performance tips: for instance, ensure they are not calling the API more times than necessary, using `useEffect` dependencies correctly to avoid infinite loops. If any app has a lot of data, maybe show how to paginate or limit results for performance. Another aspect: ensure accessibility basics (proper alt text on images, focus management, etc.) – just mention so they’re aware. Also, help students write a good **README** for their project on GitHub: including description, features, screenshots, and a live link. A good README is part of presentation and can be shown to employers. By end of Class 22, projects should be essentially complete and polished. The remainder of time can be used as final practice for demos. Optionally, run a **mock presentation**: randomly pick a student to present their project to the class as practice. Provide constructive feedback on both the app and presentation style (e.g., “speak a bit louder”, “explain the problem your app solves first”, etc.). This prepares them for the final week presentations.

**Homework:** Finalize everything for the project:

* Do a full **test pass** on your deployed app: use all features as a user would and fix any remaining bugs.
* Write speaker notes or outline for your project presentation: include an introduction (what the app is and why you built it), a tech stack mention, a demo of key features, and a conclusion (lessons learned or future work).
* Ensure your GitHub repo is public and well-documented (since you may share this with others). Push any final commits.
* Get a good night’s rest (where possible) so you’re ready and confident for the final presentation day!

**Tools Introduced:** No new tools – this is about refining existing ones. Possibly mention **Lighthouse** or browser dev tools for performance and accessibility audits (for those interested). Students continue to use Vercel/Render for continuous deployment of any changes.

**Optional Activities:** If there are common interest topics not covered due to time (e.g., “How would we add payments?” or “What about using TypeScript?”), have a short Q\&A or mini-lecture to satisfy curiosity. This can inspire them for post-course learning. Also, encourage students to share LinkedIn or Twitter to keep in touch and support each other as they job search or continue learning – building a community beyond the class.

---

## Week 12: Capstone Project Presentations & Wrap-Up

**Topics & Objectives:**

* Showcase the completed full-stack projects. Each student will present their project, demonstrating the features and discussing the technologies used.
* Evaluate student learning through the final project – this serves as an assessment of the skills acquired (HTML/CSS/JS, React, Node, Express, Mongo, Auth, etc.).
* Reflect on the journey: recap key learnings from each week, and discuss next steps for students (additional resources, learning pathways, job search guidance if applicable).
* Celebrate the accomplishment – finishing a full-stack project and a 12-week intensive course!

**Class 23:** *Final Project Presentations (Part 1)* – Depending on class size, split presentations across Class 23 and 24. Each student (or team) presents their project. **Presentation format** (adjust as needed): \~5-7 minutes per project:

* Introduce the app (the problem it solves or motivation).
* Live demo: show main features (create an account, use the app’s primary functions, etc.).
* Discuss the tech stack: “This is a MERN application – React front-end with Tailwind for styling, Node/Express backend with MongoDB database. Deployed on Vercel/Render.”
* Mention a challenge overcome or a key learning (e.g., “implementing JWT auth was tricky, but now I understand token-based auth well”).
* Conclude with future improvements they’d like to add if they had more time.
  After each presentation, allow a couple of questions from the audience or instructor. This simulates a real project showcase or even a job interview scenario of explaining a project. Ensure a supportive atmosphere: applaud each presenter and encourage everyone. The instructor should note each project’s completeness and perhaps use a simple rubric to grade (if applicable). By end of Class 23, about half the projects should be presented. If any student was not ready, hopefully by Class 24 they will be.

**Class 24:** *Final Project Presentations (Part 2) and Course Wrap-Up* – Continue with the remaining project presentations. Once all are done, lead a round of applause and perhaps a fun reward (certificates, etc., if available). Now wrap up the course with a reflection discussion:

* **Recap the journey:** Go through a quick summary: “In 12 weeks, we went from simple HTML pages to deploying full-stack apps with authentication – that’s huge progress!” Emphasize how each piece came together (HTML/CSS -> React -> Node/Express -> MongoDB -> integration -> deployment).
* **Highlight key skills:** Students are now comfortable with React (components, state, router, context), can build RESTful APIs with Node/Express, design and use MongoDB databases, implement authentication, and deploy apps. These are real-world developer skills.
* **Next steps:** Provide guidance on what to learn next: perhaps suggest exploring **Redux** or **TypeScript** for front-end, deeper Node topics (like websockets with Socket.io, or microservices), or learning another database (SQL) to broaden their skillset. Recommend resources (online docs, communities, advanced courses).
* **Job/Portfolio tips:** Encourage them to polish their projects and add them to their portfolio, GitHub, or personal website. This project can be a talking point in interviews. If time, share a bit about resumes or LinkedIn – e.g., list this course and project, emphasize the MERN stack skills.
* Finally, thank the students for their hard work and encourage them to continue coding and learning. Perhaps do a fun course retrospective: each student says one thing they loved or learned. Optionally, a final group photo (if in person) or group screenshot (if remote) to celebrate.

**Homework:** **(None)** – Course complete! Students should enjoy a brief rest, then continue the lifelong learning journey. They can optionally continue improving their project or start a new one to apply skills.

**Tools Introduced:** No new tools – this session is about presentation and reflection. Possibly introduce the idea of continuous learning platforms or communities (Stack Overflow, open-source, hackathons) as “tools” to keep growing as a developer.

**Optional Activities:** If time permits after presentations, a fun quiz or game reviewing key concepts from the course can lighten the mood (e.g., Jeopardy style quiz with categories: React, Node, Mongo, etc.). This can reinforce knowledge one last time. Additionally, exchange contact info or set up a class alumni chat group to keep in touch. Conclude on an inspirational note, reminding them of how far they’ve come and that they are now full-stack developers who built and deployed a complete web application 👏.

---

**Sources:**

* MERN stack course roadmap, highlighting progression from HTML/CSS/JS basics to a full-stack project in final weeks.
* Official React documentation – “React is a JavaScript library for building user interfaces”.
* GeeksforGeeks on Tailwind CSS – Tailwind is a *utility-first CSS framework* that lets developers style interfaces with pre-designed classes.
* GeeksforGeeks on React Context – Context API provides a simple way to share state across components without prop drilling.
* DigitalOcean on Node.js – *Node.js is a JavaScript runtime built on Chrome’s V8 engine*, enabling fast, scalable backend applications.
* Express.js official site – Express is a **minimal and flexible Node.js web application framework** with a robust feature set for building APIs.
* GeeksforGeeks on MongoDB – MongoDB is a popular NoSQL **document-oriented database** storing data in JSON-like format (BSON) for flexibility and scalability.
* Auth0 docs on JSON Web Tokens – *JWT is an open standard (RFC7519) for a compact, self-contained way of securely transmitting information between parties as a JSON object*.
* Vercel/Render deployment references – modern hosting services like **Vercel (for front-end)** and **Render (for back-end)** enable quick deployment of MERN applications, with support for custom domains and continuous deployment.
