<?php
include "connect.php";
$id = $_GET['id'];

$stmt = $mysqli->prepare("SELECT * FROM `projeto` WHERE `owner` = '1' AND `id` = ? LIMIT 1");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

// die(json_encode($result));
die(json_encode($result->fetch_assoc()));