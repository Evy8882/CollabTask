<?php
include "connect.php";

$request_body = file_get_contents("php://input");
$data = json_decode($request_body,true);
$project = $data["project"];
$taskName = $data["taskName"];
$position = 90;//$data["position"];

if (isset($project) AND isset($position)){
    $sql = "INSERT INTO `task` (`taskName`,`project`, `position`) VALUES ('$taskName', '$project', '$position')";
    $mysqli->query($sql) or die(mysqli_error($mysqli));
}else{
    die("Erro ao criar nota");
}