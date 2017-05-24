<template>
	<!--  帖子列表  -->
	<div id="list">
		
	    <div class="list-item"  v-for="item in 2">
	        <div class="list-title">今日热闻</div>
	        <router-link to="/detail" class="media-item"  v-for="item in 3" tag="div">
		        <div class="item-body">
		            机场是怎么设计出来的
		        </div>
		        <div class="item-pic">
		            <!-- <img :src="item.images[0]" alt="" height="80px" width="100px"/> -->
		        </div>
	        </router-link>	
	    </div>
    </div>
</template>

<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>

<style lang="less" scoped>
	@rem:40rem;

	#list{
		height:2000/@rem;
		padding:42/@rem 30/@rem 0 30/@rem;
		background-color:#f3f3f3;
		
		.list-title{
			padding-left: 18/@rem;
			font-size: 42/@rem;
			line-height: 66/@rem;
			margin-bottom: 60/@rem;
			color:#6b6b6b;
		}

		.media-item{
			display: flex;
			height: 300/@rem;
			box-sizing: border-box;
			padding:42/@rem 52/@rem;
			border-radius: 10/@rem;
			margin-bottom: 42/@rem;
			background-color:#fff;

			.item-body{
				flex:1;
				font-size: 52/@rem;
				line-height:64/@rem;
			}
			.item-pic{
				width:248/@rem;
				height:216/@rem;
				border:1px solid #000;
			}
		}
	}
</style>