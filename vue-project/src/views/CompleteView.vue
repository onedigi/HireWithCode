<!--
 * @Author: laiminqi 2804627211@qq.com
 * @Date: 2023-11-10 01:46:22
 * @LastEditors: laiminqi 2804627211@qq.com
 * @LastEditTime: 2023-11-11 12:51:06
 * @FilePath: \studying-project\interview\HireWithCode\vue-project\src\views\CompleteVIew.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="complete-container">
    <h1>你已成功提交作品，请等候消息通知</h1>
  </div>
</template>
<style lang="less" scoped>
.complete-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: -moz-linear-gradient(45deg, rgb(168, 255, 238), rgb(184, 255, 231));

  background: -webkit-linear-gradient(45deg, rgb(168, 255, 238), rgb(184, 255, 231));

  background: linear-gradient(45deg, rgb(168, 255, 238), rgb(184, 255, 231));
}
.complete-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: circle(30% at right 70%);
  background: -moz-linear-gradient(135deg, rgb(228, 255, 204), rgb(173, 255, 218));
  background: -webkit-linear-gradient(135deg, rgb(228, 255, 204), rgb(173, 255, 218));
  background: linear-gradient(135deg, rgb(228, 255, 204), rgb(173, 255, 218));
}
.complete-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: circle(30% at left 30%);
  background: -moz-linear-gradient(0deg, rgb(173, 241, 255), rgb(225, 255, 199));

  background: -webkit-linear-gradient(0deg, rgb(173, 241, 255), rgb(225, 255, 199));

  background: linear-gradient(0deg, rgb(173, 241, 255), rgb(225, 255, 199));
}
</style>
