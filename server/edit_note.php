<?php
include "connect.php";

$requested_body = file_get_contents("php://input");
$data = json_decode($requested_body, true);
$id = $data["id"];
$content = $data["content"];

if (isset($id) AND isset($content)){
    $sql = "UPDATE `note` SET `content` = '$content' WHERE `id` = '$id'";
    $mysqli->query($sql) or die($mysqli->error);
}