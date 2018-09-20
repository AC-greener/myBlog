<template>
  <div class="blogWrapper">
    <blog-header />
    <article style="width:100%">
      <div class="articleList">
        <div class="article" v-for="(item, index) in articleList" :key="index">
          <router-link :to='"/blog/article/" + item._id' class="more">more</router-link>
          <div class="imgWrapper">
            <!-- <img :src="'@/assets/img/articleImg'+ index + '.jpg'" alt="" > -->
            <img :src='item.imgSrc' alt="" >
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
      <span class="prev animated fadeInLeft" @click="changePageListPrev" v-show="page!=1"><i class="iconfont-sm" style="color: #428bca;">&#xe613;</i></span>
      <span style="color:rgba(124, 122, 122, 0.8);">{{this.page}} / {{this.totalPage}}</span>
      <span class="next animated fadeInRight" @click="changePageListNext" v-show="page!=totalPage" ><i class="iconfont-sm" style="color: #428bca;">&#xe651;</i></span>
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
      list:[]
    }
  },
  methods: {
    getArticleList() {
      axios.get('http://localhost:3000/getArticleList')
          .then(this.getArticleListSucc)
          .then(this.initPageList)
    },
    getArticleListSucc(res) {
      let data = res.data;
      this.list = data
      this.randomImg(this.list)
      console.log(this.list)
      this.totalPage = Math.ceil(data.length/5)
      this.$store.commit('changeArticleList', data)
    },
    changePageListNext() {
      if(this.page < this.totalPage) {
        this.page++;
        this.articleList = []
        for(let i = (this.page-1)*5; i < this.page*5; i++) {
          if(this.list[i]) {
            this.articleList.push(this.list[i])
          }
        }
      }
    },
    changePageListPrev() {
      if(this.page > 1) {
        this.page--;
        this.articleList = []
        for(let i = (this.page-1)*5; i < this.page*5; i++) {
          if(this.list[i]) {
            this.articleList.push(this.list[i])
          }
        }
      }
    },
    initPageList() {
      for(let i = (this.page-1)*5; i < this.page*5; i++) {
          if(this.list[i]) {
            this.articleList.push(this.list[i])
          }
        }
    },
    randomImg(list) {
      let listLength = list.length;
      for(let i = 0; i < listLength; i++) {
        let number = Math.floor(Math.random()*13 + 1);
        let imgSrc = '/static/img/articleImg' + number + '.jpg'
        list[i].imgSrc = imgSrc
        list[i].imgNumber = number
      }
    }
  },
  mounted() {
    this.getArticleList()
  }
}
</script>

<style lang='scss' >
  $color: #428bca;
  img {
    width:150px; 
    height:150px
  }
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
        height: 160px;
      }
  }
  .imgWrapper {
    position: absolute;
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
    font-family: "Pacifico";
    height: 300px;
  }
  .pagination .prev:hover {
    cursor: pointer;
  }
  .pagination .next:hover {
    cursor: pointer;
  }
</style>
