<?php
include "connect.php";

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$id = $data["id"];
$done = $data["done"];

$sql = "UPDATE `task` SET `done`='$done' WHERE `id`='$id'";
$mysqli->query($sql) or die(mysqli_error($mysqli));
die("success");