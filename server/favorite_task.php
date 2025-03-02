<?php
include "connect.php";

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$id = $data["id"];
$done = $data["favorite"];

$stmt = $mysqli->prepare("UPDATE `task` SET `favorite`=? WHERE `id`=?");
$stmt->bind_param("ii", $done, $id);
$stmt->execute() or die($stmt->error);
$stmt->close();
// $mysqli->query($sql) or die(mysqli_error($mysqli));
die("success");