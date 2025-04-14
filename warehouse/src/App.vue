<template>
  <el-tabs
    v-model="activeName"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="首页" name="first">
      <HomePage v-if="activeName === 'first'" />
    </el-tab-pane>
    <el-tab-pane label="智能问答" name="second">
      <GetAnswer v-if="activeName === 'second'" />
    </el-tab-pane>
    <el-tab-pane label="策略回测" name="third">
      <Huice v-if="activeName === 'third'" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import GetAnswer from './components/GetAnswer.vue'
import HomePage from './components/HomePage.vue'
import Huice from './components/Huice.vue'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  activeName.value = String(tab.paneName) // 强制赋值确保同步
  console.log('切换到:', activeName.value)
}
</script>
