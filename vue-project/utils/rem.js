/*
 * @Author: laiminqi 2804627211@qq.com
 * @Date: 2023-11-09 15:38:08
 * @LastEditors: laiminqi 2804627211@qq.com
 * @LastEditTime: 2023-11-12 23:27:44
 * @FilePath: \studying-project\interview\HireWithCode\vue-project\utils\rem.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const MyRem = {};
export default MyRem.install = function (Vue) {
  Vue.mixin({
    mounted: function () {
      this.MyUseRem();
    },
    methods: {
      MyUseRem() {
        let font = 0
        if (window.document.body.clientWidth > 1920) {
          font = 100;
        } else {

          if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            font = setRem();
            console.log(font)
          }
          else {
            font = window.document.body.clientWidth / 1920 * 100;
          }

        }
        // let font = window.document.body.clientWidth / 100;
        let html = document.getElementsByTagName("html")[0];
        if (!html) {
          throw new Error("No HTML element");
        }

        html.style.fontSize = font + "px";

        window.addEventListener("resize", resizeThrottler, false);
        var resizeTimeout;

        function actualResizeHandler() {
          // 处理调整大小事件
          let font = 0
          if (window.document.body.clientWidth > 1920) {
            font = 19.2;
          } else {
            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
              font = setRem();
            }
            else {
              font = window.document.body.clientWidth / 1920 * 100;
            }
          }
          // let font = window.document.body.clientWidth / 100;
          html.style.fontSize = font + "px";
        }
        function setRem() {
          var whdef = 100 / 1024; // 表示1024的设计图,使用100PX的默认值
          var bodyWidth = document.body.clientWidth * 2; // 当前窗口的宽度
          return bodyWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        }

        function resizeThrottler() {
          // 只要队列中有一个actualResizeHandler执行，就会忽略resize事件
          if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
              resizeTimeout = null;
              actualResizeHandler();
              // actualResizeHandler将以15fps的速度执行
            }, 66);
          }
        }
      }
    }
  });
}
