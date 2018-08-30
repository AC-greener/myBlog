<template>
  <div style="height:500px; padding:10px">
  <form action="">
    <el-row>
      <el-col :span="4">
        <div class="labelWrap">
          <label for="acticleName">添加分类:</label>
        </div>
      </el-col>
      <el-col :span="8" offset="-6" >
        <div >
          <el-input  placeholder="请输入分类名称" id="acticleName" name="acticleName"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" >
        <div class="labelWrap">
          <label for="acticleCategory">删除分类</label>
        </div>
      </el-col>
      <el-col :span="8" offset="-6" >
        <div >
          <el-select v-model="value"  placeholder="请选择" id="acticleCategory" name="acticleCategory">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
  </form>
  </div>
</template>

<script>
export default {
  name: 'AdminCategory',
  data () {
    return {
    }
  }
}
</script>
<style scoped>

  .labelWrap {
    padding-left: 20px;
     text-align:center; 
     height:40px; 
     line-height:40px 
  }
  * {
    color: black;
    background-color:white;
  }
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
  .row-bg {
    padding: 10px 0;
  }
</style>
