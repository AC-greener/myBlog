<template>
  <div style="height:500px; padding:10px">
    <form ref="form">
      <div>
        Name：<input type="text" name="articleName">
      </div>
      <div>
        摘要：<input type="text" name="articleTitle">
      </div>
      <div>
        文章分类：<input type="text" name="articleCategory">
      </div>
      <div>
        内容：<textarea name="articleContent" id="" cols="30" rows="10"></textarea>
      </div>
      <div>
        <input type="button" value='提交' @click="handleButtonClick" >
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminArticle',
  data () {
    return {
     
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
      data.articleContent  = formElement['articleContent'].value;
      data.articleCategory  = formElement['articleCategory'].value;
      data.createTime = new Date().toLocaleString();
      this.postArticleData(data);
    },
    postArticleData(data) {
      axios.post('http://localhost:3000/addArticle', data)
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
 
</style>
