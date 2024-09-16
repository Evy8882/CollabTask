<?php
include "connect.php";
$project = $_GET["project"];

$sql = "SELECT * FROM `note` WHERE `project` = '$project'";
$result = $mysqli->query($sql);

die(json_encode($result->fetch_all(MYSQLI_ASSOC)));