<template>
  <!-- 卡片组件 -->
  <el-card>
      <!-- 面包给了卡片的具名插槽 -->
      <bread-crumb slot="header">
      <!-- 插槽内容 -->
      <template slot="title">评论列表</template>
      </bread-crumb>
      <!-- body内容 -->
      <el-table :data="list">
          <!-- 列组件 lable -->
          <el-table-column prop="title" width="550" label="标题"></el-table-column>
          <!-- 格式化属性 -->
          <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
          <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
          <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
          <el-table-column label="操作">
              <!-- 放组件 作用域插槽 row column $index-->
             <template slot-scope="obj">
               <el-button type="text" size="small">修改</el-button>
               <el-button type="text" size="small" @click="openOrClose(obj.row)">{{ obj.row.comment_staus ? '关闭评论' : '打开评论' }}</el-button>
             </template>
          </el-table-column>
      </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    //   axios 是默认是get类型
    // query参数 / 路由参数 地质参数 get参数 axios params
    // body参数 给 data
    // 身份信息 headers
    getComment () {
      this.$axios({ url: '/articles', params: { response_type: 'comment' } }).then(result => {
        this.list = result.data.results //  获取评论列表数据给本身date
      })
    },
    // 定义一个布尔值转化方法
    formatterBool (row, column, cellValue, index) {
      // row 当前行数据
      // column 当前列属性
      // cellValue 当前单元格的值
      // index 当前下标
      return cellValue ? '正常' : '关闭'
    },
    // 打开或者关闭评论方法
    openOrClose (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      // $confirm 确定时 进入then 取消时进入catch
      this.$confirm(`您是否确定${mess}评论吗`).then(() => {
        // 用户确定要用接口
        // 地址参数/query参数/路由参数 => 可以在params中写 也可以直接拼接到url地址上
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: {
            article_id: row.id
          },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(result => {
          // 打开或者关闭评论成功之后
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.getComment() // 重新请求列表
        })
      })
    }
  },
  created () {
    //   调用请求数据方法
    this.getComment()
  }
}
</script>

<style>

</style>
