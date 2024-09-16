<?php
include "connect.php";

$request_body = file_get_contents("php://input");
$data = json_decode($request_body, true);
$project = $data["project"];

if (isset($project)) {
    $sql = "INSERT INTO `note` (`project`, `height`) VALUES ('$project', '150')";
    $mysqli->query($sql) or die(mysqli_error($mysqli));
} else {
    die("Erro ao criar nota");
}
