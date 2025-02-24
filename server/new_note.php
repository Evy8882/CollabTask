<?php
include "connect.php";

$request_body = file_get_contents("php://input");
$data = json_decode($request_body, true);
$project = $data["project"];

if (isset($project)) {
    $stmt = $mysqli->prepare("INSERT INTO `note` (`project`, `height`) VALUES (?, '150')");
    $stmt->bind_param("s", $project);
    $stmt->execute() or die(mysqli_error($mysqli));
    $stmt->close();
} else {
    die("Erro ao criar nota");
}
