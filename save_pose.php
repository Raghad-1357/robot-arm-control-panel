<?php
include 'connectToDB.php';

$data = json_decode(file_get_contents('php://input'), true);
$pose = $data['pose'];

$sql = "INSERT INTO poses (motor1, motor2, motor3, motor4, motor5, motor6, status) 
        VALUES ({$pose[0]}, {$pose[1]}, {$pose[2]}, {$pose[3]}, {$pose[4]}, {$pose[5]}, 1)";
$conn->query($sql);
echo "Pose saved successfully!";
$conn->close();
?>
