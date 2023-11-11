<template>
  <div class="about-container">
    <div>
      <img src="@/assets/people.jpg" alt="people" class="about-img" />
    </div>
    <div class="main">
      <div v-highlight v-html="content"></div>
      <button class="btn" @click="goAccept">
        开启挑战
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { marked } from 'marked'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const contends = marked(
  '# HireWithCode - 面试者挑战项目\n\n欢迎来到 `HireWithCode` 项目！这是一个专为技术面试者设计的真实项目挑战。目前，这个仓库刚刚起步，没有任何代码——只有待实现的功能（TODOs）。你的任务是将这些TODOs转变为实际的代码，提交你的Pull Request（PR）就是你面试的一部分挑战。\n## 产品功能 TODOs\n产品是一个 Web 网站（PC端、移动端兼容），分为 4 个步骤的页面：' +
    '\n- [ ] **欢迎语**：Logo + 一句话欢迎语（垂直水平居中，2 秒后自动进入下一页 *面试引导*）`欢迎来到 Onedigi 线上面试环节，期待你的加入！` [logo](./logo.png)\n - [ ] **面试引导**：介绍面试的流程和说明（Markdown 文案展示，需要渲染为富文本样式）[页面文案 markdown](https://raw.githubusercontent.com/onedigi/HireWithCode/main/README.md)\n - [ ] **接受挑战**：表单，`input`(用户输入自己的 github id) 、`input`(邮箱)、`submit .btn`(接受挑战)\n- [ ] **完成挑战**：表单，`input`(github 仓库 url)、`input`([Vercel](https://vercel.app/) 在线体验地址)、`submit .btn`(提交作品)' +
    '\n## 如何参与？\n 1. 克隆仓库到你的本地机器。\n2. 按照你对这个产品的理解，自行开发 TODO\n4. 确保你的代码是可以运行的\n5. 完成挑战后，通过Pull Request将你的代码提交给我们。\n6. 在PR中附上你的Vercel在线体验链接。\n' +
    '\n> 备注说明：\n > 这个项目的步骤 3、4 是是需要服务端能力的（API + 数据库），如果你不具备全栈的经验，可以考虑使用 [supabase](https://supabase.com/) 作为本项目的服务端（或者仅仅实现前端静态网页）\n' +
    '\n我们会审查每一个PR，并以此作为面试的一部分。我们期待看到你的创意和技术实力！\n' +
    '\n 祝你好运！'
)
const content = ref('')
content.value = contends
function goAccept() {
  router.push({ name: 'challenge', params: { type: 'begin' } })
}
</script>
<style lang="less" scoped>
.about-container {
  background-color: rgb(228, 218, 232);
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 0 2.6042rem;
  /deep/ input {
    width: 0.8125rem;
    height: 0.8125rem;
    transform: translateY(0.0625rem);
  }
}
.about-img {
  width: 35.4167rem;
  height: 35.4167rem;
}

.main {
  width: 61.4583rem;
  background-color: #fff;
  padding: 0 1.5625rem;
  border-radius: 1.0417rem;
  margin: 1.5625rem 0 3.125rem 0;
}
.btn {
  --primary-color: #645bff;
  --secondary-color: #fff;
  --hover-color: #111;
  --arrow-width: 0.5208rem;
  --arrow-stroke: 0.1042rem;
  margin: 2.6042rem auto 1.0417rem;
  box-sizing: border-box;
  border: 0;
  border-radius: 1.25rem;
  color: var(--secondary-color);
  padding: 1.1rem 2.5rem;
  background: var(--primary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6rem;
  font-weight: bold;
  font-size: 1rem;
}

.btn .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn .arrow {
  margin-top: 0.0521rem;
  width: var(--arrow-width);
  background: var(--primary-color);
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
}

.btn .arrow::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  border: solid var(--secondary-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -0.1563rem;
  right: 0.1563rem;
  transition: 0.2s;
  padding: 0.2575rem;
  transform: rotate(-45deg);
}

.btn:hover {
  background-color: var(--hover-color);
}

.btn:hover .arrow {
  background: var(--secondary-color);
}

.btn:hover .arrow:before {
  right: 0;
  top: -0.1875rem;
}
</style>
