<?php
include "connect.php";

$sql = "SELECT * FROM `projeto` WHERE `owner` = '1'";
$result = $mysqli->query($sql);

// die(json_encode($result));
die(json_encode($result->fetch_all(MYSQLI_ASSOC)));