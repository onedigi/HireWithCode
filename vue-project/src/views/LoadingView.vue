<!--
 * @Author: laiminqi 2804627211@qq.com
 * @Date: 2023-11-10 01:36:15
 * @LastEditors: laiminqi 2804627211@qq.com
 * @LastEditTime: 2023-11-12 23:33:44
 * @FilePath: \studying-project\interview\HireWithCode\vue-project\src\views\LoadingView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="loading-container">
    <div class="hourglassBackground">
      <div class="hourglassContainer">
        <div class="hourglassCurves"></div>
        <div class="hourglassCapTop"></div>
        <div class="hourglassGlassTop"></div>
        <div class="hourglassSand"></div>
        <div class="hourglassSandStream"></div>
        <div class="hourglassCapBottom"></div>
        <div class="hourglassGlass"></div>
      </div>
    </div>
    <div class="loading-text">完成挑战后请按下按钮</div>
    <button @click="toComplete">完成挑战</button>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function toComplete() {
  router.push({ name: 'challenge', params: { type: 'complete' } })
}
</script>
<style lang="less" scoped>
.loading-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.loading-container::before {
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
.loading-container::after {
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
.loading-text {
  font-size: 0.25rem;
  line-height: 0.375rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  position: relative;
  z-index: 1;
}
.hourglassBackground {
  position: relative;
  background-color: rgb(71, 60, 60);
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
  margin: 0.3rem auto;
  z-index: 1;
}

.hourglassContainer {
  position: absolute;
  top: 0.3rem;
  left: 0.4rem;
  width: 0.5rem;
  height: 0.7rem;
  -webkit-animation: hourglassRotate 2s ease-in 0s infinite;
  animation: hourglassRotate 2s ease-in 0s infinite;
  transform-style: preserve-3d;
  perspective: 10rem;
}

.hourglassContainer div,
.hourglassContainer div:before,
.hourglassContainer div:after {
  transform-style: preserve-3d;
}

@-webkit-keyframes hourglassRotate {
  0% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(180deg);
  }
}

@keyframes hourglassRotate {
  0% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(180deg);
  }
}

.hourglassCapTop {
  top: 0;
}

.hourglassCapTop:before {
  top: -0.25rem;
}

.hourglassCapTop:after {
  top: -0.2rem;
}

.hourglassCapBottom {
  bottom: 0;
}

.hourglassCapBottom:before {
  bottom: -0.25rem;
}

.hourglassCapBottom:after {
  bottom: -0.2rem;
}

.hourglassGlassTop {
  transform: rotateX(90deg);
  position: absolute;
  top: -0.16rem;
  left: 0.03rem;
  border-radius: 50%;
  width: 0.44rem;
  height: 0.44rem;
  background-color: #999999;
}

.hourglassGlass {
  perspective: 1rem;
  position: absolute;
  top: 0.32rem;
  left: 0.2rem;
  width: 0.1rem;
  height: 0.06rem;
  background-color: #999999;
  opacity: 0.5;
}

.hourglassGlass:before,
.hourglassGlass:after {
  content: '';
  display: block;
  position: absolute;
  background-color: #999999;
  left: -0.17rem;
  width: 0.44rem;
  height: 0.28rem;
}

.hourglassGlass:before {
  top: -0.27rem;
  border-radius: 0 0 0.25rem 0.25rem;
}

.hourglassGlass:after {
  bottom: -0.27rem;
  border-radius: 0.25rem 0.25rem 0 0;
}

.hourglassCurves:before,
.hourglassCurves:after {
  content: '';
  display: block;
  position: absolute;
  top: 0.32rem;
  width: 0.06rem;
  height: 0.06rem;
  border-radius: 50%;
  background-color: #333;
  animation: hideCurves 2s ease-in 0s infinite;
}

.hourglassCurves:before {
  left: 0.15rem;
}

.hourglassCurves:after {
  left: 0.29rem;
}

