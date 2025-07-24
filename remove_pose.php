<?php
include 'connectToDB.php';

$id = $_GET['id'];

$conn->query("UPDATE poses SET status = 0 WHERE id = $id");
$conn->close();
?>
