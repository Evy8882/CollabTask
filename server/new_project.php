<?php
include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$title = $data["title"];
$description = $data["description"];

if (!empty($title) and !empty($description)) {
    $stmt = $mysqli->prepare("INSERT INTO `projeto` (`title`, `description`, `owner`) VALUES (?, ?, '1')");
    $stmt->bind_param("ss", $title, $description);
    $stmt->execute();
    $stmt->close();
    $mysqli->query($sql) or die(mysqli_error($mysqli));
}
