# placement-app
Student Record System for Placement
# Overview
A company constantly needs to download their data to compile different reports. You need to create an interface for the employees of this company to fill in the data into the database and then download it in CSV format
# Functionalties
-	Sign Up and Sign In only for employees
-	List of students + add new student 
-	List of Interviews + form to create an interview with date
-	Allocate a student to an interview
-	Select an interview to view the list of all students and mark a result status from the list page itself
- Export student record 
# Languages & Tools Used for development
- Nodejs
- Express
- Mongoose
- MongoDB
- Javascript
- EJS
- CSS
- SCSS
- MongoDB Compass
- Visual Studio Code
# Tools used for hosting
- MongoDB Atlas
- AWS
- Putty
# Live project Link
http://appplacement.com
 # You can create a new employee login or use below:
 email: ram@gmail.com
 password : 123
# Steps to set project locally[Windows]
- Go to terminal. Run git clone https://github.com/anandkumarmca6/placement-app.git
-  Go to root  folder inside using terminal.
- Do npm install to intsall packages
- Change mongodb url in config/mongoose.js to mongodb://localhost/placement in mongoose.connect() method.
- In index.js, change mongodb url to mongodb://localhost in MongoStore.store() method.
- Change port in .env to 8000
- Change below module export code of environment.js 
module.exports = eval(
  process.env.ENVIRONMENT == undefined
    ? development
    : eval(process.env.ENVIRONMENT)
);
with 
module.exports = development
- Do npm start to start local server
Your project is set up and running!. You can check with url localhost:8000
