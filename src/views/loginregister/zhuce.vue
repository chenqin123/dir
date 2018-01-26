<template>
	<div class="wrapper">
		<div class="img">
			<img src="../../image/login1.png"/>
		</div>
		<div class="login">
			<p><router-link to="/login">登陆</router-link></p>
			<p><router-link to="/zhuce">注册</router-link></p>
		</div>
		<div class="container">
			<div class="left" v-show="isLogin">
				<div class="tel">
					<img src="../../image/login2.png"/>
					<input type="text" name="" placeholder="请输入手机号" />
					
				</div>
				<div class="tel">
					<img src="../../image/login3.png"/>
					<input type="text" name="" placeholder="请输入验证码" />
				</div>
				<div class="tel">
					<img src="../../image/login2.png"/>
					<input type="text" name="" placeholder="请输入密码" />
					
				</div>
				<div class="tel">
					<img src="../../image/login3.png"/>
					<input type="text" name="" placeholder="请再次输入密码" />
				</div>
				<div>
					<button>注册</button>
				</div>
				
			</div>
			<div class="right" v-show="!isLogin"></div>
		</div>
	</div>
	
</template>

<script>
//	inport {getList} from "../../service/"
	export default{
		data:function(){
			return{
				isLogin:true
			}
		}
	}
</script>

<style type="text/css" lang="scss" scoped="" >
	/*@import './css/commin'*/
	.center{
		text-align: center;
	}
	.wrapper{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		
	}
	.img{
		height: 180px;
		width: 100%;
	}
	.img img{
		height: 180px;
		width: 100%;
	}
	.login{
		width: 100%;
		height: 60px;
		/*line-height: 60px;*/
		display: flex;
		background: gainsboro;
		flex-direction: row;
		text-align: center;
	}
	.login p{
		flex: 1;
	}
	.login p a{
		text-decoration: none;
	}
	.container{
		width: 100%;
		
		flex: 1;
		
	}
	.container .left div{
		margin-top: 24px;
		
	}
	.container .left button{
		width: 92%;
		height: 50px;
		border: none;
		border-radius: 17px;
		margin: 0px auto;
		background: #B92C28;
		color: white;
		/*margin: 0 20px;*/
		margin-left: 20px;
		font-size: 20px;
	}
	.container .left .tel{
		width: 90%;
		margin: 0 auto;
		
		height: 78px;
		border-bottom: 2px solid gainsboro;
	}
	.container .left .tel input{
		border: none;
		padding-top: 40px;
		text-indent: 4rem;
	}
</style>