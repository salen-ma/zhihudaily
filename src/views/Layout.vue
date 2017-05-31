<template>
	<section>
		<custom-header />
		<router-view></router-view>
		<Popup 
			v-model="popupVisible"
  			position="left"
  			popup-transition="popup-fade"
		>
			<slot>
				<div class="head">
					<div class="user">salen</div>
					<span>我的收藏</span>
					<span>离线下载</span>
				</div>
				<div class="list">
					<div class="home">首页</div>
					<ul>
						<li>日常心理学</li>
						<li>用户推荐日报</li>
						<li>不许无聊</li>
						<li>开始游戏</li>
						<li>电影日报</li>
						<li>设计日报</li>
						<li>大公司日报</li>
						<li>财经日报</li>
						<li>互联网安全</li>
						<li>音乐日报</li>
						<li>动漫日报</li>
						<li>体育日报</li>
					</ul>
				</div>
			</slot>
		</Popup>		
	</section>
</template>

<script>
	import Header from '../components/Header.vue'
	import { Popup } from 'mint-ui'

	export default{
		components:{
			'custom-header':Header,
			Popup
		},
		computed:{
			popupVisible(){
				return this.$store.state.popupVisible
			}
		}		
	}
</script>

<style  lang="less" scoped>
	@rem:40rem;
	.mint-popup{
		width:85%;
		height:100%;

		.head{
			height:333/@rem;
			background-color:#00a2ea;
		}
		.list{
			.home,ul li{
				height:152/@rem;
				line-height:152/@rem;
				padding-left:48/@rem;	
				font-size:48/@rem;
				font-weight: bold;			
			}
			.home{
				height:152/@rem;
				line-height:152/@rem;
				background-color:#f0f0f0;
				color:#00a0e8;
			}
			ul{
				li{
					
				}
			}
		}
	}	
</style>