<template>
  <!-- 面包屑的内容 -->
  <el-breadcrumb>
      <el-breadcrum-item to="/home">首页</el-breadcrum-item>
      <el-breadcrum-item>
          <!-- 具名插槽 -->
          <slot name='title'></slot>
      </el-breadcrum-item>
  </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
