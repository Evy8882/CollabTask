<?php
include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$title = $data["title"];
$description = $data["description"];

if (!empty($title) and !empty($description)) {
    $sql = "INSERT INTO `projeto` (`title`,`description`,`owner`) VALUES ('$title', '$description', '1')";
    $mysqli->query($sql) or die(mysqli_error($mysqli));
}
