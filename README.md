Simple Authentication Project
This project is a basic authentication system built using Node.js, Express.js, and MongoDB. It allows users to register, log in, and manage their tasks.

Features
User Registration: Users can register with an email and password.
User Login: Authenticated users can log in, creating a session with cookies.
User Logout: Users can log out, ending their session.
User Profile Management: Users can update their profile details.
Task Management: Authenticated users can create, update, delete, and view all their tasks.
Technologies Used
Node.js
Express.js
MongoDB
Mongoose (for MongoDB object modeling)
JWT (for authentication)
Cookies (for session management)
Setup and Installation
Clone the repository:
git clone https://github.com/yourusername/simple-auth-project.git
Navigate to the project directory:
cd simple-auth-project
Install dependencies:
npm install
Set up your environment variables in a .env file:
plaintext
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Run the project:
npm start
API Endpoints
POST /register - Register a new user.
POST /login - Log in a user.
POST /logout - Log out the current user.
PUT /user - Update user details.
GET /tasks - Get all tasks for the authenticated user.
POST /tasks - Create a new task.
PUT /tasks/
- Update a task by ID.
DELETE /tasks/
- Delete a task by ID.
