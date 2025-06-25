# CS390 Homework Submission System

## Quick Submission Guide

### Every Assignment Must Include:
1. **Working GitHub Repository** with clear commit history
2. **README.md** with setup and run instructions  
3. **Live Demo Link** (when applicable)
4. **Reflection Questions** answered in submission form

---

## Submission Templates

### Standard Homework Submission Template

```markdown
# [Week X] - [Assignment Name]
**Student Name**: [Your Name]
**Date Submitted**: [Date]
**Assignment**: [Brief Description]

## 🔗 Links
- **GitHub Repository**: [repository-url]
- **Live Demo**: [demo-url] (if applicable)
- **Video Demo**: [video-url] (if created)

## ✅ Requirements Checklist
- [ ] Core requirement 1
- [ ] Core requirement 2
- [ ] Core requirement 3
- [ ] Bonus feature (if attempted)

## 🚀 How to Run Locally
1. Clone the repository: `git clone [repo-url]`
2. Navigate to project: `cd [project-name]`
3. Install dependencies: `npm install`
4. Start development server: `npm start`
5. Open browser to: `http://localhost:3000`

## 🔧 Technologies Used
- React.js
- Tailwind CSS
- Node.js
- [Other technologies]

## 🎯 Learning Objectives Met
- [Objective 1]: How you achieved it
- [Objective 2]: What you learned
- [Objective 3]: Challenges overcome

## 🤔 Reflection Questions
1. **What was the most challenging part of this assignment?**
   [Your answer]

2. **What new concept did you learn that you're most excited about?**
   [Your answer]

3. **How would you improve this project if you had more time?**
   [Your answer]

4. **Rate your confidence with this week's topics (1-10): [X]/10**
   Explanation: [Why this rating]

## 📸 Screenshots
[Include 2-3 screenshots of your working application]

