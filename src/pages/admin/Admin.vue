<template>
  <div>
    <admin-header></admin-header>
    <el-row>
      <el-col :span="4"><admin-left class="grid-content bg-purple-dark" /></el-col>
      <el-col :span="18"><router-view class="grid-content bg-purple-dark"/></el-col>
    </el-row>
  </div>
</template>

<script>
import AdminHeader from '@/pages/admin/components/Header'
import AdminLeft from '@/pages/admin/components/Left'
export default {
  name: 'Admin',
  components: {
    AdminHeader,
    AdminLeft
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

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>


