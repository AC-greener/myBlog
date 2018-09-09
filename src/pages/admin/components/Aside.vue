<template>
 <aside>
   <ul>
     <li><router-link to="/admin/articleAdmin">文章管理</router-link></li>
     <li>评论管理</li>
     <li>分类管理</li>
   </ul>
 </aside>
</template>

<script>
export default {
  name: 'AdminAside',
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
aside {
  width: 200px;
  min-height: 600px;
  background-color: bisque;
}
</style>
