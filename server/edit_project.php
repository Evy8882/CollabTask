<?php
include "connect.php";

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$id = $data["id"];
$title = $data["title"];
$description = $data["description"];

if (!empty($title) AND !empty($description)) {
    $stmt = $mysqli->prepare("UPDATE `projeto` SET `title`=?, `description`=? WHERE `id`=?");
    $stmt->bind_param("ssi", $title, $description, $id);
    $stmt->execute() or die(mysqli_error($mysqli));
    $stmt->close();
}