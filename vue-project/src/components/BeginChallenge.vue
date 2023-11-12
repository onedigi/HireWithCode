<template>
  <div class="challenge-container" v-loading="loading" element-loading-text="正在加载中">
    <div class="box-content">
      <div class="input-container">
        <input type="text" id="input" required="true" v-model="form.github" @blur="githubBulr" />
        <label for="input" class="label">github id</label>
        <div class="underline"></div>
      </div>
      <div class="input-container">
        <input type="text" id="input" required="true" v-model="form.email" @blur="emailBulr" />
        <label for="input" class="label">邮箱</label>
        <div class="underline"></div>
      </div>
      <button class="btn" @click="sumbit">挑战正式开始</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { supabase } from '@/lib/supabaseClient'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const loading = ref(false)
const router = useRouter()
const form = reactive({
  email: '',
  github: ''
})
function githubBulr() {
  if (!form.github) {
    ElMessage({
      message: '请输入你的github ID',
      type: 'warning',
      duration: 1000
    })
    return
  }
}
function emailBulr() {
  if (!form.email) {
    ElMessage({
      message: '请输入你的邮箱',
      type: 'warning',
      duration: 1000
    })
    return
  }
  const pattern = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
  if (!pattern.test(form.email)) {
    ElMessage({
      message: 'email地址格式错误',
      type: 'warning',
      duration: 1000
    })

    form.email = ''
    return
  }
}
async function sumbit() {
  if (!form.github) {
    ElMessage({
      message: '请输入你的github id',
      type: 'warning',
      duration: 1000
    })
    return
  }
  if (!form.email) {
    ElMessage({
      message: '请输入你的邮箱',
      type: 'warning',
      duration: 1000
    })
    return
  }
  loading.value = true
  const { error } = await supabase.from('begin').insert({ github: form.github, email: form.email })
  loading.value = false
  if (error) {
    ElMessage({
      message: `出现错误：${error}`,
      type: 'error',
      duration: 1000
    })
  } else {
    router.push({ name: 'loading' })
  }
}
</script>
<style lang="less" scoped>
.challenge-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(228, 218, 232);
}
.box-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: end;
}
@media (min-width: 767px) {
  .box-content {
    width: 85vw;
    height: 90vh;
    background: url('@/assets/bg_two.jpg') no-repeat;
    background-size: 90% 100%;
    border-radius: 0.1667rem;
    background-color: #fff;
  }
  .input-container {
    transform: translateX(-60%);
  }
  .btn {
    min-width: 1.25rem;
  }
  .input-container input[type='text']:focus ~ .label,
  .input-container input[type='text']:valid ~ .label {
    color: #333;
  }
  .input-container .underline {
    bottom: 0.12rem;
    height: 0.025rem;
  }
}
.input-container {
  min-width: 3.5rem;
  height: 0.5rem;
  position: relative;
}
.input-container:first-child {
  margin-bottom: 2.5rem;
}
.input-container input[type='text'] {
  font-size: 0.18rem;
  width: 100%;
  border: none;
  border-bottom: 0.03rem solid #ccc;
  padding: 0.0667rem 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  font-size: 0.25rem;
  position: absolute;
  top: -0.05rem;
  left: 0;
  color: #ccc;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type='text']:focus ~ .label,
.input-container input[type='text']:valid ~ .label {
  top: -0.24rem;
  font-size: 0.18rem;
}

.input-container .underline {
  position: absolute;
  left: 0;
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
  height: 0.375rem;
  margin: 0 auto;
  margin-top: 1.2rem;
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
@media (max-width: 768px) {
  .box-content {
    width: 100%;
    min-height: 100vh;
    background: url('@/assets/bg_phone.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .input-container {
    transform: translateX(0px);
    min-width: 3.5rem;
    height: 0.5rem;
  }
  .btn {
    width: 1.66rem;
    height: 0.375rem;
    margin-top: 1.2rem;
    border-radius: 0.1rem;
    font-size: 0.1667rem;
  }

  .input-container .underline {
    bottom: 0.11rem;
    height: 0.048rem;
  }
  .input-container:first-child {
    margin-bottom: 2.5rem;
  }
  .input-container input[type='text'] {
    font-size: 0.18rem;
    width: 100%;
    border-bottom: 0.03rem solid #ccc;
    padding: 0.0667rem 0;
    color: #fff;
  }

  .input-container .label {
    font-size: 0.25rem;
    top: -0.05rem;
    left: 0;
  }

  .input-container input[type='text']:focus ~ .label,
  .input-container input[type='text']:valid ~ .label {
    top: -0.24rem;
    font-size: 0.18rem;
  }

  .input-container .underline {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
