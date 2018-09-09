<template>
 <aside>
   <ul>
     <li><router-link to="/admin/articleAdmin">添加文章</router-link></li>
     <li><router-link to="/admin/acticleAdminList">文章列表</router-link></li>
     <li><router-link to="/admin/categoryAdmin">添加分类</router-link></li>
     <li><router-link to="/admin/categoryAdminList">分类列表</router-link></li>
     <li><router-link to="/admin/commentAdminList">评论列表</router-link></li>
   </ul>
 </aside>
</template>

<script>
export default {
  name: 'AdminAside',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
a {
  text-decoration-line: none;
}
aside {
  width: 120px;
  height: 800px;
  background-color: bisque;
}
</style>
