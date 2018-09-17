<template>
    <header>
  
       <h1 class="header animated zoomIn " >
        My Blog
      </h1>
     
      <div class="category animated bounceInRight delay-1s">
        <div><router-link to="/" title="首页"><i class="iconfont-sm">&#xe61b;</i></router-link></div>
        <div><router-link to="/blog" title="我的博客"><i class="iconfont-sm">&#xe61c;</i></router-link></div>
        <div><router-link to="/comment" title="留言板"><i class="iconfont-sm">&#xe744;</i></router-link></div>
        <div><a href="https://codepen.io/ac-greener/" title="codepen"><i class="iconfont-sm">&#xe65b;</i></a></div>
        <div><a href="https://github.com/AC-greener" title="github"><i class="iconfont-sm">&#xe6a4;</i></a></div>
      </div>
    </header>
</template>

<script>
export default {
  name: "BlogHeader"
}
</script>

<style lang='scss'>
  $color: #428bca;

  a {
    text-decoration: none;
    color: #fff;
  }
  .category a:hover {
    color: #ccc;
  }
  .blogWrapper .header {
    padding: 30px;
    color: $color;
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
</style>

