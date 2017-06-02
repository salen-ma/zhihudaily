<template>
	<!--  帖子列表  -->
	<div id="main">
		<div id="content">	
			<div class="top-img">
				<div :style="{'background-image':`url(${data.image})`}"></div>
			</div>
			<div id="list" :class="{'night-style':nightStyle}">
				<div class="editor">
					主编 
					<img class="avatar" :src="data.editors[0].avatar" alt="">
				</div>
		        <router-link
			        class="media-item"  
			        v-for="item,index in data.stories" 
			        :to="`/detail/${item.id}`"
			        tag="div"
			        :key="index"
		        >
			        <div class="item-body">
			           {{item.title}}
			        </div>
			        <div class="item-pic" v-if="item.images">
			            <img :src="item.images" alt="" height="100%" width="100%"/>
			        </div>
		        </router-link>	
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
				scroll:null
			}
		},
		mounted(){
				
			this.$nextTick( ()=>{
				let main = document.getElementById("main")
				this.scroll = new Bscroll(main,{
			        startX: 0,
			        startY: 0,
			        bounce:false,
			        momentum:true,
			        probeType: 3,
			        click: true
			    })					    				
			})	

			this.$http.get(`/api/4/theme/${window.location.hash.split('/')[2]}`).then((d)=>{
		        this.data = d.data 
				// this.$nextTick(function(){
				// 	console.log(this.scroll)
		  //          this.scroll.refresh()
		  //       })		         	            
	        })						
		},	
		updated(){
			this.$nextTick( ()=>{
				let main = document.getElementById("main")
				this.scroll = new Bscroll(main,{
			        startX: 0,
			        startY: 0,
			        bounce:false,
			        momentum:true,
			        probeType: 3,
			        click: true
			    })					    				
			})	

			// this.$nextTick(function(){
			// 	console.log(2)
			// 	console.log(this.scroll)
	  //          this.scroll.refresh()
	  //       })		         	            			
		},	
		computed:{
			nightStyle(){
				return this.$store.state.nightStyle
			}
		}
	}
</script>

<style lang="less" scoped>
	@rem:40rem;
	
	#main{
		position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom:0;		
	}	
	.top-img{
		height:676/@rem;
		padding-top:168/@rem;
        div{
			position:relative;
	        width:100%; 
	        height:100%;
	        background-repeat: no-repeat;
	        background-position: center;       
	        background-size: cover;		
        }
	}
	#list.night-style{
		color:#f3f3f3;	
		background-color:#343434 !important;

		.media-item{
			background-color:#404040 !important;
		}
	}	
	#list{
		padding:0 30/@rem;
		background-color:#f3f3f3;
		
		.editor{
			height:96/@rem;
			padding-top:28/@rem;
			margin-bottom:56/@rem;
			line-height:96/@rem;

			.avatar{
				width:96/@rem;
				height:96/@rem;
				border-radius:50%;
				margin-left: 40/@rem;
				vertical-align: top;
			}
		}
		.media-item{
			display: flex;
			height: auto;
			min-height: 228/@rem;
			box-sizing: border-box;
			padding:40/@rem 52/@rem;
			border-radius: 10/@rem;
			margin-bottom: 42/@rem;
			background-color:#fff;

			.item-body{
				flex:1;
				font-size: 52/@rem;
				line-height:64/@rem;
				box-sizing:border-box;
				padding-right: 10/@rem;
			}
			.item-pic{
				width:248/@rem;
				height:216/@rem;
			}
		}
	}
</style>