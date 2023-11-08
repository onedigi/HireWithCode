<?php
header("Content-Type:text/html;charset=utf-8");
$github_url = trim($_POST["github_url"]);
$vercel_url = $_POST["vercel_url"];

include_once 'conn.php';

$result = mysqli_query($mysqli, $sql);
if (isset($_POST["checkSub"])) {
    $sql = "INSERT INTO complete (github_url, vercel_url, createtime) VALUES ('$github_url', '$vercel_url', '" . time() . "')";
    $result = mysqli_query($mysqli, $sql);
    if ($result) {
        echo "<script>alert('提交成功！');window.location.href = './complete.php';</script>";
    } else {
        echo "<script>alert('提交失败');history.back();</script>";
    }
}