<template>
  <div class="blogWrapper">
    <blog-header />
    <article style="width:100%">
      <div class="articleList">
        <div class="article" v-for="(item, index) in articleList" :key="index">
          <router-link :to='"/blog/article/" + item._id' class="more">more</router-link>
          <div class="imgWrapper">
          </div>
          <div class="articleDetail">
            <div class="acticleName"><h1>{{item.articleName}}</h1></div>
            <hr class="hr">
            <div class="acticleTitle"> <p>{{item.articleTitle}}</p></div>
          </div>
        </div>
      </div>
    </article>
    <div class="pagination">
      <span class="prev">上一页</span>
      <span class="next" @click="handleNextClick">下一页</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BlogHeader from '@/pages/blog/components/Header'
export default {
  name: 'Blog',
  components: {
    BlogHeader: BlogHeader
  },
  data() {
    return {
      articleList: [],
      page: 1,
      totalPage: 1,
    }
  },
  methods: {
    getArticleList() {
      axios.get('http://localhost:3000/getArticleList')
          .then(this.getArticleListSucc)
          .catch(function(err) {
            console.log(err);
          })
    },
    getArticleListSucc(res) {
      console.log(res.data)
      let data = res.data;
      this.$store.commit('changeArticleList', data)
    },
    getPageInfo() {
      let list = this.$store.state.articleList
      this.totalPage = Math.ceil(list.length/2)
      console.log(this.totalPage)
      for(let i = (this.page-1)*2; i < this.page*2; i++) {
          if(list[i]) {
            this.articleList.push(list[i])
          }
        }
        this.page++;
    },
    handleNextClick() {
      if(this.page <= this.totalPage) {
        console.log(this.$route.state.articleList)
        for(let i = (this.page-1)*2; i < this.page*2; i++) {
          // if(this.$route.state.articleList[i]) {
          //   this.articleList.push(this.$route.state.articleList[i])
          // }
        }
        this.page++;
      } else {
        this.page = 1;
      }
    }
  },
  mounted() {
    this.getArticleList()
    this.getPageInfo()
  }
}
</script>

<style lang='scss' >
  $color: #428bca;
 
  .blogWrapper {
    width: 100%;
    background-color: #CDE;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    position: relative;
    height: 150px;;
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
    color: $color;
    font-size: 20px;
  }
  .acticleTitle p{
    width: 96%;
    font-size: 15px;
    color: #888 !important;
  }
  .hr {
    background-color: $color;
    width: 88%;
    height: 3px;
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
    color: $color ;
    transition: all 0.4s;
    text-decoration: none ;
    border-radius: 150px;
    font-family: "Pacifico";
  }
  .article:hover {
    .imgWrapper {
      transform: rotate(5deg);
    }
    a {
      opacity: 1;
    }
    img{
        width: 160px;
      }
  }
  .imgWrapper {
    position: absolute;
    // border: 1px solid red;
    border-radius: 50%;
    padding: 10px;
    background-color: #CDE;
    left: -85px;
    top: -30px;
  }
  .imgWrapper img {
    clip-path: circle(50%);
  }
  .pagination {
    height: 300px;
  }
</style>
