<template>
	<div id="wrapper">
		<div id="detail">
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

		.banner{
			height: 610/@rem;
		}

		.article{
			padding: 60/@rem;

			.user{
				height:66/@rem;
				margin-bottom: 60/@rem;
				font-size: 46/@rem;
				line-height:66/@rem;
				
				.user-pic,.user-name,.user-info{
					display: inline-block;
					height:100%;
					vertical-align: top;
				}
				.user-pic{
					width:62/@rem;
					border-radius: 5/@rem;
					margin-right: 26/@rem;
					overflow: hidden;
				}
				.user-info{
					color:#dadada;
				}
			}

			.text{
				font-size:48/@rem;
				line-height:80/@rem;
			}
		}
	}
</style>