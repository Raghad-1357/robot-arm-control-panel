# 🤖 Robot Arm Control Panel - PHP & MySQL Project

This is a web application built with PHP and MySQL to control a robot arm by saving and loading different motor positions. The project was completed as part of a training task for Smart Methods.

## 🚀 Features
- Interactive sliders to control each of the 6 motors (0-180° range)
- Save current motor positions as named "poses"
- Load saved poses to recall motor positions
- Delete unwanted poses
- Run current pose to send commands to the robot arm
- Reset all motors to default 90° position
- Dynamic table displaying all saved poses

## 🛠 Technologies Used
- PHP (Backend Logic)
- MySQL (Database)
- HTML/CSS (Frontend Structure)
- JavaScript (Interactive Controls)
- XAMPP (Apache + MySQL Server)

## 📁 File Structure
robot-arm-control/
├── index.html          ← Main control panel interface
├── connectToDB.php     ← Database connection handler
├── get_run_pose.php    ← Retrieves all poses for table
├── load_pose_values.php ← Loads specific pose values
├── remove_pose.php     ← Deletes a pose
├── run_pose.php        ← Executes current pose
├── save_pose.php       ← Saves new pose
├── update_status.php   ← Updates pose status
├── script.js           ← Frontend functionality
├── style.css           ← Styling
└── README.md           ← Project documentation

user-form-php-mysql/
├── index.php ← Main page with form & table
├── insert.php ← Handles form submission
├── toggle.php ← Toggles user status
├── userDB.php ← Connects to the MySQL server
└── README.md ← Project documentation

## ⚙️ Setup Instructions

### 1️⃣ Install XAMPP
Download from official site:  
🔗 [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)  
Install on your system

### 2️⃣ Start Services
Open XAMPP Control Panel  
Start these services:
- Apache (Web server)
- MySQL (Database)

### 3️⃣ Database Setup
Access phpMyAdmin at:  
🔗 [http://localhost/phpmyadmin](http://localhost/phpmyadmin)

Create database named "robot_arm_db":
CREATE DATABASE robot_arm_db;

Create "poses" table:
CREATE TABLE poses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  motor1 INT,
  motor2 INT,
  motor3 INT,
  motor4 INT,
  motor5 INT,
  motor6 INT,
  status TINYINT(1) DEFAULT 0
);

### 4️⃣ Deploy Project Files
Copy all files to:  
C:\xampp\htdocs\robot-arm-control

### 5️⃣ Test Database Connection
Edit connectToDB.php if needed to match your MySQL credentials  
Open in browser:  
🔗 [http://localhost/robot-arm-control](http://localhost/robot-arm-control)

### 6️⃣ Using the Application
1. Adjust motor sliders to desired positions
2. Click "Save Pose" to store current positions
3. View all saved poses in the table
4. Click "Load" to recall a saved pose
5. Click "Run" to execute current pose
6. Click "Remove" to delete unwanted poses

## 👩‍💻 Author
Developed by Raghad Alrashidi
