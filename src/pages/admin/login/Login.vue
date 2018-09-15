<template>
  <div class="wrapper" :style="sty">
      <div class="loginWrap">
      <div class="loginHeader" :style="bgImg">
        <h2 class="loginText">Login My Blog</h2>
      </div>
      <form action="" method="POST" id="loginForm" class="loginForm">
        <input type="text" placeholder="账号：" autofocus>
        <input type="password" placeholder="密码：">
        <button type="submit">登 录</button>
      </form>	
    </div>
  </div>
</template>

<script>
const url = require('../../../assets/img/3.png')
const url2 = require('../../../assets/img/bg.jpg')
export default {
  name: 'adminLogin',
  data() {
    return {
      sty: {
        height: '',
        backgroundImage: "url(" + url + ")",
      },
      bgImg: {
        backgroundImage: "url(" + url2 + ")"
      }
    }
  },
  mounted() {
    this.sty.height = window.innerHeight-2+'px'
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  border: 1px solid transparent;
}
.loginWrap {
    width: 400px;
    height: 420px;
    margin:0 auto;
    margin-top:10%;
    border-radius: 10px;
    background-color:whitesmoke;
}
.loginHeader {
    width: 100%;
    height: 120px;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}   
.loginText {
    color: gray;
    text-align: center;
    line-height: 120px;
}
.loginForm > * {
    display: block;
    margin: 0 auto;
    margin-top: 10%;
    width: 90%;
    height: 40px;
    border: none;
}
.loginForm button {
    font-weight:500;
    font-size: 20px;
    cursor: pointer;
    color:white;
    border-radius: 10px;
    background-color:#ef5350;
    opacity: .8;
}
.loginForm button:hover {
    opacity: 1;
}
.loginForm input {
  padding: 8px;
  outline: none;
  border-bottom: 1px solid #00000052;
}
</style>

