<template>
	
	<div class="wrapper">
		<img src="../../image/main1.png" class="img"/>
		<h1><img src="../../image/main2.png" /></h1>
		<p class="p1">
			<button><img src="../../image/main3.png" /></button>
		</p>
		<p class="p2">
			<button class="b1">登陆</button>
			<button class="b2">新用户</button>
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
		
		color: white;
		/*background-image:url(../../image/main1.png) no-repeat;*/
	}
	.img{
		width: 100%;
		height: 646px;
		position: relative;
	}
	h1 {
		position: absolute;
		top: 100px;
		left: 210px;
	}
	.p1{
		position: absolute;
		bottom: 130px;
		left: 20px;
	}
	.p1 button{
		border: none;
	}
	.p1 img{
		width: 320px;
		/*height: 60px;*/
	}
	.p2{
		position: absolute;
		bottom: 30px;
		left: 20px;
		font-size: 25px;
	}
	.p2 .b1{
		width: 155px;
		height: 50px;
		border: 0px solid white;
		border-radius: 6px;
		color: red;
	}
	.p2 .b2{
		margin-left: 10px;
		width: 155px;
		height: 50px;
		border: 0px solid none;
		border-radius: 6px;
	}
</style>