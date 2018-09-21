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
      <h1 class="header animated zoomIn">
        {{article.articleName}}
      </h1>
      <div class="createTime">时间 {{article.createTime.replace(/\//g, '.')}}&nbsp;&nbsp;阅读 {{this.pv}}&nbsp;&nbsp;评论 {{commentList.length}}&nbsp;&nbsp;</div>
   
    </header>
      
    <article class="articleContent" v-html="article.articleContent">
     
    </article>  
        <div class="commentRight" >
          <header>
            <h1><strong>评论区</strong></h1>
          </header>
        <form class="doComment" ref="form">
          <div>
            <img class="img" src="/static/img/user.png" alt="用户头像  ">
            <input style="margin-left:100px; margin-top:-50px; display:block" name="userName"  type="text" placeholder="在此输入您的大名*" required>
          </div>
          <div>
            <textarea name="content" id=""  rows="5" style="margin-right:10%; width:100%;" placeholder="我也来说几句*" required></textarea>
          </div>
          <div>
            <input type="email" placeholder="Email地址" name="email">
            <button ref="btn" type="button" @click="handleFormSubmit">提交</button>
          </div>
        </form>
        <div class="peopleCommentWrap" v-for="(item, index) in commentList" :key="index">
          <div>
            <img class="img" src="/static/img/user.png" alt="用户头像  ">
            <span class="userName">{{item.userName}} 说：</span>
            <span class="time">{{item.createTime}}</span>
          </div>
          <div class="peopleComment">
         {{item.content}}
          </div>
          <!-- <div class="doLike">
            <span class="like">喜欢</span>
            <span class="dislike" style="margin-left:50px">不喜欢</span>
          </div> -->
      </div> 
    </div> 
    <model-box v-show="showModelBox" @closeBox='close'/>
  </div>
</template>

<script>
import ModelBox from '@/components/ModelBox'
import axios from 'axios'
export default {
  name: "BlogDetail",
  components: {
    ModelBox
  },
  data() {
    return {
      article: {},
      commentList: [],
      pv: 0,
      showModelBox: false
    }
  },
  methods: {
    domParser(data) {
      let parser = new DOMParser();
      this.article.articleContent = parser.parseFromString(data, "application/xml")
    },
    findArticle() {
      let id = this.$route.params.id;
      let articleList = this.$store.state.articleList;
      for(let i = 0; i < articleList.length; i++) {
        if(articleList[i]._id === id) {
          this.article = articleList[i];
          // this.article.articleContent.toString()
          // this.domParser(this.article.articleContent)
          break;
        }
      }
    },
    handleFormSubmit() {
      let formElement = this.$refs.form
      let btn = this.$refs.btn
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
      if(data.userName == '' || data.content == '') {
          btn.classList.toggle("animated");
          btn.classList.toggle("shake");
          setTimeout(function() {
            btn.classList.toggle('animated')
            btn.classList.toggle('shake')
          },1000)
      } else {
        this.postCommentData(data)
        formElement.elements['userName'].value = ''
        formElement.elements['email'].value = ''
        formElement.elements['content'].value = ''
      }
    },
    postCommentData(data) {
      var that = this;
      axios.post('http://localhost:3000/articleComment', data)
        .then(function(response) {
          console.log(response);
          that.showModelBox = true
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
      // console.log("thisArticleCommentList",this.commentList);
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
    },
    close() {
      this.showModelBox = false
    }
  },
  mounted() {
    this.findArticle()
    this.updateArticlePv({_id: this.article._id})
    this.getCommentList()
  }
}
</script>

<style lang='scss' scoped>

  $color: #428bca;
  h1, h2, h3, h4, h5 {
    font-weight: bold;
  }
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
  }
  pre {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border:  1px solid grey;
    border-radius: 5px;
  }
  ol, ul {
    padding-left: 30px;
    // list-style: none;
  }
  img {
    border-radius: 4px;
    width: 300px;
  }
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
    padding: 20px;
    width: 54%;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 25px;
    word-spacing: 5px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.84);
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
    background-color: #BCD;
    margin-bottom: 30px;
  }
  .doComment {
    width: 80%;
    display: flex;
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
  .time {
    position: absolute;
    font-size: 12px;
    color: #969696;
    margin-left: 16px;
    margin-top: 52px;
  }
  .doLike {
    margin-bottom: 10px;
    margin: 10px;
  }
</style>

