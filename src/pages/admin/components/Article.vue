<template>
  <div class="formWrapper">
    <form ref="form">
      <div>
       <label for="articleName" >名称：</label><input type="text" name="articleName" id="articleName">
      </div>
      <div>
        <label for="articleTitle" >摘要：</label><input type="text" name="articleTitle" id="articleTitle">
      </div>
      <div>
        <label for="articleCategory">分类：</label><input type="text" name="articleCategory" id="articleCategory">
      </div>
      <!-- <div>
       <label for="articleContent" style="position:absolute">内容：</label> <textarea style="margin-left:126px;" name="articleContent"  cols="30" rows="20" id="articleContent"></textarea>
      </div> -->
      <div style="margin-left:-20px;">
        <input type="button" value='提交' @click="handleButtonClick" >
      </div>
    </form>
      <mavon-editor v-model="value"  :ishljs = "true" ref="md"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminArticle',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleButtonClick() {
      let formElement = this.$refs.form.elements;
      let data = {
        'articleName': '',
        'articleTitle': '',
        'articleCategory': '',
        'articleContent': '',
        'createTime': ''
      }
      data.articleName  = formElement['articleName'].value;
      data.articleTitle  = formElement['articleTitle'].value;
      // data.articleContent  = formElement['articleContent'].value;
      data.articleContent = document.getElementsByClassName('v-show-content')[0].innerHTML
      data.articleCategory  = formElement['articleCategory'].value;
      data.createTime = new Date().toLocaleString();
      console.log(document.getElementsByClassName('v-show-content')[0].innerHTML)
      this.postArticleData(data);
    },
    postArticleData(data) {
      axios.post('/addArticle', data)
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
}
</script>
<style scoped>
 .formWrapper {
   width: 100%;
   height: 800px;
   padding: 50px;
 }
  .formWrapper div {
    margin: 20px;
  }
 input[type=text] {
   width: 20%;
   height: 40px;
   padding: 5px;
   border: 1px solid #ccc;
   border-radius: 5px;
   outline: none;
 }
 textarea {
   width: 60%;
   border-radius: 5px;
   outline: none;
 }
 form input:nth-child(1) {
   margin-left: 40px;
 }
 form input:nth-child(2) {
   margin-left: 80px;
 }
 input[type=button] {
   border: none;
   border-radius: 4px;
   border: 1px solid #ccc;
   background-color: #2196f3a1;
   width: 120px;
   height: 40px;
   outline: none;
 }
 input[type=button]:hover {
   background-color: #2196f3f7;
 }
</style>
