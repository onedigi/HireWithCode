<!--
 * @Author: laiminqi 2804627211@qq.com
 * @Date: 2023-11-09 10:49:14
 * @LastEditors: laiminqi 2804627211@qq.com
 * @LastEditTime: 2023-11-10 00:12:23
 * @FilePath: \studying-project\interview\HireWithCode\vue-project\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: laiminqi 2804627211@qq.com
 * @Date: 2023-11-09 10:49:14
 * @LastEditors: laiminqi 2804627211@qq.com
 * @LastEditTime: 2023-11-09 15:25:22
 * @FilePath: \studying-project\interview\HireWithCode\vue-project\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const seconds = 2000
onMounted(() => {
  setTimeout(() => {
    router.push({ name: 'about' })
  }, seconds)
})
</script>

<template>
  <div class="container">
    <img src="@/assets/logo.png" alt="logo" class="logo" />
    <span class="container-text">欢迎来到 Onedigi 线上面试环节，期待你的加入！</span>
  </div>
</template>
<style lang="less" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container-text {
    margin-top: 1.5625rem;
    font-size: 1.5625rem;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .logo {
    width: 15.625rem;
    height: 15.625rem;
  }
}
.container::before {
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
.container::after {
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
