<template>
  <div>
    <router-link v-for="(item, index) in list" :to='item.path' :key="index">
      <el-row>
        <div class="grid-content bg-purple-dark">{{item.content}}</div>
      </el-row>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AdminLeft',
  data () {
    return {
      list: [{
        path: '/admin/articleAdmin',
        content: '文章管理'
      },{
        path: '/admin/categoryAdmin',
        content: '分类管理'
      },{
        path: '/admin/commentAdmin',
        content: '评论管理'
      }]
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
