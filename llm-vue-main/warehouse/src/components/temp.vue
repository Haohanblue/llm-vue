<template>
  <div>
    <!-- 点击按钮 -->
    <el-button type="primary" @click="openDialog">点击询问大模型</el-button>
    <!-- 引入 DialogComponent 并用 ref 进行访问 -->
    <DialogComponent ref="dialogComponent" />
  </div>
</template>

<script>
import DialogComponent from './DialogComponent.vue'; // 引入 DialogComponent

export default {
  name: 'Huice',
  components: {
    DialogComponent, // 注册 DialogComponent
  },
  methods: {
    openDialog() {
      // 调用 DialogComponent 中的 openDialog 方法，打开对话框
      this.$refs.dialogComponent.openDialog();
    },
  },
};
</script>
