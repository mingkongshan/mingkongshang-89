<template>
  <!-- 左侧导航 -->
<div class='layout-aside'>
    <div class='title'>
        <img src="../../assets/img/logo_admin.png" alt="">
    </div>
 <el-menu style="width:231px" background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
      <!-- 导航组件 -->
      <el-menu-item>
          首页
      </el-menu-item>
      <!-- 二级导航 -->
      <el-submenu >
          <!-- 具名插槽 -->
          <span slot='title' index="1">内容管理</span>
          <!-- 放置 el-menu-item -->
          <el-menu-item index="1-1">发布文章</el-menu-item>
          <el-menu-item index="1-2">内容列表</el-menu-item>
          <el-menu-item index="1-3">评论列表</el-menu-item>
          <el-menu-item index="1-4">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu>
          <span slot='title' index="2">粉丝管理</span>
          <el-menu-item index="2-1">图文数据</el-menu-item>
          <el-menu-item index="2-2">粉丝画像</el-menu-item>
          <el-menu-item index="2-3">粉丝概况</el-menu-item>
          <el-menu-item index="2-4">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>
          账户信息
      </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {

}
</script>

<style lang = 'less' scoped>
    .layout-aside {
    width: 230px;
    .title {
        text-align: center;
        background-color: #2e2f32;
        padding: 10px 0;
        img {
            height: 35px;
        }

    }
}
</style>
