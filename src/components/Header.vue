<template>
  <section  class="introduce">
    <div class="header">
      <div class="imgWrap" v-show="isShow">
        <img class="img" src="@/assets/img/me.jpg" alt="">
      </div>
      <!-- <div class="category">
        <div><router-link to="/" title="首页"><i class="iconfont-sm">&#xe61b;</i></router-link></div>
        <div><router-link to="/blog" title="我的博客"><i class="iconfont-sm">&#xe61c;</i></router-link></div>
        <div><router-link to="/comment" title="留言板"><i class="iconfont-sm">&#xe744;</i></router-link></div>
        <div><a href="https://codepen.io/ac-greener/" target="_blank" title="codepen"><i class="iconfont-sm">&#xe65b;</i></a></div>
        <div><a href="https://github.com/AC-greener" target="_blank" title="github"><i class="iconfont-sm">&#xe6a4;</i></a></div>
      </div> -->
				<nav>
					<div class="btn-menu" id="btnMenu" @click="Menu">
						<span class="icon_open">&equiv;</span>
						<span class="icon_close">&times;</span>
					</div>
					<ul class="hide" id="PopUp">
						<li><router-link to="/" ><i class="iconfont-sm">&#xe61b;</i><span class="title">Home</span></router-link></li>
						<li><router-link to="/blog" ><i class="iconfont-sm">&#xe61c;</i><span class="title">My Blog</span></router-link></li>
						<li><router-link to="/comment" ><i class="iconfont-sm">&#xe744;</i><span class="title">Comment</span></router-link></li>
						<li><a href="https://codepen.io/ac-greener/" target="_blank"><i class="iconfont-sm">&#xe65b;</i><span class="title">Codepen</span></a></li>
						<li><a href="https://github.com/AC-greener" target="_blank" ><i class="iconfont-sm">&#xe6a4;</i><span class="title">Github</span></a></li>
					</ul>	
  			</nav>
      <div class="introduceMe" v-show="isShow">
        <h2>我是朱通通 </h2>
        <h3>陕西科技大学大三学生一枚~</h3>
        <h3>热爱前端开发，喜欢追逐新技术</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroduceHeader',
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    Menu(){
      document.getElementById("btnMenu").getElementsByTagName("span")[0].classList.toggle("i_open");
      document.getElementById("btnMenu").getElementsByTagName("span")[1].classList.toggle("i_close");
      document.getElementById("PopUp").classList.toggle("show");
    }
  }
}
</script>

<style scoped>
*,
*:after,
*:before,
html
	{box-sizing:border-box}

body{
	margin:0;
	padding:0;
	font-family:Tahoma,Geneva,sans-serif;
	font-style:normal;
	font-weight:400;
	text-align:center
	}

nav{
	width:300px;
	height:300px;
	left:50%;
  margin-top: -20px;
	display:block;
	position:absolute;
	transform:translate(-50%,-50%);
	animation:hide-show 1.5s ease;
	border-radius: 50%;
	}

@keyframes hide-show
	{
		0%,
		99%{opacity:0}
		100%{opacity:1}
	}

.btn-menu{
	background-color: rgba(44, 41, 41, 0.29);
	width:30px;
	height:30px;
	margin:130px auto;
	z-index:99;
	display:flex;
	align-content:center;
	justify-content:center;
	position:relative;
	cursor:pointer;
	border-radius:50%
	}

