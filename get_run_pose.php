<?php
include 'connectToDB.php';

$result = $conn->query("SELECT * FROM poses");

while($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$row['id']}</td>
        <td>{$row['motor1']}</td>
        <td>{$row['motor2']}</td>
        <td>{$row['motor3']}</td>
        <td>{$row['motor4']}</td>
        <td>{$row['motor5']}</td>
        <td>{$row['motor6']}</td>
        <td>
            <button onclick='loadPose({$row['id']})'>Load</button>
            <button onclick='removePose({$row['id']})'>Remove</button>
        </td>
    </tr>";
}
$conn->close();
?>