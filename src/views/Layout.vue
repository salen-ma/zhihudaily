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
				<div class="content">
					<div class="head">
						<div class="user">
							<img src="../assets/images/user.png" alt="">
							salen
						</div>
						<div class="my-news">
							<i class="iconfont icon-star"></i>
							<span>我的收藏</span>
							<i class="iconfont icon-xiazai"></i>
							<span>离线下载</span>						
						</div>
					</div>
					<div class="list">
						<div class="home" @click="gotoHome" :class="{active:id===0}">
							<i class="iconfont icon-home"></i>
							首页
						</div>
						<ul>
							<li 
								v-for="item,index in list" 
								:key="index"
								@click="gotoTheme(item.id)"
								:class="{active:id===item.id}"	
						        tag="li"
							>
								{{item.name}}
								<i class="iconfont icon-right"></i>
							</li>
						</ul>
					</div>
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
				list:[],
				id:0
			}
		},
		mounted(){
			// 获取主题列表项
			this.$http.get('/api/4/themes').then((d)=>{
				// console.log(d.data)
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
				this.id = id
				this.$router.push( {path:`/theme/${id}`} )
			},
			gotoHome(){
				this.$store.state.popupVisible = false
				this.id = 0
				this.$router.push( {path:`/`} )				
			}
		}		
	}
</script>

<style  lang="less" scoped>
	@rem:40rem;
	.mint-popup{
		width:85%;
		height:100%;
		overflow: hidden;
		overflow-y: auto;
	
		.content{
			width:101%;
			.head{
				height:333/@rem;
				box-sizing: border-box;
				padding: 32/@rem 48/@rem;
				background-color:#00a2ea;

				.user{
					margin-bottom:100/@rem;
					font-size:40/@rem;
					line-height:100/@rem;
					color:#fff;
					img{
						width:100/@rem;
						height:100/@rem;
						border-radius: 50%;
						margin-right: 40/@rem;
					}
				}
				.my-news{
					display: flex;
					justify-content: space-between;
					padding: 0 22/@rem;
					padding-right: 60/@rem;
					font-size: 46/@rem;
					font-weight: bold;
					color: #fff;
				}
			}
			.list{
				.home,ul li{
					height:152/@rem;
					line-height:152/@rem;
					padding-left:48/@rem;	
					font-size:48/@rem;
					font-weight: bold;			
				}
				.active{
					background-color:#f0f0f0;
				}
				.home{
					height:152/@rem;
					line-height:152/@rem;
					color:#00a0e8;

					.icon-home{
						color:#00a0e8 !important;
						margin-right: 40/@rem;
					}
				}
				ul{
					li{
						padding-right: 160/@rem;
						.icon-right{
							line-height:152/@rem;
							font-size: 46/@rem !important;
							color:#cdcdcd !important;
							float: right;
						}
					}
				}
			}
		}
	}	
</style>