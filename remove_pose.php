<?php
include 'connectToDB.php';

$id = $_GET['id'];
$conn->query("DELETE FROM poses WHERE id = $id");
$conn->close();
?>