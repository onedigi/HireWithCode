<?php
$mysqli = mysqli_connect("localhost", "root", "123456", "todos");
if (!$mysqli) {
    die("数据库连接失败：" . $mysqli->connect_error);
}
mysqli_query($mysqli,"set names utf8");