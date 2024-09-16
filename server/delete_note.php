<?php
include "connect.php";

$request_body = file_get_contents("php://input");
$data = json_decode($request_body, true);
$id = $data["id"];

if (isset($id)){
    $sql = "DELETE FROM `note` WHERE `id` = '$id'";
    $mysqli->query($sql) or die($mysqli->error);
}