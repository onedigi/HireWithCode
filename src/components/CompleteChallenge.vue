<script>
export default {
  data() {
    return {
      githubUrl: '',
      vercelUrl: '',
    };
  },
  methods: {
    submitChallenge() {
      // 处理提交挑战逻辑，可以将 githubUrl 和 vercelUrl 发送到后端
    },
  },
};
</script>
<template>
      <div class='complete-challenge'>
        <h2>完成挑战</h2>
        <form @submit="submitChallenge">
            <div class="form-group">
                <label for="githubUrl">GitHub 仓库 URL:</label>
                <input type="text" id="githubUrl" v-model="githubUrl" required placeholder="请输入URL">
            </div>
            <div class="form-group">
                <label for="vercelUrl">Vercel 在线体验地址:</label>
                <input type="text" id="vercelUrl" v-model="vercelUrl" required placeholder="请输入地址">
            </div>
            <button type="submit">提交作品</button>
        </form>
    </div>
</template>
<style scoped>
.complete-challenge {
    width: 500px;
    height: 300px;
    background-color: rgba(150, 143, 172, 0.3);
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

input {
  width: 100%;
  padding: 5px;
  margin: 5px 0;
  border: 1px solid #ccc; 
  border-radius: 5px; 
  background-color: rgba(0, 0, 0, 0.0);
}

input::-webkit-input-placeholder {
  color: rgb(47, 47, 42);
}

button {
  background-color: #007BFF; 
  color: white; 
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color o.3s;
}

button:hover {
    background-color: #0056b3;
}
</style>