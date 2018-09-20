<template>
  <div class="wrapper" >
      <div class="loginWrap">
      <div class="loginHeader">
        <h2 class="loginText">Login My Blog</h2>
      </div>
      <form id="loginForm" class="loginForm" ref="form">
        <input type="text" name="account" placeholder="账号：" autofocus>
        <input type="password" name="password" placeholder="密码：">
        <button ref="btn" type="button" @click="handleButtonClick">登 录</button>
      </form>	
    </div>
  </div>
</template>

<script>
export default {
  name: 'adminLogin',
  methods: {
    handleButtonClick() {
      let formElements = this.$refs.form
      let password = formElements.elements['password'].value
      let account = formElements.elements['account'].value
      this.judge(account, password)
    },
    judge(account, password) {
      let btn = this.$refs.btn
      if(account === 'admin' && password === 'zhu1053673440.') {
        console.log(this.$router)
        this.$router.push({ path: '/admin' }) 
      } else {

          btn.classList.toggle("animated");
          btn.classList.toggle("shake");
          setTimeout(function() {
            btn.classList.toggle('animated')
            btn.classList.toggle('shake')
          },1000)
      }
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 26px;
}
.wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url('/static/img/loginBackground.png')
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
    background-image: url('/static/img/formHeader.jpg');
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
button {
  outline: none;
}
</style>

