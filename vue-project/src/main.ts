/*
 * @Author: laiminqi 2804627211@qq.com
 * @Date: 2023-11-09 10:49:14
 * @LastEditors: laiminqi 2804627211@qq.com
 * @LastEditTime: 2023-11-09 23:23:31
 * @FilePath: \studying-project\interview\HireWithCode\vue-project\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css';

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; //样式
import { createApp } from 'vue';
import rem from '../utils/rem.js';
import App from './App.vue';
import router from './router';
const app = createApp(App)
//创建v-highlight全局指令
app.directive('highlight',function (el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
app.use(router).use(rem)

app.mount('#app')
