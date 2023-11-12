<script>

import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const githubId = ref('');
    const email = ref('');
    const githubIdError = ref('');
    const emailError = ref('');
    const router = useRouter();

    const isValidInput = () => {
      githubIdError.value = ''; // 重置错误信息
      emailError.value = '';

      if (githubId.value === '') {
        githubIdError.value = 'GitHub ID不能为空';
      }

      if (email.value === '') {
        emailError.value = '邮箱不能为空';
      } else if (!isValidEmail(email.value)) {
        emailError.value = '请输入有效的邮箱地址';
      }

      return githubIdError.value === '' && emailError.value === '';
    };

    const acceptChallenge = () => {
      if (isValidInput()) {
        router.push('/complete-challenge');
      }
    };

    const isValidEmail = (email) => {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    };

    return {
      githubId,
      email,
      githubIdError,
      emailError,
      acceptChallenge,
    };
  },
};
</script>
<template>
    <div class="challenge-container">
        <h2>接受挑战</h2>
        <form @submit.prevent="submitChallenge">
            <div class="form-group">
                <label for="github-id">GitHub ID:</label>
                <input type="text" id="github-id" name="github-id" v-model="githubId" required placeholder="请输入您的GitHub ID">
            </div>
            <div class="form-group">
                <label for="email">邮箱:</label>
                <input type="email" id="email" name="email" v-model="email" required placeholder="请输入您的邮箱">
            </div>
            <button type="submit" @click="acceptChallenge">接受挑战</button>
        </form>
    </div>
</template>
<style scoped>
.challenge-container {
    width: 500px;
    height: 300px;
    background-color: rgb(150, 143, 172, 0.3);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
}

h2 {
    font-size: 24px;
}

.form-group {
    margin: 20px 0;
}

label {
    display: block;
    font-weight: bold;
    text-align: left;
}

input[type="text"],
input[type="email"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: rgb(0, 0, 0, 0.0);
}

input::-webkit-input-placeholder {
  color: rgb(47, 47, 42);
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3; 
}

</style>
