<script>

export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/interview-guide'); // 使用Vue Router进行页面跳转
    }, 2000); // 2秒后自动跳转
  },
}
</script>
<template>
      <div class="welcome-container">
        <img src="../assets/images/logo.png" alt="Onedigi Logo" class="logo">
        <p class="welcome-text">欢迎来到 Onedigi 线上面试环节，期待你的加入！</p>
    </div>
</template>
<style scoped>
body {
  background-color: pink;
}
.welcome-container {
    text-align: center;
}

.logo {
    width: 100px; 
    height: auto;
}

.welcome-text {
    font-size: 20px; 
    margin-top: 20px; 
}
</style>