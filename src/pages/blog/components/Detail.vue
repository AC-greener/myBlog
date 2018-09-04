<template>
  <div class="detailBlogWrapper">
    <header>
      <h1 class="header">
        深入理解JavaScript闭包
        
      </h1>
      <div class="createTime">--By zhutongtong on June 24, 2017, 3642 人读过</div>
      <div class="category">
        <div><router-link to="/" title="首页"><i class="iconfont-sm">&#xe61b;</i></router-link></div>
        <div><router-link to="/blog" title="我的博客"><i class="iconfont-sm">&#xe61c;</i></router-link></div>
        <div><router-link to="/comment" title="留言板"><i class="iconfont-sm">&#xe744;</i></router-link></div>
        <div><a href="https://codepen.io/ac-greener/" title="codepen"><i class="iconfont-sm">&#xe65b;</i></a></div>
        <div><a href="https://github.com/AC-greener" title="github"><i class="iconfont-sm">&#xe6a4;</i></a></div>
      </div>
    </header>
    <article class="articleContent">
因为习惯问题，我每天睡觉之前都会打开公众号后台，看看后台消息。可能有些没有来得及回，但都有查看。过后，要么抽时间回复过去，要么梳理成文。
前天晚上，我收到这样一条消息:
"影子，你说在大学是不是一定就要化妆，要把自己打扮得很前卫时髦，难道自然朴素一点不可以吗？"
女生正处在大一，经常在食堂被某些同学叫成土包子，同学也不太愿意和她坐在一起。
还扬言说:"她拉低了她们的平均颜值。"
后来，女孩给我发了一张没有经过任何ps的素颜照。
我看了照片觉得，并没有她同学描述的那样不可见人，只是纯粹的没化妆，眼睛有些小，额头冒了几颗痘。
不够惊艳，但也不至于在平均线以下的。

怎么说呢，没有人规定上大学的女生就一定要化妆吧。至少我身边大学朋友素颜的，一抓一大把。

她们依旧优秀，参加各种活动，被成功保研，或者毕业后找到一份不错的工作等等，她们一个个活得闪亮又迷人。

她们平时也不化妆，但是没人会把"土"和她们联系在一起，因为她们展示给别人的从来不是她们的妆容，而是自己的能力以及对待生活的那种态度。

说实话，我很喜欢那种自信的姑娘。那种气质不是单单依靠浓妆艳抹熏出来的，而是从骨子里透出来的，不佯装也不做作。很轻易就索取掉了别人的好感。

在我个人字典里，把"美"是分等级的。相貌美，我会夸她"好看"，骨子美，我不吝于用"美好"这类词汇形容她，人美心善，我会把"丰盈"二字送给她。

"美好"是比"好看"更有质地，而"丰盈"是在夸别人时，我能想到的最高级的形容词了。

我始终觉得，由内二外散发出的那种优雅和自信，才是性价比最高的一款化妆品。

02

我记得以前也有学妹问过我类似的问题:

"身边人都化妆，我应不应该也跟随大潮？"

我当时的回答是:没必要，自己怎么舒服怎么来，但化妆这个技巧还是要学的。

并不是身边人化妆，你就跟着化妆。你的一举一动从来不应该被别人主导，而是某天你觉得自己需要化妆，你就描描眉，没觉得必要时，就将自己收拾得干净淡雅些。

化妆这件事情，并不是多么有优越的事情，它更多的是展现自身美的一种方式。有些人靠着化妆来弥补自己内心的自卑，而有的人觉得化妆只是画龙点睛之作。

我有选择不化的权力，也有选择化的自觉。

毕竟呀，美人，在骨不在皮。

03

可能很多人看到这里，觉得我是站在"素颜"这方的。

不是的。

    </article>
  </div>
</template>

<script>
export default {
  name: "BlogDetail"
}
</script>

<style lang='scss'>

 $color: #428bca;
  * {
    background-color: #BCD;
  }
  a {
    text-decoration: none;
  }
  .detailBlogWrapper {
    width: 100%;
    height: 1800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .detailBlogWrapper .header {
    padding: 30px;
    color: $color;
    text-align: center;
    font-size: 52px;
    font-family: "Pacifico";
  }
  .category {
    display: flex;
    justify-content: center;
  }
  .category div {
    margin: 14px;
  }
  .createTime {
    padding-left: 100px;
    font-size: 22px;
    font-family: "Pacifico";
    color: #333;
  }
  .articleContent {
    width: 60%;
    line-height: 25px;
    word-spacing: 5px;
  }
</style>

