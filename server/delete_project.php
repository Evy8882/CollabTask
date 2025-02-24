<?php
include "connect.php";

$request_body = file_get_contents('php://input');
$data = json_decode($request_body,true);
$id = $data["id"];

$stmt = $mysqli->prepare("DELETE FROM `projeto` WHERE `id` = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$stmt->close();
$mysqli->query($sql) or die(mysqli_error($mysqli));