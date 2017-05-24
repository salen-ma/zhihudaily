<template>
	<div id="main">
		<div id="content">
			<custom-carousel :topStories="data.top_stories" />
			<custom-list :stories="data.stories" />
		</div>
	</div>
</template>

<script>
	import Carousel from '@/views/backend/Carousel'
	import List from '@/views/backend/List'
	import Bscroll from 'better-scroll'

	export default{
		components:{
			'custom-carousel':Carousel,
			'custom-list':List
		},
		data(){
			return {
				data:{}
			}
		},
		mounted(){
 			this.$http.get('/news/latest').then((d)=>{
 				console.log(d.data)
		        this.data = d.data

				this.$nextTick(function(){
		           scroll.refresh();
		        })		        
	        })		

			let scroll = null

			this.$nextTick( ()=>{
				let main = document.getElementById("main")	
				scroll = new Bscroll(main,{
			        startX: 0,
			        startY: 0,
			        probeType: 3,
			        click: true,
			        momentum: true
			    })						
			})				
		}
	}
</script>

<style  lang="less" scoped>
	@rem:40rem;
	#main{
		position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom:0;		
	}
</style>


