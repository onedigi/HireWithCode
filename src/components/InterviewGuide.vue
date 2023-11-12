<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
  setup() {
    const dialogVisible = ref(false);
    console.log(dialogVisible);
    const router = useRouter()

    const acceptChallenge = () => {
      dialogVisible.value = false; // 关闭模态框
      // 处理接受挑战逻辑
      router.push('/accept-challenge')
    };

    const rejectChallenge = () => {
      dialogVisible.value = false; // 关闭模态框
      // 处理拒绝挑战逻辑
    };

    return {
      dialogVisible,
      acceptChallenge,
      rejectChallenge,
    };
  },
};
</script>
<template>
    <div class="guide-container">
        <div class="rich-text-content">
            <h1>HireWithCode - 面试者挑战项目</h1>
            <p>欢迎来到 <code>HireWithCode</code> 项目！这是一个专为技术面试者设计的真实项目挑战。目前，这个仓库刚刚起步，没有任何代码——只有待实现的功能（TODOs）。你的任务是将这些TODOs转变为实际的代码，提交你的Pull Request（PR）就是你面试的一部分挑战。</p>
            
            <h2>产品功能 TODOs</h2>
            <p>产品是一个 Web 网站（PC端、移动端兼容），分为 4 个步骤的页面：</p>
            <ul>
                <li>
                    <input type="checkbox" disabled> <strong>欢迎语</strong>：Logo + 一句话欢迎语（垂直水平居中，2 秒后自动进入下一页 <em>面试引导</em>)
                    <br>
                    `欢迎来到 Onedigi 线上面试环节，期待你的加入！`
                    <br>
                    <a href="./logo.png" target="_blank">logo</a>
                </li>
                <li>
                    <input type="checkbox" disabled> <strong>面试引导</strong>：介绍面试的流程和说明（Markdown 文案展示，需要渲染为富文本样式）
                    <br>
                    <a href="https://raw.githubusercontent.com/onedigi/HireWithCode/main/README.md" target="_blank">页面文案 markdown</a>
                </li>
                <li><input type="checkbox" disabled> <strong>接受挑战</strong>：表单，<code>input</code>(用户输入自己的 GitHub ID)、<code>input</code>(邮箱)、<code>submit button</code>(接受挑战)</li>
                <li><input type="checkbox" disabled> <strong>完成挑战</strong>：表单，<code>input</code>(GitHub 仓库 URL)、<code>input</code>(<a href="https://vercel.app/" target="_blank">Vercel</a> 在线体验地址)、<code>submit button</code>(提交作品)</li>
            </ul>
            
            <h2>如何参与？</h2>
            <ol>
                <li>克隆仓库到你的本地机器。</li>
                <li>按照你对这个产品的理解，自行开发 TODO</li>
                <li>确保你的代码是可以运行的</li>
                <li>完成挑战后，通过Pull Request将你的代码提交给我们。</li>
                <li>在PR中附上你的Vercel在线体验链接。</li>
            </ol>
            
            <blockquote>
                备注说明：<br>
                这个项目的步骤 3、4 是需要服务端能力的（API + 数据库），如果你不具备全栈的经验，可以考虑使用 <a href="https://supabase.com/" target="_blank">supabase</a> 作为本项目的服务端（或者仅仅实现前端静态网页）
            </blockquote>
            
            <p>我们会审查每一个PR，并以此作为面试的一部分。我们期待看到你的创意和技术实力！</p>
            
            <p>祝你好运！</p>
        </div>
        <el-button  @click="dialogVisible = true">
            点一下我叭~有惊喜哦
        </el-button>

        <el-dialog
            v-model="dialogVisible"
            title="是否接受挑战"
            width="30%"
        >
            <span>请确认是否接受挑战？</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="acceptChallenge">接受</el-button>
                    <el-button type="primary" @click="rejectChallenge">拒绝</el-button>
                </span>
            </template>
        </el-dialog>
    </div>


</template>
<style scoped>

.guide-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.rich-text-content {
    text-align: left;
    overflow-y: auto;
    max-height: 600px; 
}

h1, h2 {
    font-size: 24px;
    color: #333; /* 标题文本颜色，根据你的设计自行更改 */
}

p {
    font-size: 16px;
    color: #555; /* 正文文本颜色，根据你的设计自行更改 */
}

ul, ol {
    list-style-type: disc;
    margin-left: 20px;
}

blockquote {
    font-style: italic;
    border-left: 4px solid #ccc; /* 引用块的左边框样式，根据你的设计自行更改 */
    padding-left: 20px;
}



</style>
