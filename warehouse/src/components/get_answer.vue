<script setup lang="ts">

import type { BubbleListProps,BubbleListItemProps } from 'vue-element-plus-x/types/components/BubbleList/types';
import axios from 'axios'
import { ElMessage } from 'element-plus'


type listType = BubbleListItemProps & {
  key: number
  role: 'user' | 'ai'
}

const list = ref<listType[]>(generateFakeItems(1))


function generateFakeItems(count: number): listType[] {
  const messages: listType[] = []
  for (let i = 0; i < count; i++) {
    const role = i % 2 === 0 ? 'ai' : 'user'
    const placement = role === 'ai' ? 'start' : 'end'
    const key = i + 1
    const content = role === 'ai'
      ? '💖 您好！我是您的机器人助手，请问有什么需要帮助呢~'
      : `哈哈哈，让我试试`
    const loading = false
    const shape = 'corner'
    const variant = role === 'ai' ? 'filled' : 'outlined'
    const isMarkdown = false
    const typing = role === 'ai' ? i === count - 1 : false
    const avatar = role === 'ai'
      ? 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      : 'https://avatars.githubusercontent.com/u/76239030?v=4'

    messages.push({
      key,
      role,
      placement,
      content,
      loading,
      shape,
      variant,
      isMarkdown,
      typing,
      avatar,
      avatarSize: '30px',
    })
  }
  return messages
}

// 存储用户所有输入内容的全局变量
const chatHistory = ref('')
const senderRef = ref<{ clear: () => void } | null>(null)


//输入框
import { ref } from 'vue';
const activeName = ref('enter')
const senderValue = ref('')
const senderLoading = ref(false)

// 发送用户输入
async function handleSubmit(value: string) {
  senderLoading.value = true
  // 保存用户输入到聊天历史
  chatHistory.value += `用户：${value}\n`
  
 // 清空输入框（使用组件自身提供的方法）
  senderRef.value.clear()

  // 添加用户消息到对话列表
  const userMessage: listType = {
    key: list.value.length + 1,
    role: 'user',
    placement: 'end',
    content: value,
    loading: false,
    shape: 'corner',
    variant: 'outlined',
    isMarkdown: false,
    typing: false,
    avatar: 'https://avatars.githubusercontent.com/u/76239030?v=4',
    avatarSize: '30px',
  }
  list.value.push(userMessage)

  try {
    // 发送请求到后端
    const response = await axios.post('http://localhost:5000/chat', {
      question: value,
      timeout:100000
    })

    // 获取后端智能回复
    const aiReply = response.data.reply

    // 更新聊天记录
    chatHistory.value += `AI：${aiReply}\n`

    // 添加 AI 回复到对话列表
    const aiMessage: listType = {
      key: list.value.length + 1,
      role: 'ai',
      placement: 'start',
      content: aiReply,
      loading: false,
      shape: 'corner',
      variant: 'filled',
      isMarkdown: false,
      typing: true, // 开启打字效果
      avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      avatarSize: '30px',
    }

    list.value.push(aiMessage)
  } catch (error) {
    console.error('Error during API request:', error)
    ElMessage.error('请求失败，请稍后再试')
  } finally {
    senderLoading.value = false
  }
}


</script>

<template>
  
  <div style="display: flex; flex-direction: column; gap: 12px; background-color: #FFFFF0; height: 94vh; width: 97%; padding: 20px; border-radius: 8px;">
    
    <h1 style="text-align: center;"> 🤖金融小助手</h1>

    <!-- 对话列表 -->
    <div style="display: flex; flex-direction: column; gap: 12px; background-color: #FFFFF0; height: 65vh; width: 97%; padding: 20px; border-radius: 8px;">
      <BubbleList :list="list" max-height="100%"  />
    </div>
    
    <!-- 输入框 -->
    <div style="position: absolute; bottom: 40px; left: 200px; right: 150px;width:1000px;background-color: #FFFACD;">
        <Sender ref="senderRef" v-model="senderValue" :submit-type="activeName" :loading="senderLoading" @submit="handleSubmit" />
      </div>
  </div>
  
</template>
