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
        <div class="doComment">
          <div>
            <input type="text" placeholder="您的大名">
          </div>
          <div>
            <textarea name="" id="" cols="30" rows="10" 我也来说几句></textarea>
          </div>
          <div>
            <input type="email" placeholder="Email地址">
            <button>提交</button>
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
  header {
    font-size: 30px;
    text-align: center;
    border: 1px solid red;
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
    border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .doComment {
    border: 1px solid red;
    height: 300px;
    width: 80%;
    display: flex;
    flex-direction: column;
  }
</style>

