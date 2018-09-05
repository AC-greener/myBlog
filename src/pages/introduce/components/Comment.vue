<template>
    <section class="commentWrap">
    <div >
      <h1>打个招呼吧</h1>
      <h2>你可以发送 Email 至 1053673440@qq.com 联系我。</h2>
      <h2>或者在下方留言与我交流。</h2>
    </div>
    <div class="comment">
      <div class="fromWrap">
        <form action="http://localhost:3000/messageBoard" class="form" method="GET">
          <div style="margin-bottom:30px">
            <input style="width:25%" type="text" placeholder="您的大名" name="userName" required>
            <input style="width:25%"  type="email" placeholder="邮箱" name="email">
          </div>
          <div style="margin-bottom:30px">
            <textarea style="width:50%" id="" cols="30" rows="10" placeholder="留言内容" name="content" required></textarea>
          </div>
          <div style="margin-bottom:30px; ">
            <button style="width:25%" type="submit">提交留言</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'IntroduceHeader'
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
    background-image: url(http://v5.res.dandyweng.com/images/patterns/envelope-border.png);
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
</style>


