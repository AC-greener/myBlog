<template>
   <div class="container">
      <admin-aside />
      <router-view />
   </div>
</template>

<script>
import AdminHeader from '@/pages/admin/components/Header'
import AdminAside from '@/pages/admin/components/Aside'
export default {
  name: 'Admin',
  components: {
    AdminHeader,
    AdminAside
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    
  }
</style>


