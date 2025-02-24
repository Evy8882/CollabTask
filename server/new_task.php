<?php
include "connect.php";

$request_body = file_get_contents("php://input");
$data = json_decode($request_body,true);
$project = $data["project"];
$taskName = $data["taskName"];
$position = 90;//$data["position"];

if (isset($project) AND isset($position)){
    $stmt = $mysqli->prepare("INSERT INTO `task` (`taskName`,`project`, `position`) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $taskName, $project, $position);
    $stmt->execute() or die(mysqli_error($mysqli));
    $stmt->close();
    $mysqli->query($sql) or die(mysqli_error($mysqli));
}else{
    die("Erro ao criar nota");
}