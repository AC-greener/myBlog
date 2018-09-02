<template>
  <div class="commentWrapper">
    <div class="commentLeft">
      <comment-left />
    </div>
    <div class="commentRight">
        <header>
          <h1><strong>留言板</strong></h1>
          <h3 style="font-size:24px"><strong>已有100人在此留言</strong></h3>
        </header>
        <form class="doComment" action="" method="post">
          <div>
            <img class="img" src="@/assets/img/user.png" alt="用户头像  ">
            <input style="margin-left:100px; margin-top:-50px; display:block" type="text" placeholder="在此输入您的大名">
          </div>
          <div>
            <textarea name="" id=""  rows="10" style="margin-right:10%; width:100%;" placeholder="我也来说几句" ></textarea>
          </div>
          <div>
            <input type="email" placeholder="Email地址">
            <button>提交</button>
          </div>
        </form>
        <div class="peopleCommentWrap">
          <div>
            <img class="img" src="@/assets/img/user.png" alt="用户头像  ">
            <span class="userName">张三</span>
          </div>
          <div class="peopleComment">
            you’re a real cool guy！
            you’re a real cool guy！
            you’re a real cool guy！
            you’re a real cool guy！
            you’re a real cool guy！
            you’re a real cool guy！
            you’re a real cool guy！
            you’re a real cool guy！
            you’re a real cool guy！
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
import CommentLeft from '@/components/Header'
export default {
  name: 'Comment',
  components: {
    CommentLeft
  }
}
</script>

<style scoped>
  * {
      font-family: "merriweather",SimSun,"宋体",serif;
      text-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
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
    height: 800px;
    display: flex;
    position: relative;
  }
  .commentLeft {
    width: 35%;
    position: fixed;
  }
  .commentRight {
    margin-left: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ebeef5;
    height: 1800px;
  }
  .doComment {
    width: 80%;
    display: flex;
    height: 360px;
    flex-direction: column;
    background-color: white;
    margin: 20px;
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
  .doLike {
    border: 1px solid red;
    display: flex;
  }
</style>

