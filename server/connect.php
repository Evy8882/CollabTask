<?php
$hostname = "localhost";
$username = "root";
$password = "";
$database = "db_collabtask";
//headers de acesso
header('Access-control-Allow-Origin: *');
header('Access-control-Allow-Headers: *');
header('Access-control-Allow-Methods: GET, POST, PUT');

//conexão no banco de dados
$mysqli = new mysqli($hostname,$username,$password,$database);
if ($mysqli->connect_errno) {
    die("Error ($mysqli->connect_errno): $mysqli->connect_error");
}