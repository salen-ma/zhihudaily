<template>
	<section>
		<custom-header />
		<router-view></router-view>
		<!-- 侧边栏主题列表 -->
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
						<li 
							v-for="item,index in list" 
							:key="index"
							@click="gotoTheme(item.id)"	
					        tag="li"
						>
							{{item.name}}
						</li>
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
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			// 获取主题列表项
			this.$http.get('/api/4/themes').then((d)=>{
				console.log(d.data)
				this.list = d.data.others
			})					
		},
		computed:{
			// 是否显示主题列表[Boolean]
			popupVisible(){
				return this.$store.state.popupVisible
			}
		},
		methods:{
			gotoTheme(id){
				this.$store.state.popupVisible = false
				this.$router.push( {path:`/theme/${id}`} )
				console.log(id)
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