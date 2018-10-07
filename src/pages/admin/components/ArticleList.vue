<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <td>名称</td>
          <td>分类</td>
          <td>时间</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in articleList" :key="index">
          <td>{{item.articleName}}</td>
          <td>{{item.articleCategory}}</td>
          <td>{{item.createTime}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'AdminArticleList',
    data() {
      return {
        articleList: []
      }
    },
    methods: {
    getArticleList() {
      axios.get('/getArticleList')
          .then(this.getArticleListSucc)
          .catch(function(err) {
            console.log(err);
          })
    },
    getArticleListSucc(res) {
      let data = res.data;
      this.$store.commit('changeArticleList', data)
      this.articleList = this.$store.state.articleList;
      console.log(this.articleList);
    }
    },
    mounted() {
      this.getArticleList()
    }
  }
</script>
<style scoped>
  .container {
    width: 100%;
    margin-top: 5px;
  }
  .table {
    width: 100%;;
    border-radius: 15px;
    margin-left: 10px;
    padding: 10px;
  }
  .table tr {
    border: 1px solid black;
    height: 40px;
  }
  td {
    padding: 10px;
  }
</style>
