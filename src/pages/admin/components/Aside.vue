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
  display: block;
  color: black;
  text-decoration-line: none;
}
a:hover {
  text-decoration-line: underline;
}
aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 800px;
  background-color: #a7a199;
}
aside a {
  margin-top: 20px;
}
</style>
