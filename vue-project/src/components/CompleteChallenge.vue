<template>
  <div class="challenge-container" v-loading="loading" element-loading-text="正在提交中">
    <div class="input-container">
      <input type="text" id="input" required="true" v-model="form.github" @blur="githubBlur" />
      <label for="input" class="label">github url</label>
      <div class="underline"></div>
    </div>
    <div class="input-container">
      <input type="text" id="input" required="true" v-model="form.url" @blur="urlBlur" />
      <label for="input" class="label">在线体验地址</label>
      <div class="underline"></div>
    </div>
    <button class="btn" @click="sumbit">提交作品</button>
  </div>
</template>
<script lang="ts" setup>
import { supabase } from '@/lib/supabaseClient'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const loading = ref(false)
const form = reactive({
  url: '',
  github: ''
})
function urlBlur() {
  if (!form.url) {
    ElMessage({
      message: '请输入你的在线地址',
      type: 'warning',
      duration: 1000
    })
    return
  }
  const pattern =
    /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
  if (!pattern.test(form.url)) {
    console.log(form, pattern)
    ElMessage({
      message: 'url在线地址格式错误',
      type: 'warning',
      duration: 1000
    })
    form.url = ''
    return
  }
}
function githubBlur() {
  if (!form.github) {
    ElMessage({
      message: '请输入你的github url',
      type: 'warning',
      duration: 1000
    })
    return
  }
  const pattern =
    /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
  if (!pattern.test(form.github)) {
    ElMessage({
      message: 'github的url地址格式错误',
      type: 'warning',
      duration: 1000
    })
    form.github = ''
    return
  }
}
async function sumbit() {
  if (!form.github) {
    ElMessage({
      message: '请输入你的github url',
      type: 'warning'
    })
    return
  }
  if (!form.url) {
    ElMessage({
      message: '请输入你的在线地址',
      type: 'warning'
    })
    return
  }
  loading.value = true
  const { error } = await supabase.from('completed').insert({ github: form.github, url: form.url })
  loading.value = false
  if (error) {
    ElMessage({
      message: `出现错误：${error}`,
      type: 'error',
      duration: 1000
    })
  } else {
    router.push({ name: 'complete' })
  }
}
</script>
<style lang="less" scoped>
.challenge-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: -moz-linear-gradient(135deg, rgb(194, 252, 255), rgb(203, 194, 255));

  background: -webkit-linear-gradient(135deg, rgb(194, 252, 255), rgb(203, 194, 255));

  background: linear-gradient(135deg, rgb(194, 252, 255), rgb(203, 194, 255));
}
.challenge-container::before {
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
.challenge-container::after {
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
.input-container {
  position: relative;
  margin: 0.4167rem auto;
  min-width: 3rem;
  z-index: 1;
}

.input-container input[type='text'] {
  font-size: 0.1667rem;
  min-width: 100%;
  width: auto;
  border: none;
  border-bottom: 0.02rem solid #fff;
  padding: 0.05rem 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: -0.05rem;
  left: 0;
  color: #b19898;
  transition: all 0.3s ease;
  pointer-events: none;
  font-size: 0.19rem;
}

.input-container input[type='text']:focus ~ .label,
.input-container input[type='text']:valid ~ .label {
  top: -0.3rem;
  font-size: 0.16rem;
  color: #333;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.02rem;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type='text']:focus ~ .underline,
.input-container input[type='text']:valid ~ .underline {
  transform: scaleX(1);
}
.btn {
  min-width: 1.25rem;
  height: 0.375rem;
  margin: 0 auto;
  background: black;
  color: white;
  border: none;
  border-radius: 0.1rem;
  font-size: 0.1667rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

button:hover {
  color: black;
}

button:after {
  content: '';
  background: white;
  position: absolute;
  z-index: -1;
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(-45deg) scale(0, 1);
  transition: all 0.5s;
}

button:hover:after {
  transform: skewX(-45deg) scale(1, 1);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
// @media (max-width: 4800px) {
//   .input-container {
//     position: relative;
//     margin: 0.4167rem auto;
//     min-width: 3rem;
//   }
//   .btn {
//     width: 1.25rem;
//     height: 0.375rem;
//     border-radius: 0.1rem;
//     font-size: 0.1667rem;
//   }
//   .input-container input[type='text'] {
//     font-size: 0.1667rem;
//     min-width: 100%;
//     width: auto;
//     border-bottom: 0.02rem solid #fff;
//     padding: 0.05rem 0;
//   }

//   .input-container .label {
//     top: -0.05rem;
//     font-size: 0.19rem;
//   }

//   .input-container input[type='text']:focus ~ .label,
//   .input-container input[type='text']:valid ~ .label {
//     top: -0.3rem;
//     font-size: 0.16rem;
//   }

//   .input-container .underline {
//     height: 0.02rem;
//     width: 100%;
//   }
// }
</style>
