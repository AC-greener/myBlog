<template>
  <div class="blogWrapper">
    <header>
      <h1 class="header">
        My Blog
      </h1>
      <div class="category">
        <div><router-link to="/" title="首页"><i class="iconfont-sm">&#xe61b;</i></router-link></div>
        <div><router-link to="/blog" title="我的博客"><i class="iconfont-sm">&#xe61c;</i></router-link></div>
        <div><router-link to="/comment" title="留言板"><i class="iconfont-sm">&#xe744;</i></router-link></div>
        <div><a href="https://codepen.io/ac-greener/" title="codepen"><i class="iconfont-sm">&#xe65b;</i></a></div>
        <div><a href="https://github.com/AC-greener" title="github"><i class="iconfont-sm">&#xe6a4;</i></a></div>
      </div>
    </header>
    <article style="width:100%">
      <div class="articleList">
        <div class="article" >
          <a href="#" class="more">more</a>
          <div class="imgWrapper">
            <img src="http://lorempixel.com/150/150/fashion/" alt="">
          </div>
          <div class="articleDetail">
            <div class="acticleName"><h1>爱仕达大所大多撒多</h1></div>
            <hr class="hr">
            <div class="acticleTitle"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing el
              it. Amet ducimus totam quasi nam porro sed.</p> </div>
          </div>
        </div>

      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  components: {
    
  }
}
</script>

<style lang='scss' >
  a {
    text-decoration: none;
  }
  .blogWrapper {
    width: 100%;
    height: 800px;
    background-color: #CDE;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .blogWrapper .header {
    padding: 30px;
    border: 1px solid red;
    color: #428bca;
    text-align: center;
    font-size: 62px;
    font-family: "Pacifico";
  }
  .category {
    display: flex;
    justify-content: center;
  }
  .category div {
    margin: 14px;
  }
  .articleList {
    width: 80%;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
  }
  .article {
    border: 1px solid red;
    position: relative;
    width: 90%;
    margin: 20px;
    background-color: white;
    border-radius: 150px;
  }
  .article div {
    margin: 20px;
    margin-left: 60px;
  }
  .acticleName {
    color: #428bca;
    font-size: 20px;
  }
  .acticleTitle p{
    border: 1px solid red;
    width: 96%;
    font-size: 15px;
    color: #888 !important;
  }
  .hr {
    background-color: #428bca;
    width: 88%;
    margin: 0 auto;
    margin-left: 60px;
  }
  .article .articleDetail {
    margin-left: 110px;
  }
  .more {
    position: absolute;
    display: block;
    height: 150px;
    line-height: 150px;
    text-align: center;
    width: 100%;
    background-color: #FFF;
    font-size: 48px;
    font-style: italic;
    opacity: 0;
    color: #428bca !important;
    transition: all 0.4s;
    text-decoration: none !important;
    border-radius: 150px;
    font-family: "Pacifico";
  }
  .article .more:hover {
    opacity: 1;
    img{
        width: 160px;
      }
  }
  .imgWrapper {
    position: absolute;
    border: 1px solid red;
    left:-60px;
    top:-21px;
  }
  .imgWrapper img {
    clip-path: circle(50%);
  }
</style>
