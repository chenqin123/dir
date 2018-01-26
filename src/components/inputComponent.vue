<template>
	<!--封装组件-->
	<div class="tel">
		<img src="../image/login2.png"/>
		<!--<img :src="imgsrc"/>-->
		<!--:相当于v-bind-->
		<input type="text" 
			 :placeholder="placeholder" 
			v-on:input="inputEvent"
			 />
		
	</div>
</template>
<script type="text/javascript">
	export default{
		data:function(){
			return{
				
			}
		},
//		父传子
		props:['placeholder','change'],
		methods:{
			inputEvent: function (e) {
	        var value = e.target.value;
	        console.log(value)
	        this.$emit('change',value)
	     },
	     blurEvent: function (e) {
	        var value = e.target.value;
	        console.log(value)
	        this.$emit('blur',value)
	      }
		}
		
	}
</script>
<style type="text/css">
	 .tel{
		width: 90%;
		margin: 0 auto;
		
		height: 90px;
		border-bottom: 2px solid gainsboro;
	}
	 .tel input{
		border: none;
		padding-top: 50px;
		text-indent: 4rem;
	}
</style>