<?php
include "connect.php";

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
foreach ($data as $item) {
    $id = $item["id"];
    $taskName = $item["taskName"];
    $position = $item["index"];

    $stmt = $mysqli->prepare("UPDATE `task` SET `taskName`=?, `position`=? WHERE `id`=?");
    $stmt->bind_param("ssi", $taskName, $position, $id);
    $stmt->execute() or die(mysqli_error($mysqli));
    $stmt->close();
}
