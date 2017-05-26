<template>
	<div id="wrapper">
		<div id="detail">
		    <div class="detail-header" v-if="data.image">
		      <div class="img-wrap">
		        <h1 class="detail-title">{{data.title}}</h1>
		        <span class="img-source">{{data.image_source}}</span>
		        <div 
			        :style="{'background-image':`url(${data.image})`}" 
			        class="top-img">
		        </div>
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
				data:{},
				dataId:''
			}
		},
		mounted(){
			this.$http.get(`/news/${window.location.hash.split('/')[2]}`).then((d)=>{
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
				    bottom: 80/@rem;
				    z-index: 1;
				    position: absolute;
				    color: white;
				    font-size: 62/@rem;
				    line-height:88/@rem;
				}
				.img-source {
				    position: absolute;
				    bottom: 10/@rem;
				    z-index: 1;
				    font-size: 36/@rem;
				    color: rgba(255,255,255,.8);
				    right: 40/@rem;
				}		
				.top-img{
			 		width:100%; 
		      		height:100%;
		      		background-repeat: no-repeat;
		      		background-position: center;       
		      		background-size: cover;					
				}  
			}
		}

		.article{
			padding: 60/@rem;
			font-size: 50/@rem;
			line-height: 74/@rem;
			
			.meta{
				
			}

			.content{
				p{
					.content-image{
						width: 100%;
					}
				}
			}
		}
	}
</style>