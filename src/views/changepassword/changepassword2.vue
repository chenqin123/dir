<template>
	<div class="wrapper">
		<div class="top">
			<img src="../../image/mima1.png"/>
		</div>
		<p class="p">短信验证码已发送，请输入短信验证码</p>
		<p class="pp">
			<input type="text" name="" placeholder="验证码" />
		</p>
		<p class="p2">
			<button class="b1">下一步</button>
			
		</p>
		<p class="p2">
			23秒后重发
		</p>
	</div>
</template>

<script>
</script>

<style>
	.wrapper{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: none;
		
	}
	.top{
		width: 100%;
		height: 45px;
	}
	.top img{
		width: 100%;
		height: 45px;
	}
	.p{
		margin-top: 100px;
		text-align: center;
		font-size: 20px;
		color: black;
	}
	.pp{
		height: 100px;
		/*background: red;*/
	}
	.pp input{
		border: none;
		padding-top: 30px;
		text-indent: 9rem;
		line-height: 50px;
		border-bottom: 1px solid gainsboro;
		width: 90%;
		margin: 10px;
	}
	.p1{
		width: 100%;
		height: 100px;
		background: red;
		margin-top: 10px;
	}
	.p2 .b1 {
		width: 90%;
		margin-left: 10px;
		height: 60px;
		border-radius: 10px;
		background: darkred;
		color: white;	
	}
	.p2{
		color: darkred;
		text-align: center;
		font-size: 22px;
	}
</style>