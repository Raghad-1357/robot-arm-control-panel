<?php
include 'connectToDB.php';

$id = $_GET['id'];
$result = $conn->query("SELECT * FROM poses WHERE id = $id");

$row = $result->fetch_assoc();
echo json_encode($row);

$conn->close();
?>