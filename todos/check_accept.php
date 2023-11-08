<?php
header("Content-Type:text/html;charset=utf-8");
$github_id = trim($_POST["github_id"]);
$mail = $_POST["email"];

include_once 'conn.php';

$result = mysqli_query($mysqli, $sql);
if (isset($_POST["checkSub"])) {
    $sql = "INSERT INTO accept (github_id, email, createtime) VALUES ('$github_id', '$mail', '" . time() . "')";
    $result = mysqli_query($mysqli, $sql);
    if ($result) {
        echo "<script>alert('成功接受挑战，请填写github仓库地址与Vercel在线体验地址');window.location.href = './complete.php';</script>";
    } else {
        echo "<script>alert('接受挑战失败！');history.back();</script>";
    }
}