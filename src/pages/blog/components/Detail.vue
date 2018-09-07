<template>
  <div class="detailBlogWrapper">
    <header>
      <h1 class="header">
        {{article.name}}
        
      </h1>
      <div class="createTime">——By zhutongtong on 2018-08-24, 3642 人读过</div>
      <div class="category">
        <div><router-link to="/" title="首页"><i class="iconfont-sm">&#xe61b;</i></router-link></div>
        <div><router-link to="/blog" title="我的博客"><i class="iconfont-sm">&#xe61c;</i></router-link></div>
        <div><router-link to="/comment" title="留言板"><i class="iconfont-sm">&#xe744;</i></router-link></div>
        <div><a href="https://codepen.io/ac-greener/" title="codepen"><i class="iconfont-sm">&#xe65b;</i></a></div>
        <div><a href="https://github.com/AC-greener" title="github"><i class="iconfont-sm">&#xe6a4;</i></a></div>
      </div>
    </header>
    <article class="articleContent">
      {{article.content}}
    </article>
        <div class="commentRight" >
          <header>
            <h1><strong>评论区</strong></h1>
            <!-- <h3 style="font-size:24px"><strong>已有100人在此留言</strong></h3> -->
          </header>
        <form class="doComment" action="" method="post">
          <div>
            <img class="img" src="@/assets/img/user.png" alt="用户头像  ">
            <input style="margin-left:100px; margin-top:-50px; display:block" type="text" placeholder="在此输入您的大名">
          </div>
          <div>
            <textarea name="" id=""  rows="5" style="margin-right:10%; width:100%;" placeholder="我也来说几句" ></textarea>
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
export default {
  name: "BlogDetail",
  data() {
    return {
      article: {}
    }
  },
  methods: {
    findArticle() {
      let id = this.$route.params.id;
      let articleList = this.$store.state.articleList;
      for(let i = 0; i < articleList.length; i++) {
        if(articleList[i]._id === id) {
          this.article = articleList[i];
          break;
        }
      }
      console.log(this.article)
    }
  },
  mounted() {
    this.findArticle()
  }
}
</script>

<style lang='scss'>

 $color: #428bca;
  
  .category a {
    color: #fff; 
    text-decoration: none;
  }
  i:hover {
    color: #ddd;
    transform: rotate(-17deg);
  }
  .detailBlogWrapper {
    background-color: #BCD;
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
    background: #bbccee9c;
  }
 
 * {
      font-family: "merriweather",SimSun,"宋体",serif;
  }
   header {
    font-size: 30px;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 60px;
  }
  .img {
    clip-path: circle(50%);
    width: 76px;
    height: 76px;
  }
  .commentRight {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1800px;
    background-color: #BCD;

  }
  .doComment {
    width: 80%;
    display: flex;
    // height: 360px;
    flex-direction: column;
    background-color: white;
    margin: 20px;
    padding-bottom: 25px;
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

