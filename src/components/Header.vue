<template>
  <section  class="introduce">
    <div class="header">
      <div class="imgWrap">
        <img class="img" src="@/assets/img/me.jpg" alt="">
      </div>
      <div class="category">
        <div><router-link to="/" title="首页"><i class="iconfont-sm">&#xe61b;</i></router-link></div>
        <div><router-link to="/blog" title="我的博客"><i class="iconfont-sm">&#xe61c;</i></router-link></div>
        <div><router-link to="/comment" title="留言板"><i class="iconfont-sm">&#xe744;</i></router-link></div>
        <div><a href="https://codepen.io/ac-greener/" target="_blank" title="codepen"><i class="iconfont-sm">&#xe65b;</i></a></div>
        <div><a href="https://github.com/AC-greener" target="_blank" title="github"><i class="iconfont-sm">&#xe6a4;</i></a></div>
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
   /* .router-link-active {
    color: red ;
  } */
  a {
    color: #fff;
    text-decoration: none;
  }
   a:hover {
    color: #ccc;
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
  .category div {
    margin: 14px;
  }
</style>

