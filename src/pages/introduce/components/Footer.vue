<template>
  <section class="footer">
    <!-- <div>
      你可以在下面这些网站联系到我
      <div>
      <i class="iconfont">&#xe69a;</i>
      <i class="iconfont">&#xe6a4;</i>
      <i class="iconfont">&#xe6d4;</i>
      </div>
    </div> -->
    <div><a href="#">回到顶部</a></div>
    <div>
      <h2>您是本站的第 {{this.pv}} 位访客</h2>
      <h2>Designed by zhutongtong.</h2>
      <h2>Copyright ©2018 zhutongtong.cn All Rights Reserved.</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroduceFooter',
  props: {
    pv: Number
  }
}
</script>

<style scoped>

 * {
    font-family: "merriweather",SimSun,"宋体",serif;
    text-shadow: 0 2px 5px rgba(0,0,0,0.2); 
    color: rgba(255,255,255,0.55);
    text-align: center;
  }
  .footer {
    width: 100%;
    height: 300px;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('http://v5.res.dandyweng.com/images/patterns/concrete_wall.webp');

  }
  a {
    text-decoration-line: none
  }
</style>

