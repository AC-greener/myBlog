<template>
<el-container>
  <el-header >
    <el-row>
       <el-col :span="12">
         <div> 
          <h2>Element UI</h2>
        </div>
      </el-col>
       <el-col :span="12">
         <div> 
          <h3 style="float:right">admin </h3>
        </div>
      </el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-aside width="140px" style=" height:800px" >
      <admin-left/>
    </el-aside>
    <el-container>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer style="background-color:yellow">Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import AdminHeader from '@/pages/admin/components/Header'
import AdminLeft from '@/pages/admin/components/Left'
export default {
  name: 'Admin',
  components: {
    AdminHeader,
    AdminLeft
  },
    data() {
      return {
        
      }
    }
}
</script>
<style scoped>
* {
  color: aliceblue;
  background-color:#303133;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.el-header {
    line-height: 40px;
  }
  
  .el-aside {

  }
  /* .el-row {
    margin-bottom: 20px;
  } */
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


