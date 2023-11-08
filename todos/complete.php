<?php
include_once './conn.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>完成挑战</title>
    <link rel="icon" href="./images/logo.png">
    <link rel="stylesheet" href="./css/public.css">
    <link rel="stylesheet" href="./css/input.css">
</head>

<body>
    <form method="post" action="./check_complete.php">
        <div class="header">
            <h2 title="点我返回上一页"><a href="./accept.php" style="color: #fff;">完成挑战</a></h2>
            <div class="input_box">
                <input type="text" required name="github_url" /><label>github 仓库 url</label>
            </div>
            <div class="input_box">
                <input type="text" required name="vercel_url" /><label>Vercel在线体验地址</label>
            </div>
            <div class="submitBox">
                <input type="submit" name="checkSub" value="提交作品">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </form>

</body>

</html>