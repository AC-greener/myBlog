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
        axios.get('http://localhost:3000/getCommentList')
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
  }
  .table {
    width: 100%;
    border: 1px solid red;
  }
</style>