@-webkit-keyframes hideCurves {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hideCurves {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.hourglassSandStream:before {
  content: '';
  display: block;
  position: absolute;
  left: 0.24rem;
  width: 0.03rem;
  background-color: white;
  -webkit-animation: sandStream1 2s ease-in 0s infinite;
  animation: sandStream1 2s ease-in 0s infinite;
}

.hourglassSandStream:after {
  content: '';
  display: block;
  position: absolute;
  top: 0.36rem;
  left: 0.19rem;
  border-left: 0.06rem solid transparent;
  border-right: 0.06rem solid transparent;
  border-bottom: 0.06rem solid #fff;
  animation: sandStream2 2s ease-in 0s infinite;
}

@-webkit-keyframes sandStream1 {
  0% {
    height: 0;
    top: 0.35rem;
  }

  50% {
    height: 0;
    top: 0.45rem;
  }

  60% {
    height: 0.35rem;
    top: 0.08rem;
  }

  85% {
    height: 0.35rem;
    top: 0.08rem;
  }

  100% {
    height: 0;
    top: 0.08rem;
  }
}

@keyframes sandStream1 {
  0% {
    height: 0;
    top: 0.35rem;
  }

  50% {
    height: 0;
    top: 0.45rem;
  }

  60% {
    height: 0.35rem;
    top: 0.08rem;
  }

  85% {
    height: 0.35rem;
    top: 0.08rem;
  }

  100% {
    height: 0;
    top: 0.08rem;
  }
}

@-webkit-keyframes sandStream2 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  91% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes sandStream2 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  91% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

.hourglassSand:before,
.hourglassSand:after {
  content: '';
  display: block;
  position: absolute;
  left: 0.06rem;
  background-color: white;
  perspective: 5rem;
}

.hourglassSand:before {
  top: 0.08rem;
  width: 0.39rem;
  border-radius: 0.03rem 0.03rem 0.3rem 0.3rem;
  animation: sandFillup 2s ease-in 0s infinite;
}

.hourglassSand:after {
  border-radius: 0.3rem 0.3rem 0.03rem 0.03rem;
  animation: sandDeplete 2s ease-in 0s infinite;
}

@-webkit-keyframes sandFillup {
  0% {
    opacity: 0;
    height: 0;
  }

  60% {
    opacity: 1;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 0.17rem;
  }
}

@keyframes sandFillup {
  0% {
    opacity: 0;
    height: 0;
  }

  60% {
    opacity: 1;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 0.17rem;
  }
}

@-webkit-keyframes sandDeplete {
  0% {
    opacity: 0;
    top: 0.45rem;
    height: 0.17rem;
    width: 0.38rem;
    left: 0.06rem;
  }

  1% {
    opacity: 1;
    top: 0.45rem;
    height: 0.17rem;
    width: 0.38rem;
    left: 0.06rem;
  }

  24% {
    opacity: 1;
    top: 0.45rem;
    height: 0.17rem;
    width: 0.38rem;
    left: 0.06rem;
  }

  25% {
    opacity: 1;
    top: 0.41rem;
    height: 0.17rem;
    width: 0.38rem;
    left: 0.06rem;
  }

  50% {
    opacity: 1;
    top: 0.41rem;
    height: 0.17rem;
    width: 0.38rem;
    left: 0.06rem;
  }

  90% {
    opacity: 1;
    top: 0.41rem;
    height: 0;
    width: 0.1rem;
    left: 0.2rem;
  }
}

@keyframes sandDeplete {
  0% {
    opacity: 0;
    top: 0.45rem;
    height: 0.17rem;
    width: 0.38rem;
    left: 0.06rem;
  }

  1% {
    opacity: 1;
    top: 0.45rem;
    height: 0.17rem;
    width: 0.38rem;
    left: 0.06rem;
  }

  24% {
    opacity: 1;
    top: 0.45rem;
    height: 0.17rem;
    width: 0.38rem;
    left: 0.06rem;
  }

  25% {
    opacity: 1;
    top: 0.41rem;
    height: 0.17rem;
    width: 0.38rem;
    left: 0.06rem;
  }

  50% {
    opacity: 1;
    top: 0.41rem;
    height: 0.17rem;
    width: 0.38rem;
    left: 0.06rem;
  }

  90% {
    opacity: 1;
    top: 0.41rem;
    height: 0;
    width: 0.1rem;
    left: 0.2rem;
  }
}
button {
  height: 0.5rem;
  width: 1.5rem;
  background: transparent;
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
  border: 0.02rem solid #016dd9;
  outline: none;
  color: #016dd9;
  font-size: 0.17rem;
  position: relative;
  z-index: 1;
}

button:hover {
  background: #016dd9;
  color: #ffffff;
  animation: squeeze3124 0.9s both;
}

@keyframes squeeze3124 {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
