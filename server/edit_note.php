<?php
include "connect.php";

$requested_body = file_get_contents("php://input");
$data = json_decode($requested_body, true);
$id = $data["id"];
$content = $data["content"];
$height = $data["height"];

if (isset($id) AND isset($content) AND isset($height)) {
    $stmt = $mysqli->prepare("UPDATE `note` SET `content` = ?, `height` = ? WHERE `id` = ?");
    $stmt->bind_param("ssi", $content, $height, $id);
    $stmt->execute() or die($stmt->error);
    $stmt->close();
}