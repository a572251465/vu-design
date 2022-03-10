<script lang="ts" setup>
import { VuMessage, VuMessageBox } from '@vu-design/components'
const btns = ['success', 'warning', 'danger', 'info', 'dark']

const clickMessageHandle = (item) => {
  VuMessage[item](`我是${item}色`)
}
const messageBoxHandle = () => {
  VuMessageBox.alert('我的消息', '提示', {
    callback: () => {
      console.log('你成功了')
    }
  })
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
    <h1>点击messagebox</h1>
    <div>
      <button @click="messageBoxHandle">点击 messagebox</button>
    </div>
  </div>
</template>