[class*="icon_"]
	{color:#fff;font-size:30px;font-weight:700}

.icon_open{animation:rotate-scale .5s ease}
.icon_close{display:none}

@keyframes rotate-scale
	{
		0%{transform:scale(0,0) rotate(0deg)}
		100%{transform:scale(1,1) rotate(360deg)}
	}

.hide{
	width:100%;
	height:100%;
	margin:0;
	padding:0;
	top:0;
	left:0;
	display:block;
	position:absolute;
	border-radius: 50%;
	transition: background-color 2s;
	}

li{
	width:40px;
	height:130px;
	display:block;
	position:absolute;
	list-style-type:none;
	transform-origin:bottom center
	}

li:nth-child(1)
	{top:0;left:130px; animation:hide_1 .2s 1.4s ease forwards}

li:nth-child(2)
	{top:18px;left:145px;animation:hide_2 .2s 1.2s ease both}

li:nth-child(3)
	{top:36px;left:130px;animation:hide_3 .2s 1s ease both}

li:nth-child(4)
	{top:34px;left:120px;animation:hide_4 .2s .8s ease both}
li:nth-child(5)
	{top:18px;left:110px;animation:hide_5 .2s .6s ease both}


@keyframes hide_1
	{
		0%{transform:rotate(0deg) scale(1,1)}
		100%{transform:rotate(0deg) scale(0,0)}
	}

@keyframes hide_2
	{0%{transform:rotate(72deg) scale(1,1)}100%{transform:rotate(72deg) scale(0,0)}}

@keyframes hide_3
	{0%{transform:rotate(144deg) scale(1,1)}100%{transform:rotate(144deg) scale(0,0)}}

@keyframes hide_4
	{0%{transform:rotate(216deg) scale(1,1)}100%{transform:rotate(216deg) scale(0,0)}}

@keyframes hide_5
	{0%{transform:rotate(288deg) scale(1,1)}100%{transform:rotate(288deg) scale(0,0)}}





li a{
	width:100%;
	height:40px;
	top:0;
	left:0;
	display:block;
	position:absolute;
	border-radius:50%;
	outline-width:none;
	text-decoration:none
	}

/* li:nth-child(1) a{background:url('https://image.flaticon.com/icons/svg/185/185981.svg')} */
  /* li:nth-child(2) a{background:url('https://image.flaticon.com/icons/svg/185/185961.svg')}
  li:nth-child(3) a{background:url('https://image.flaticon.com/icons/svg/185/185985.svg')}
  li:nth-child(4) a{background:url('https://image.flaticon.com/icons/svg/185/185983.svg')}
  li:nth-child(5) a{background:url('https://image.flaticon.com/icons/svg/185/185963.svg')} */
/* li:nth-child(6) a{background:url('https://image.flaticon.com/icons/svg/185/185964.svg')}
li:nth-child(7) a{background:url('https://image.flaticon.com/icons/svg/185/185971.svg')}
li:nth-child(8) a{background:url('https://image.flaticon.com/icons/svg/185/185988.svg')} */

.title{
	background:#000;
	width:80px;
	padding:8px 0;
	top:32px;
	left:50%;
	z-index:-1;
	display:block;
	position:absolute;
	font-size:14px;
	color:#fff;
	opacity:0;
	border-radius:4px;
	visibility:hidden;
	transition:all .5s ease
	}

li:nth-child(1) a .title,
li:nth-child(2) a .title,
li:nth-child(3) a .title,
li:nth-child(4) a .title
	{transform:translate(-50%,0) rotate(270deg)}

li:nth-child(5) a .title,
li:nth-child(6) a .title,
li:nth-child(7) a .title,
li:nth-child(8) a .title
	{transform:translate(-50%,0) rotate(90deg)}

.title:before{
	content:"";
	width:10px;
	height:10px;
	top:50%;
	display:block;
	position:absolute;
	transform:translate(0,-50%);
	border-top:5px solid transparent;
	border-bottom:5px solid transparent
	}

li:nth-child(1) a .title:before,
li:nth-child(2) a .title:before,
li:nth-child(3) a .title:before,
li:nth-child(4) a .title:before
	{right:-8px;border-left:10px solid #000}

li:nth-child(5) a .title:before,
li:nth-child(6) a .title:before,
li:nth-child(7) a .title:before,
li:nth-child(8) a .title:before
	{left:-8px;border-right:10px solid #000}

li a:hover{box-shadow:0 0 2px 2px #fff,0 0 4px 2px #000}

li a:hover .title
	{top:72px;opacity:1;visibility:visible}



.i_open{display:none}
.i_close{display:inline;animation:rotate-scale .5s ease}

.show li:nth-child(1){animation:show_1 .2s ease both}
.show li:nth-child(2){animation:show_2 .2s .2s ease both}
.show li:nth-child(3){animation:show_3 .2s .4s ease both}
.show li:nth-child(4){animation:show_4 .2s .6s ease both}
.show li:nth-child(5){animation:show_5 .2s .8s ease both}
.show {
	transition: background-color 2s;
	background-color: rgba(44, 41, 41, 0.13);
}

@keyframes show_1
	{0%{transform:rotate(0deg) scale(0,0)}100%{transform:rotate(0deg) scale(1,1)}}

@keyframes show_2
	{0%{transform:rotate(72deg) scale(0,0)}100%{transform:rotate(72deg) scale(1,1)}}

@keyframes show_3
	{0%{transform:rotate(144deg) scale(0,0)}100%{transform:rotate(144deg) scale(1,1)}}

@keyframes show_4
	{0%{transform:rotate(216deg) scale(0,0)}100%{transform:rotate(216deg) scale(1,1)}}

@keyframes show_5
	{0%{transform:rotate(288deg) scale(0,0)}100%{transform:rotate(288deg) scale(1,1)}}




  * {
    font-family: "merriweather",SimSun,"宋体",serif;
    text-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
   /* .router-link-active {
    color: red ;
  } */
  a {
    color: #fff;
    text-decoration: none;
  }
   a:hover {
    color: #ccc;
  }
  section {
    margin-bottom: 20px;
  }

  .img {
    clip-path: circle(50%);
    height:140px; 
    width:140px;
  }
  .header {
    height: auto;
    margin-top: 140px;
    text-shadow: 0 2px 5px rgba(0,0,0,0.2);
    text-align: center;
  }
  .imgWrap {
    margin-bottom: 40px;
  }
  .introduce {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 800px;
    color: #fff;
    background-image: url('http://v5.res.dandyweng.com/images/backgrounds/intro.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom center;
    background-repeat: no-repeat
  }
  .category {
    display: flex;
    justify-content: center;
  }
  .category div {
    margin: 14px;
  }
</style>

