<?php
include "connect.php";

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
foreach ($data as $item) {
    $id = $item["id"];
    $taskName = $item["taskName"];
    $position = $item["index"];

    $sql = "UPDATE `task` SET `taskName`='$taskName', `position`='$position' WHERE `id`='$id'";
    $mysqli->query($sql) or die(mysqli_error($mysqli));
}
