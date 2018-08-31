<template>
<div>
    <section  class="introduce">
    <div class="header">
      <div class="imgWrap">
        <img class="img" src="@/assets/img/me.jpg" alt="">
      </div>
      <div>
        <h2>我是朱通通</h2>
        <h3>陕西科技大学大三学生一枚~</h3>
        <h3>热爱前端开发，喜欢追逐新技术</h3>
      </div>
    </div>
  </section>
  <section class="commentWrap">
    <div style="border:1px solid red;">
      <h1>打个招呼吧</h1>
      <h2>你可以发送 Email 至 1053673440@qq.com 联系我。</h2>
      <h2>或者在下方留言与我交流。</h2>
    </div>
    <div class="comment">
      <div class="fromWrap">
        <form action="" class="form">
          <div style="margin-bottom:30px">
            <input style="width:25%" type="text" placeholder="您的大名">
            <input style="width:25%"  type="email" placeholder="邮箱">
          </div>
          <div style="margin-bottom:30px">
            <textarea style="width:50%" name="" id="" cols="30" rows="10" placeholder="留言内容"></textarea>
          </div>
          <div style="margin-bottom:30px; ">
            <button style="width:25%">提交留言</button>
          </div>
        </form>
      </div>
    </div>

  </section>
  <section></section>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  * {
    font-family: "merriweather",SimSun,"宋体",serif;
    text-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  section {
    margin-bottom: 20px;
  }
  .img {
    clip-path: circle(50%);
    height:140px; 
    width:140px;
  }
  .header {
    /* border: 1px solid red; */
    height: auto;
    margin-top: 140px;
    text-shadow: 0 2px 5px rgba(0,0,0,0.2);
    text-align: center;
  }
  .introduce {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 800px;
    color: #fff;
    background-image: url('http://v5.res.dandyweng.com/images/backgrounds/intro.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom center;
    background-repeat: no-repeat
  }


  .commentWrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 800px;
  }
  .commentWrap  h1 {
    font-size: 50px;
  }
  .comment {
    margin-top:20px;
    padding: 20px;
    height: 500px;
    width: 50%;
    background-image: url(http://v5.res.dandyweng.com/images/patterns/envelope-border.png);
    border-radius: 10px;
  }
  .fromWrap {
    color: white;

    height: 100%;
    width: 100%;
    margin: 20px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
  }
  input, textarea {
    border: solid 2px #dbbfc3;
    border-radius: 10px;
  }
  input:focus, textarea:focus {
    border: solid 2px blue;
    border-radius: 10px;
  }
 .fromWrap button {
   border-radius: 10px;
   border: solid 2px #a55f67;
   background-color: #a55f67;
 }
 input, button {
   height: 40px;
 }
</style>