## 🐛 Known Issues
- [Any bugs or limitations]
- [Future improvements planned]
```

---

## Weekly Submission Requirements

### Week 1: Environment Setup & "About Me" Page
**Due**: Sunday Week 1, 11:59 PM

**Submission Checklist**:
- [ ] Node.js installed (include `node --version` screenshot)
- [ ] VS Code installed with recommended extensions
- [ ] GitHub account created with profile picture
- [ ] "About Me" HTML page with semantic structure
- [ ] CSS styling with responsive design
- [ ] Reflection paragraph about prior experience
- [ ] Repository has descriptive README.md
- [ ] Clean commit history with meaningful messages

**Reflection Questions**:
1. What was your experience level with HTML/CSS/JS before this course?
2. What part of the setup process was most challenging?
3. What are you most excited to learn in this course?

---

### Week 2: Team Members Gallery (React)
**Due**: Sunday Week 2, 11:59 PM

**Submission Checklist**:
- [ ] React app initialized with Vite or Create React App
- [ ] Reusable TeamMember component created
- [ ] Array of 3+ team members with props (name, role, image, bio)
- [ ] Use of `.map()` to render components
- [ ] Basic CSS styling applied
- [ ] Clean component structure and naming
- [ ] **Bonus**: Interactive features with useState (+20 pts)

**Code Quality Requirements**:
- Proper React component naming (PascalCase)
- Meaningful prop names and structure
- Clean JSX formatting
- No console errors in browser

---

### Week 3: Interactive To-Do List
**Due**: Sunday Week 3, 11:59 PM

**Submission Checklist**:
- [ ] Add new tasks functionality
- [ ] Delete tasks functionality
- [ ] Task completion toggle (checkbox)
- [ ] Tailwind CSS styling throughout
- [ ] Form validation and user feedback
- [ ] Responsive design (works on mobile)
- [ ] Clean state management with useState
- [ ] **Bonus**: localStorage persistence (+20 pts)

**Demo Requirements**:
- Show adding multiple tasks
- Demonstrate delete functionality
- Show responsive behavior on narrow screen

---

### Week 4: Personal Portfolio SPA (Mini-Project)
**Due**: Sunday Week 4, 11:59 PM

**⭐ This is a Mini-Project - Higher Standards Apply**

**Submission Checklist**:
- [ ] Multi-page React Router setup (Home, Projects, Contact, About)
- [ ] Navigation component with active link styling
- [ ] Global Context implementation (theme, user preferences, etc.)
- [ ] Context consumed in multiple components
- [ ] Professional Tailwind CSS styling
- [ ] Responsive design across all pages
- [ ] Contact form with state management
- [ ] Professional content suitable for job applications
- [ ] Deployed to Vercel/Netlify (bonus)

**Portfolio Standards**:
- Professional headshot/avatar
- Well-written bio and descriptions
- Consistent design language
- Error-free content and spelling
- Fast loading times

---

### Week 5: Express REST API
**Due**: Sunday Week 5, 11:59 PM

**Submission Checklist**:
- [ ] Express server setup with proper structure
- [ ] Complete CRUD endpoints (GET, POST, PUT, DELETE)
- [ ] Proper HTTP status codes implementation
- [ ] Error handling middleware
- [ ] Input validation on routes
- [ ] Postman collection documentation
- [ ] Environment variables setup
- [ ] Clear API documentation in README

**API Requirements**:
- Choose your own resource (books, movies, recipes, etc.)
- All endpoints properly tested
- JSON responses only
- Consistent error message format

**Postman Collection Must Include**:
- Examples for all CRUD operations
- Error case examples (404, 400, etc.)
- Proper request headers and body formats

---

### Week 6: MongoDB Integration
**Due**: Sunday Week 6, 11:59 PM

**Submission Checklist**:
- [ ] MongoDB Atlas connection configured
- [ ] Mongoose schema definition with validation
- [ ] All CRUD operations using database
- [ ] Environment variables for database connection
- [ ] Error handling for database operations
- [ ] Data validation and sanitization
- [ ] Choose one extension option:
  - [ ] Additional related model with relationships
  - [ ] Query parameters for filtering
  - [ ] Pagination implementation

**Database Design Requirements**:
- Logical schema design
- Appropriate data types
- Required field validation
- Useful indexes (if applicable)

---

### Week 7: Authentication System
**Due**: Sunday Week 7, 11:59 PM

**Submission Checklist**:
- [ ] User model with email and password fields
- [ ] Registration endpoint with password hashing
- [ ] Login endpoint with JWT creation
- [ ] Password hashing using bcrypt
- [ ] JWT middleware for protected routes
- [ ] "My Profile" endpoint implementation
- [ ] User-specific data association
- [ ] Security best practices followed
- [ ] Error handling for auth failures

**Security Requirements**:
- Never store plaintext passwords
- Proper JWT secret management
- Secure HTTP status codes
- Input validation and sanitization
- Rate limiting consideration (bonus)

---

### Week 8: Full-Stack Integration (Mini-Project)
**Due**: Sunday Week 8, 11:59 PM

**⭐ This is a Mini-Project - Higher Standards Apply**

**Submission Checklist**:
- [ ] React frontend consuming backend API
- [ ] CORS properly configured
- [ ] Login/Register forms with validation
- [ ] Authentication state management (Context)
- [ ] Protected routes on frontend
- [ ] Full CRUD operations from UI
- [ ] Loading states and error handling
- [ ] User feedback for all actions
- [ ] Professional UI/UX design
- [ ] Deployed full-stack application (bonus)

**Integration Testing**:
- User registration flow
- Login/logout functionality
- CRUD operations while authenticated
- Error scenarios (network failures, invalid inputs)
- Responsive design testing

---

### Week 9: Project Proposal & Advanced Patterns
**Due**: Sunday Week 9, 11:59 PM

**Submission Requirements**:

**Part A: Project Proposal Document**
- [ ] Project title and description
- [ ] Problem statement and target users
- [ ] Feature list (MVP and nice-to-haves)
- [ ] Technology stack justification
- [ ] Database design (ERD or schema outline)
- [ ] API endpoint planning
- [ ] UI wireframes or mockups
- [ ] Development timeline (week by week)
- [ ] Risk assessment and mitigation

**Part B: Advanced Patterns Implementation**
- [ ] Custom React hooks implementation
- [ ] Advanced Context patterns
- [ ] Performance optimization techniques
- [ ] Code organization and structure
- [ ] Initial project scaffold running

---

### Week 10: Deployment & MVP Features (Mini-Project)
**Due**: Sunday Week 10, 11:59 PM

**⭐ This is a Mini-Project - Higher Standards Apply**

**Submission Checklist**:
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Render
- [ ] MongoDB Atlas properly configured
- [ ] Environment variables set in production
- [ ] Live application fully functional
- [ ] Core MVP features implemented
- [ ] Production testing completed
- [ ] Performance optimization applied
- [ ] Error monitoring setup (basic)

**Deployment Requirements**:
- Custom domain setup (bonus)
- HTTPS enabled
- Environment-specific configurations
- Database seeding for demo data
- Deployment documentation in README

---

### Week 11: Project Completion & Polish
**Due**: Sunday Week 11, 11:59 PM

**Submission Checklist**:
- [ ] All planned features implemented
- [ ] Comprehensive user testing completed
- [ ] Bug fixes and error handling
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Mobile responsiveness verified
- [ ] Code refactoring and cleanup
- [ ] Comprehensive documentation
- [ ] Presentation materials prepared

**Quality Assurance**:
- Cross-browser testing
- Mobile device testing
- Performance audit (Lighthouse)
- Accessibility audit
- Security review

---

## Submission Methods

### Primary Submission (Required)
**Platform**: Course LMS (Canvas/Blackboard)
**Format**: Link submission with reflection form

### Backup Submission (Recommended)
**Platform**: Course Discord #submissions channel
**Format**: Message with links and quick summary

---

## Late Submission Policy

### Acceptable Circumstances
- Medical emergencies (documentation required)
- Family emergencies (communication required)
- Technical failures (GitHub/deployment issues)
- Internet outages (ISP confirmation helpful)

### Process for Late Submission
1. **Communicate Early**: Contact instructor ASAP
2. **Provide Context**: Brief explanation of circumstances
3. **Submit When Possible**: Even partial work is better than nothing
4. **Request Extension**: If needed, ask for specific timeline

### Grade Reduction Schedule
- **0-24 hours late**: -10% (still opportunity for strong grade)
- **24-48 hours late**: -25% (moderate impact)
- **48-72 hours late**: -50% (significant impact)
- **Beyond 72 hours**: 0 points (but required for course completion)

---

## Common Submission Mistakes to Avoid

### GitHub Repository Issues
❌ **Don't**:
- Submit empty or incomplete repositories
- Have unclear or missing README files
- Include passwords or API keys in code
- Submit without testing the setup instructions

✅ **Do**:
- Test your setup instructions on a fresh clone
- Include comprehensive README with screenshots
- Use environment variables for sensitive data
- Maintain clean commit history with meaningful messages

### Code Quality Issues
❌ **Don't**:
- Submit code with console errors
- Have commented-out debug code everywhere
- Use unclear variable and function names
- Submit without proper indentation/formatting

✅ **Do**:
- Test thoroughly before submission
- Clean up debugging code and comments
- Use meaningful, descriptive names
- Format code consistently (use Prettier)

### Documentation Issues
❌ **Don't**:
- Submit with minimal or missing documentation
- Forget to answer reflection questions
- Skip the requirements checklist
- Omit setup and run instructions

✅ **Do**:
- Follow submission template exactly
- Answer all reflection questions thoughtfully
- Check off all completed requirements
- Include clear, step-by-step instructions

---

## Grading Rubrics

### Technical Implementation (40%)
- **Excellent (90-100%)**: All requirements met with clean, efficient code
- **Good (80-89%)**: Most requirements met with minor issues
- **Satisfactory (70-79%)**: Core requirements met with some problems
- **Needs Improvement (60-69%)**: Basic functionality with significant issues
- **Unsatisfactory (0-59%)**: Missing major requirements or non-functional

### Code Quality (20%)
- **Excellent**: Clean, well-organized, properly commented code
- **Good**: Generally clean with minor style inconsistencies
- **Satisfactory**: Functional code with some organization issues
- **Needs Improvement**: Working but poorly organized/documented
- **Unsatisfactory**: Difficult to read or understand

### Documentation (20%)
- **Excellent**: Comprehensive docs, clear setup instructions, thorough README
- **Good**: Good documentation with minor gaps
- **Satisfactory**: Basic documentation covering essentials
- **Needs Improvement**: Minimal documentation, unclear instructions
- **Unsatisfactory**: Missing or inadequate documentation

### Learning Reflection (20%)
- **Excellent**: Thoughtful reflection showing deep understanding
- **Good**: Good reflection with clear learning demonstrated
- **Satisfactory**: Basic reflection showing some understanding
- **Needs Improvement**: Minimal reflection with limited insight
- **Unsatisfactory**: Missing or inadequate reflection

---

## Extra Credit Submission Guidelines

### Open Source Contributions
**Required Documentation**:
- Link to pull request(s)
- Description of contribution
- Screenshots of accepted changes
- 500-word reflection on experience
- Connection to course concepts

### Technical Blog Posts
**Requirements**:
- 800+ words per post
- Code examples and explanations
- Published on approved platform
- Share links with class
- Tag with course hashtag

### Advanced Features
**Documentation Needed**:
- Technical explanation of implementation
- Code walkthrough with comments
- Demo video showing feature
- Discussion of challenges and solutions
- Performance impact analysis

---

## Getting Help with Submissions

### Before Submitting
1. **Review Checklist**: Go through requirements one by one
2. **Test Everything**: Fresh clone, clean install, full testing
3. **Proofread**: README, comments, reflection answers
4. **Check Links**: Ensure all URLs work and point to correct resources

### If You're Stuck
1. **Discord Help Channel**: Quick questions and peer assistance
2. **Office Hours**: Detailed troubleshooting and guidance
3. **Email Instructor**: For private concerns or complex issues
4. **Study Groups**: Peer collaboration and mutual support

### Technical Issues
1. **GitHub Problems**: Check repository settings and permissions
2. **Deployment Issues**: Verify environment variables and build logs
3. **Code Errors**: Use browser dev tools and console debugging
4. **Dependency Issues**: Clear node_modules and reinstall

---

*Remember: The goal is learning, not perfection. Submit your best effort and use feedback to improve. Every submission is a step forward in your development journey!* 