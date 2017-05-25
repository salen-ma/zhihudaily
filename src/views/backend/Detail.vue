<template>
	<div id="wrapper">
		<!-- <div id="detail">
			<div class="banner">
				<img src="../../assets/images/02.jpg" height="100%" width="100%" alt="">
			</div>
			<div class="article">
				<div class="user">
					<span class="user-pic">
						<img src="../../assets/images/03.png" height="100%" width="100%" alt="">
					</span>
					<strong class="user-name">salen,</strong>
					<span class="user-info">dddsssdfsdff</span>
				</div>
				<div class="text" v-html="data.body">
					{{data.body}}
				</div>
			</div>
		</div> -->
		<div id="detail">
		    <div class="detail-header" v-if="data.image">
		      <div class="img-wrap">
		        <h1 class="detail-title">{{data.title}}</h1>
		        <span class="img-source">{{data.image_source}}</span>
		        <img :src="data.image" height="100%" width="100%" alt="">
		        <div class="img-mask"></div>
		      </div>
		    </div>
		    <div class="article" v-html="data.body">
		    </div>
		 </div>		
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'

	export default{
		data(){
			return {
				data:{}
			}
		},
		mounted(){
			this.$http.get('/news/9436171').then((d)=>{
 				console.log(d.data)
		        this.data = d.data

				this.$nextTick(function(){
		           scroll.refresh();
		        })		        
	        })	

			let scroll = null

			this.$nextTick( ()=>{
				let wrapper = document.getElementById("wrapper")	
				scroll = new Bscroll(wrapper,{
			        startX: 0,
			        startY: 0,
			        bounce:false,
			        momentum:true
			    })						
			})				
		}		
	}
</script>

<style  lang="less" scoped>
	@rem:40rem;
	#wrapper{
		position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom:0;		
	}	
	#detail{
		padding-top: 168/@rem;

		.detail-header{
			height: 610/@rem;

			.img-wrap{
				position: relative;
    			overflow: hidden;	
    			width:100%;
    			height:100%;
				 			
				.detail-title {
				    margin: 20/@rem 0;
				    padding:0 40/@rem;
				    bottom: 10/@rem;
				    z-index: 1;
				    position: absolute;
				    color: white;
				    font-size: 30px;
				}
				.img-source {
				    position: absolute;
				    bottom: 10/@rem;
				    z-index: 1;
				    font-size: 12px;
				    color: rgba(255,255,255,.6);
				    right: 40/@rem;
				}		  
			}
		}

		.article{
			padding: 60/@rem;
		}
	}
</style>