<template>
  <div class="detailBlogWrapper">
    <header>
         <div class="category">
        <div><router-link to="/" title="首页"><i class="iconfont-sm">&#xe61b;</i></router-link></div>
        <div><router-link to="/blog" title="我的博客"><i class="iconfont-sm">&#xe61c;</i></router-link></div>
        <div><router-link to="/comment" title="留言板"><i class="iconfont-sm">&#xe744;</i></router-link></div>
        <div><a href="https://codepen.io/ac-greener/" title="codepen"><i class="iconfont-sm">&#xe65b;</i></a></div>
        <div><a href="https://github.com/AC-greener" title="github"><i class="iconfont-sm">&#xe6a4;</i></a></div>
      </div>
      <h1 class="header">
        {{article.articleName}}

      </h1>
      <div class="createTime">时间 {{article.createTime.replace('/', '.').replace('/', '.')}}&nbsp;&nbsp;阅读 {{this.pv}}&nbsp;&nbsp;评论 {{commentList.length}}&nbsp;&nbsp;喜欢 12</div>
   
    </header>
      
    <article class="articleContent" v-html="article.articleContent">
    </article>  
        <div class="commentRight" >
          <header>
            <h1><strong>评论区</strong></h1>
          </header>
        <form class="doComment" ref="form">
          <div>
            <img class="img" src="@/assets/img/user.png" alt="用户头像  ">
            <input style="margin-left:100px; margin-top:-50px; display:block" name="userName"  type="text" placeholder="在此输入您的大名">
          </div>
          <div>
            <textarea name="content" id=""  rows="5" style="margin-right:10%; width:100%;" placeholder="我也来说几句" ></textarea>
          </div>
          <div>
            <input type="email" placeholder="Email地址" name="email">
            <button type="button" @click="handleButtonClick">提交</button>
          </div>
        </form>
        <div class="peopleCommentWrap" v-for="(item, index) in commentList" :key="index">
          <div>
            <img class="img" src="@/assets/img/user.png" alt="用户头像  ">
            <span class="userName">{{item.userName}}</span>
          </div>
          <div class="peopleComment">
            {{item.content}}
          </div>
          <div class="doLike">
            <span class="like">喜欢</span>
            <span class="dislike" style="margin-left:50px">不喜欢</span>
          </div>
        </div> 
    </div> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "BlogDetail",
  data() {
    return {
      article: {},
      commentList: [],
      pv: 0
    }
  },
  methods: {
    findArticle() {
      let id = this.$route.params.id;
      let articleList = this.$store.state.articleList;
      for(let i = 0; i < articleList.length; i++) {
        if(articleList[i]._id === id) {
          this.article = articleList[i];
          console.log(this.article)
          break;
        }
      }
    },
    handleButtonClick() {
      let formElement = this.$refs.form
      let data = {
        'userName': '',
        'email': '',
        'content': '',
        'createTime': '',
        'id': ''
      }
      data.userName = formElement.elements['userName'].value
      data.email = formElement.elements['email'].value
      data.content = formElement.elements['content'].value
      data.id = this.article._id
      data.createTime = new Date().toLocaleString()
      console.log(data)
      this.postCommentData(data)
    },
    postCommentData(data) {
      axios.post('http://localhost:3000/articleComment', data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
    },
    getCommentList() {
      axios.get('http://localhost:3000/articleComment')
        .then(this.getCommentListSucc)
        .catch(function(error) {
          console.log(error)
        })
    },
    getCommentListSucc(res) {
      let data = res.data;
      this.commentList = data.filter(this.filterCommentList);
      console.log("thisArticleCommentList",this.commentList);
    },
    filterCommentList(item) {
      let thisArticleId = this.article._id;
      return item.id == thisArticleId
    },
    updateArticlePv(data) {
      let that = this
      axios.post('http://localhost:3000/updateArticlePV', data)
        .then(function(response) {
          that.pv = response.data.pv
          // console.log(response.data.pv)
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  },
  mounted() {
    this.findArticle()
    this.updateArticlePv({_id: this.article._id})
    this.getCommentList()
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
    // border: 1px solid red;
    text-align: center;
    font-size: 15px;
    font-family: "Pacifico";
    color: #333333a8;
  }
  .articleContent {
    width: 50%;
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
    border: 1px solid red;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #BCD;

  }
  .doComment {
    width: 80%;
    display: flex;
    // height: 360px;
    flex-direction: column;
    background-color: white;
    margin: 20px;
    padding-bottom: 18px;
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
  }
  .peopleCommentWrap div {
    margin-left: 40px;
  }
  .userName {
    position: absolute;
    margin-left: 16px; 
    margin-top: 26px; 
  }
  .doLike {
    margin-bottom: 10px;
    margin: 10px;
  }
</style>

