# ODU CS 418/518 - Web Programming, Spring 2025
* [Syllabus](syllabus.pdf)
* [Course Materials on Canvas](https://canvas.odu.edu/courses/177547)

# Student Advisory Portal

This project is a **Student Advisory Portal** designed to facilitate student-advisor interactions. It is built with **React.js for the frontend** and **Node.js with Express.js for the backend**. The backend communicates with a **MongoDB database** to store user and advisory data.

---

## **🚀 How to Set Up and Run the Project**

### ** Clone the Repository**
To start working on this project, clone the GitHub repository using the following command:
```sh
git clone https://github.com/VaishnaviLashkar/cs418518-s25.git
```sh
### ** Navigate into the Project Directory**
Once the repository is cloned, move into the project folder using:
```sh
cd cs418518-s25

### ** Checkout to the Backend Branch**  
Switch to the backend branch where the backend code is maintained:  
```sh
git checkout backend

### **Create a `.env` File**  
The `.env` file contains all necessary environment variables for the backend.  
Create a new file named **`.env`** in the backend directory and add the required credentials in the following format:

```ini
MONGO_URI=your_mongodb_connection_string
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
EMAIL_SECURE=your_email_security_setting
EMAIL_USER=your_email_username
EMAIL_PASS=your_email_password
PORT=your_backend_port

JWT_SECRET=your_jwt_secret_key


### **Install Backend Dependencies**  
To install all required packages, navigate to the backend folder and run:  
```sh
npm install

```

### **Run the Backend**  
Start the backend server with the following command:  
```sh
npm run dev
```
This will run the backend on **port 3001**.
```


## **Frontend Setup**

### ** Checkout to the Frontend Branch**  
Switch to the frontend branch where the frontend code is maintained:  
```sh
git checkout frontend
```

### ** Install Frontend Dependencies**  
Move into the frontend directory and install the required packages:  
```sh
npm install
```

### ** Run the Frontend**  
Start the frontend development server with:  
```sh
npm  run start
```
This will run the frontend on **port 3000**.

### ** Optional: Build the Frontend**  
If you need to create a production build, use:  
```sh
npm run build
```
```
