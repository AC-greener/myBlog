<template>
    <div class="container">
    <table class="table">
      <thead>
        <tr>
          <td>用户名</td>
          <td>邮箱</td>
          <td>内容</td>
          <td>评论时间</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in commentList" :key="index">
          <td>{{item.userName}}</td>
          <td>{{item.email}}</td>
          <td>{{item.content}}</td>
          <td>{{item.date}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'AdminCommentList',
    data() {
      return {
        commentList: []
      }
    },
    methods: {
      getCommentList() {
        axios.get('/getCommentList')
          .then(this.getCommentListSucc)
          .catch(function(err) {
            console.log(err);
          })
      },
      getCommentListSucc(res) {
        this.commentList = res.data.reverse();
      }
  },
  mounted() {
    this.getCommentList();
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
