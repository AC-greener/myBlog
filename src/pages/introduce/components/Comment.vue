<template>
    <section class="commentWrap">
    <div >
      <h1>打个招呼吧</h1>
      <h2>你可以发送 Email 至 1053673440@qq.com 联系我。</h2>
      <h2>或者在下方留言与我交流。</h2>
    </div>
    <div class="comment">
      <div class="fromWrap">
        <form  class="form" ref="form">
          <div style="margin-bottom:30px">
            <input style="width:25%" type="text" placeholder="您的大名*" name="userName" required>
            <input style="width:25%"  type="email" placeholder="邮箱" name="email">
          </div>
          <div style="margin-bottom:30px">
            <textarea style="width:50%" id="" cols="30" rows="10" placeholder="留言内容*" name="content" required></textarea>
          </div>
          <div style="margin-bottom:30px;" >
            <button ref="btn" style="width:30%; outline:none" type="button" @click="handleFormSubmit"><i class="iconfont-sm" style="font-size: 26px;">&#xe6a9;</i><span>提交留言</span></button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  name: 'IntroduceHeader',
  methods: {
    handleFormSubmit(e) {
      
      let formElement = this.$refs.form
      let btn = this.$refs.btn
      let data = {
        'userName': '',
        'email': '',
        'content': '',
      }
      data.userName = formElement.elements['userName'].value
      data.email = formElement.elements['email'].value
      data.content = formElement.elements['content'].value
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
      var that = this
      axios.post('/messageBoard', data)
        .then(function(response) {
          that.$emit('showBox')
        })
        .catch(function(error) {
          console.log(error);
        })
    },
  }
}
</script>

<style scoped>
  * {
    font-family: "merriweather",SimSun,"宋体",serif;
    text-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
    section {
    margin-bottom: 20px;
  }

  .commentWrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 800px;
  }
  .commentWrap  h1 {
    font-size: 50px;
  }
  .comment {
    margin-top:20px;
    padding: 20px;
    height: 600px;
    width: 45%;
    background-image: url('/static/img/formBorder.png');
    background-size: 140px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .2);
    background-repeat: repeat-x repeat-y;
  }
  .fromWrap {
    color: white;

    height: 100%;
    width: 100%;
    margin: 20px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
  }
  input, textarea {
    padding: 10px;
    border: solid 2px #dbbfc3;
    border-radius: 10px;
  }
  input:focus, textarea:focus {
    outline: none;
    border: solid 2px #c87b86;
    border-radius: 10px;
  }
 .fromWrap button {
   line-height:18px;
   position: relative;
   color: white;
   border-radius: 10px;
   border: solid 2px #a55f67;
   background-color: #a55f67;
   opacity: .8;
 }
 .fromWrap button:hover {
   opacity: 1;
 }
 input, button {
   height: 40px;
 }
 button span {
   font-weight: 500;
   padding-left: 28px;
   font-size: 16px;
 }
 button i {
   position: absolute;
 }
</style>


