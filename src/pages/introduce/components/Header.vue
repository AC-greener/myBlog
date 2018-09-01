<template>
  <section  class="introduce">
    <div class="header">
      <div class="imgWrap">
        <img class="img" src="@/assets/img/me.jpg" alt="">
      </div>
      <div class="category">
        <div><router-link to="/">首页</router-link></div>
        <div><router-link to="">我的博客</router-link></div>
        <div><router-link to="">留言板</router-link></div>
        <div><router-link to="">我的作品集</router-link></div>
      </div>
      <div class="introduceMe">
        <h2>我是朱通通</h2>
        <h3>陕西科技大学大三学生一枚~</h3>
        <h3>热爱前端开发，喜欢追逐新技术</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroduceHeader',
}
</script>

<style scoped>
  * {
    font-family: "merriweather",SimSun,"宋体",serif;
    text-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  a {
    text-decoration: none;
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
  .category {
    display: flex;
    justify-content: center;
  }
</style>

