<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	import axios from 'axios';
	import {getList} from './service/AppService';
	
	export default {
		name: 'App',
		data: function() {
			return {
				list:[]
			}
		},
		created:function() {
//			重定向
			this.$router.replace('/login')
//			console.log(123)
//			console.log(getList)
//
//			getList("http://114.55.249.153:8028/shopping/listByPage",{
//			
//					page:1,
//					limit:10
//				
//				})
//				.then(function(response) {
//					console.log(response)
//					this.list=response.data
//				}.bind(this))
//				.catch(function(error) {
//					console.log(error)
//				})
//				
//				

		}
	}
</script>

<style type="text/css" lang="scss" scoped="" >
	@import './css/commin'
</style>