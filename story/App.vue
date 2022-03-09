<script lang="ts" setup>
import { VuMessage } from '@vu-design/components'
const btns = ['success', 'warning', 'danger', 'info', 'dark']

const clickMessageHandle = (item) => {
  VuMessage[item](`我是${item}色`)
}
</script>

<template>
  <div>
    <h1>icon 组件</h1>
    <VuIcon type="loading" />
    <h1>消息弹框</h1>
    <div>
      <button v-for='item in btns' :key = "item" @click="clickMessageHandle(item)">点击message 消息框--{{item}}</button>
    </div>
  </div>
</template>
