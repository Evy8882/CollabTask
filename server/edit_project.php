<?php
include "connect.php";

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$id = $data["id"];
$title = $data["title"];
$description = $data["description"];

if (!empty($title) AND !empty($description)) {
    $sql = "UPDATE `projeto` SET `title`='$title', `description`='$description' WHERE `id`='$id'";
    $mysqli->query($sql) or die(mysqli_error($mysqli));
}