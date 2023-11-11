<!--
 * @Author: laiminqi 2804627211@qq.com
 * @Date: 2023-11-10 01:36:15
 * @LastEditors: laiminqi 2804627211@qq.com
 * @LastEditTime: 2023-11-10 23:38:49
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
  font-size: 1.5625rem;
  line-height: 2.3438rem;
  font-weight: bold;
  margin-bottom: 1.5625rem;
}
.hourglassBackground {
  position: relative;
  background-color: rgb(71, 60, 60);
  height: 8.125rem;
  width: 8.125rem;
  border-radius: 50%;
  margin: 1.875rem auto;
}

.hourglassContainer {
  position: absolute;
  top: 1.875rem;
  left: 2.5rem;
  width: 3.125rem;
  height: 4.375rem;
  -webkit-animation: hourglassRotate 2s ease-in 0s infinite;
  animation: hourglassRotate 2s ease-in 0s infinite;
  transform-style: preserve-3d;
  perspective: 62.5rem;
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
  top: -1.5625rem;
}

.hourglassCapTop:after {
  top: -1.25rem;
}

.hourglassCapBottom {
  bottom: 0;
}

.hourglassCapBottom:before {
  bottom: -1.5625rem;
}

.hourglassCapBottom:after {
  bottom: -1.25rem;
}

.hourglassGlassTop {
  transform: rotateX(90deg);
  position: absolute;
  top: -1rem;
  left: 0.1875rem;
  border-radius: 50%;
  width: 2.75rem;
  height: 2.75rem;
  background-color: #999999;
}

.hourglassGlass {
  perspective: 6.25rem;
  position: absolute;
  top: 2rem;
  left: 1.25rem;
  width: 0.625rem;
  height: 0.375rem;
  background-color: #999999;
  opacity: 0.5;
}

.hourglassGlass:before,
.hourglassGlass:after {
  content: '';
  display: block;
  position: absolute;
  background-color: #999999;
  left: -1.0625rem;
  width: 2.75rem;
  height: 1.75rem;
}

.hourglassGlass:before {
  top: -1.6875rem;
  border-radius: 0 0 1.5625rem 1.5625rem;
}

.hourglassGlass:after {
  bottom: -1.6875rem;
  border-radius: 1.5625rem 1.5625rem 0 0;
}

.hourglassCurves:before,
.hourglassCurves:after {
  content: '';
  display: block;
  position: absolute;
  top: 2rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background-color: #333;
  animation: hideCurves 2s ease-in 0s infinite;
}

.hourglassCurves:before {
  left: 0.9375rem;
}

.hourglassCurves:after {
  left: 1.8125rem;
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
  left: 1.5rem;
  width: 0.1875rem;
  background-color: white;
  -webkit-animation: sandStream1 2s ease-in 0s infinite;
  animation: sandStream1 2s ease-in 0s infinite;
}

.hourglassSandStream:after {
  content: '';
  display: block;
  position: absolute;
  top: 2.25rem;
  left: 1.1875rem;
  border-left: 0.375rem solid transparent;
  border-right: 0.375rem solid transparent;
  border-bottom: 0.375rem solid #fff;
  animation: sandStream2 2s ease-in 0s infinite;
}

@-webkit-keyframes sandStream1 {
  0% {
    height: 0;
    top: 2.1875rem;
  }

  50% {
    height: 0;
    top: 2.8125rem;
  }

  60% {
    height: 2.1875rem;
    top: 0.5rem;
  }

  85% {
    height: 2.1875rem;
    top: 0.5rem;
  }

  100% {
    height: 0;
    top: 0.5rem;
  }
}

@keyframes sandStream1 {
  0% {
    height: 0;
    top: 2.1875rem;
  }

  50% {
    height: 0;
    top: 2.8125rem;
  }

  60% {
    height: 2.1875rem;
    top: 0.5rem;
  }

  85% {
    height: 2.1875rem;
    top: 0.5rem;
  }

  100% {
    height: 0;
    top: 0.5rem;
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
  left: 0.375rem;
  background-color: white;
  perspective: 31.25rem;
}

.hourglassSand:before {
  top: 0.5rem;
  width: 2.4375rem;
  border-radius: 0.1875rem 0.1875rem 1.875rem 1.875rem;
  animation: sandFillup 2s ease-in 0s infinite;
}

.hourglassSand:after {
  border-radius: 1.875rem 1.875rem 0.1875rem 0.1875rem;
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
    height: 1.0625rem;
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
    height: 1.0625rem;
  }
}

@-webkit-keyframes sandDeplete {
  0% {
    opacity: 0;
    top: 2.8125rem;
    height: 1.0625rem;
    width: 2.375rem;
    left: 0.375rem;
  }

  1% {
    opacity: 1;
    top: 2.8125rem;
    height: 1.0625rem;
    width: 2.375rem;
    left: 0.375rem;
  }

  24% {
    opacity: 1;
    top: 2.8125rem;
    height: 1.0625rem;
    width: 2.375rem;
    left: 0.375rem;
  }

  25% {
    opacity: 1;
    top: 2.5625rem;
    height: 1.0625rem;
    width: 2.375rem;
    left: 0.375rem;
  }

  50% {
    opacity: 1;
    top: 2.5625rem;
    height: 1.0625rem;
    width: 2.375rem;
    left: 0.375rem;
  }

  90% {
    opacity: 1;
    top: 2.5625rem;
    height: 0;
    width: 0.625rem;
    left: 1.25rem;
  }
}

@keyframes sandDeplete {
  0% {
    opacity: 0;
    top: 2.8125rem;
    height: 1.0625rem;
    width: 2.375rem;
    left: 0.375rem;
  }

  1% {
    opacity: 1;
    top: 2.8125rem;
    height: 1.0625rem;
    width: 2.375rem;
    left: 0.375rem;
  }

  24% {
    opacity: 1;
    top: 2.8125rem;
    height: 1.0625rem;
    width: 2.375rem;
    left: 0.375rem;
  }

  25% {
    opacity: 1;
    top: 2.5625rem;
    height: 1.0625rem;
    width: 2.375rem;
    left: 0.375rem;
  }

  50% {
    opacity: 1;
    top: 2.5625rem;
    height: 1.0625rem;
    width: 2.375rem;
    left: 0.375rem;
  }

  90% {
    opacity: 1;
    top: 2.5625rem;
    height: 0;
    width: 0.625rem;
    left: 1.25rem;
  }
}
button {
  height: 3.125rem;
  width: 9.375rem;
  background: transparent;
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
  border: 0.125rem solid #016dd9;
  outline: none;
  color: #016dd9;
  font-size: 1.0625rem;
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
