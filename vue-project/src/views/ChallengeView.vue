<!--
 * @Author: laiminqi 2804627211@qq.com
 * @Date: 2023-11-10 00:13:40
 * @LastEditors: laiminqi 2804627211@qq.com
 * @LastEditTime: 2023-11-11 12:58:58
 * @FilePath: \studying-project\interview\HireWithCode\vue-project\src\views\ChallengeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-if="type == 'begin'">
    <beginComponent></beginComponent>
  </div>
  <div v-else>
    <completeComponent></completeComponent>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const beginComponent = defineAsyncComponent(() => import('@/components/BeginChallenge.vue'))
const completeComponent = defineAsyncComponent(() => import('@/components/CompleteChallenge.vue'))
const type = ref('begin')
const route = useRoute()
onMounted(() => {
  console.log(route.params.type)
  type.value = route.params.type
})
</script>
<style lang="less" scoped></style>
