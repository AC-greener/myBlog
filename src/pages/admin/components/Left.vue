<template>
  <div>
    <router-link v-for="(item, index) in list" :to='item.path' :key="index">
      <el-row >
        <i :class="item.iconClass"></i> 
        <span class="grid-content bg-purple-dark">{{item.content}}</span>
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
        iconClass: 'el-icon-edit',
        path: '/admin/articleAdmin',
        content: '文章管理'
      },{
        iconClass: 'el-icon-tickets',
        path: '/admin/categoryAdmin',
        content: '分类管理'
      },{
        iconClass: 'el-icon-message',
        path: '/admin/commentAdmin',
        content: '评论管理'
      }]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration-line: none;
}
* {
  color: aliceblue;
  background-color:#303133
}
  .el-row {
    text-align: center;
    /* margin: 20px; */
    margin-top: 30px;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
