<?php
include "connect.php";
$project = $_GET["project"];

$stmt = $mysqli->prepare("SELECT * FROM `note` WHERE `project` = ?");
$stmt->bind_param("s", $project);
$stmt->execute();
$result = $stmt->get_result();

die(json_encode($result->fetch_all(MYSQLI_ASSOC)));