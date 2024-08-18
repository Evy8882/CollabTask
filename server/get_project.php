<?php
include "connect.php";
$id = $_GET['id'];

$sql = "SELECT * FROM `projeto` WHERE `owner` = '1' AND `id` = '$id' LIMIT 1";
$result = $mysqli->query($sql);

// die(json_encode($result));
die(json_encode($result->fetch_assoc()));