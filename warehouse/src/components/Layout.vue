<template>
    <div class="layout-container">
      <!-- 左侧侧边栏 -->
      <div class="sidebar">
        <el-menu
          default-active="one"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/one">
            <span>组件一</span>
          </el-menu-item>
  
          <el-menu-item index="/two">
            <span>组件二</span>
          </el-menu-item>
  
          <el-menu-item index="/three">
            <span>组件三</span>
          </el-menu-item>
        </el-menu>
      </div>
  
      <!-- 右侧主体内容 -->
      <div class="main">
        <router-view />
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .layout-container {
    display: flex;
    height: 100vh; /* 示例自适应全屏高度 */
    overflow: hidden;
  }
  
  .sidebar {
    width: 200px;
    border-right: 1px solid #ebeef5;
    box-sizing: border-box;
    padding: 20px 0;
    overflow-y: auto;
  }
  
  .main {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
  }
  </style>
  