<?php
include_once './conn.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>接受挑战</title>
    <link rel="icon" href="./images/logo.png">
    <link rel="stylesheet" href="./css/public.css">
    <link rel="stylesheet" href="./css/input.css">
</head>

<body>
    <form name="submission" method="post" onsubmit="return check()" action="./check_accept.php">
        <div class="header">
            <h2 title="点我返回上一页"><a href="./guide.html" style="color: #fff;">接受挑战</a></h2>
            <div class="input_box">
                <input id="text1" type="text" name="github_id" /><label id="div1">github id</label>
            </div>
            <div class="input_box">
                <input id="text2" type="text" name="email" /><label id="div2">邮箱</label>
            </div>
            <div class="submitBox">
                <input type="submit" name="checkSub" value="接受挑战">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </form>
    <script type="text/javascript">
        //用户名验证
        function checkname() {
            var div = document.getElementById("div1");
            div.innerHTML = "";
            var name1 = document.submission.text1.value;
            if (name1 == "") {
                div.innerHTML = "github id不能为空！";
                document.submission.text1.focus();
                return false;
            }
            if (name1.length < 1 || name1.length > 20) {
                div.innerHTML = "长度1-20个字符";
                document.submission.text1.select();
                return false;
            }
            var charname1 = name1.toLowerCase();
            for (var i = 0; i < name1.length; i++) {
                var charname = charname1.charAt(i);
                if (!(charname >= 0 && charname <= 9) && (!(charname >= 'a' && charname <= 'z')) && (charname != '_')) {
                    div.innerHTML = "github id包含非法字符";
                    document.form1.text1.select();
                    return false;
                }
            }
            return true;
        }
        //邮箱验证
        function checkEmail() {
            var div = document.getElementById("div2");
            div.innerHTML = "";
            var email = document.submission.text2.value;
            var sw = email.indexOf("@", 0);
            var sw1 = email.indexOf(".", 0);
            var tt = sw1 - sw;
            if (email.length == 0) {
                div.innerHTML = "邮箱不能为空";
                document.submission.text2.focus();
                return false;
            }

            if (email.indexOf("@", 0) == -1) {
                div.innerHTML = "必须包含@符号";
                document.submission.text2.select();
                return false;
            }

            if (email.indexOf(".", 0) == -1) {
                div.innerHTML = "必须包含.符号";
                document.submission.text2.select();
                return false;
            }

            if (tt == 1) {
                div.innerHTML = "@和.不能一起";
                document.submission.text2.select();
                return false;
            }

            if (sw > sw1) {
                div.innerHTML = "@符号必须在.之前";
                document.submission.text2.select();
                return false;
            }
            else {
                return true;
            }
            return ture;
        }

        function check() {
            if (checkname() && checkEmail()) {
                return true;
            }
            else {
                return false;
            }
        }
    </script>
</body>

</html>