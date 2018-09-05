<template>
  <div class="commentWrapper">
    <div class="commentLeft">
      <comment-left />
    </div>
    <div class="commentRight" >
        <header>
          <h1><strong>留言板</strong></h1>
          <h3 style="font-size:24px"><strong>已有{{this.commentList.length}}人在此留言</strong></h3>
        </header>
        <form class="doComment" action="http://localhost:3000/messageBoard" method="get">
          <div>
            <img class="img" src="@/assets/img/user.png" alt="用户头像  ">
            <input style="margin-left:100px; margin-top:-50px; display:block" name="userName" type="text" placeholder="在此输入您的大名">
          </div>
          <div>
            <textarea name="content" id=""  rows="6" style="margin-right:10%; width:100%;" placeholder="我也来说几句" ></textarea>
          </div>
          <div>
            <input type="email" placeholder="Email地址" name="email">
            <button>提交</button>
          </div>
        </form>
        <div class="peopleCommentWrap"  v-for="(item, index) in commentList" :key="index">
          <!-- v-for="(item, index) in commentList" :key="index" -->
          <div>
            <img class="img" src="@/assets/img/user.png" alt="用户头像  ">
            <span class="userName">{{item.userName}} 说：</span>
            <span class="time">{{item.date}}</span>
          </div>
          <div class="peopleComment">
         {{item.content}}
          </div>
          <div class="doLike">
            <div class="like">喜欢</div>
            <div class="dislike" style="margin-left:50px">不喜欢</div>
          </div>
        </div> 
      
    </div> 
  </div>
</template>

<script>
import axios from 'axios'
import CommentLeft from '@/components/Header'
export default {
  name: 'Comment',
  components: {
    CommentLeft
  },
  data() {
    return {
      commentList: [],
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
      console.log(this.commentList)
      // var data = res.data;
      // for(var i = 0; i < data.length; i++) {
      //   var index = data[i].date.lastIndexOf(':');
      //   data[i].date = data[i].date.slice(0, index).replace('T',' ');
      // }
      // this.commentList = data;
      // console.log(this.commentList[this.commentList.length-1])
    }
  },
  mounted() {
    this.getCommentList();
  }
}
</script>

<style scoped>
  * {
      font-family: "merriweather",SimSun,"宋体",serif;
      text-shadow: 0 2px 5px rgba(95, 49, 49, 0.2);
  }
  /* .router-link-active {
    color: red ;
  } */
  .img {
    clip-path: circle(50%);
    width: 76px;
    height: 76px;
  }
  header {
    font-size: 30px;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 60px;
  }
  .commentWrapper {
    width: 100%;
    display: flex;
    position: relative;
  }
  .commentLeft {
    width: 35%;
    position: fixed;
    height: 100%;
  }
  .commentRight {
    margin-left: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ebeef5;
  }
  .doComment {
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 20px;
    padding-bottom: 20px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  }
  .doComment div {
    margin: 10px;
    margin-left: 40px;
  }
  .doComment input, textarea, button {
    background-color: white;
    padding: 5px 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input {
    width: 30%;
    height: 40px;
  } 
  button {
    height: 40px;
    width: 10%;
  }


  .peopleCommentWrap {
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 30px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    padding-bottom: 20px;
  }
  .peopleCommentWrap div {
    margin: 10px;
    margin-left: 40px;
  }
  .userName {

    position: absolute;
    margin-left: 16px; 
    margin-top: 26px; 
  }
  .time {
    position: absolute;
    font-size: 12px;
    color: #969696;
    /* border: 1px solid red; */
    margin-left: 16px;
    margin-top: 52px;
  }
  .doLike {
    border: 1px solid red;
    display: flex;
  }
</style>

