<template>
	<header id="head" :class="{'night-style':nightStyle}">
		<div class="left">
			<i class="menu"></i>
			<router-link to="/" tag="span">首页</router-link>
		</div>
		<div class="right">
			<i class="el-icon-information"></i>
			<i class="el-icon-more" @click="showAction"></i>
			<Actionsheet  
				:actions="actions" 
				v-model="sheetVisible" 
				cancelText="" 
				closeOnClickModal="true"
			/>
		</div>		
	</header>	
</template>

<script>
	import { Actionsheet } from 'mint-ui'
	export default{
		data(){
			return {
				sheetVisible:false,
				actions:[
					{
						name:'夜间模式',
						method:()=>{
							this.actions[0].name = !this.$store.state.nightStyle ? '日间模式' : '夜间模式'
							this.$store.state.nightStyle = !this.$store.state.nightStyle
						}
					},
					{
						name:'设置选项'
					}					
				]
			}
		},
		components: {
	        Actionsheet
	    },
	    methods:{
	    	showAction(){
	    		this.sheetVisible = true
	    	}
	    },
		computed:{
			nightStyle(){
				return this.$store.state.nightStyle
			}
		}		
	}
</script>

<style lang="less">
	@rem:40rem;
	.flex-style1{
		display:flex;
		justify-content: space-between;
		align-items: center;		
	}
	
	#head.night-style{
		background-color:#222222;
	}
	#head{
		position:fixed;
		left:0;
		top:0;
		.flex-style1;
		width:100%;
		height: 168/@rem;
		box-sizing: border-box;
		padding: 0 56/@rem;
		background-color:#00a2ea;
		z-index: 9999;
		
		.left{
			.flex-style1;			
			width:270px;
			height:80px;
			font-size:52/@rem;
			color:#fff;

			.menu{
				position: relative;
				display: inline-block;
			}
			.menu,.menu:before,.menu:after{
				width:58/@rem;
				height:6/@rem;
				border-top:1px solid #388aaf;
				border-bottom:1px solid #388aaf;
				background-color:#fff;
			}
			.menu:before,.menu:after{
				content: "";
				position:absolute;
				left:0;
				top:-18/@rem;
			}		
			.menu:after{
				top:18/@rem;
			}
		}

		.right{
			position:relative;
			.flex-style1;			
			width:200px;
			height:80px;		

			.el-icon-more{
				transform:rotate(90deg);
			}	
			.el-icon-more,.el-icon-information{
				color:#fff;
				font-size:52/@rem;				
			}
			
			.mint-actionsheet{
				position:absolute;
				top:-20/@rem;
				left:-33%;
				width:590/@rem;
				height:290/@rem;
				background-color:#fff;
				border-radius: 10/@rem;

				.mint-actionsheet-list{
					display:flex;
					flex-direction:column;
					height:100%;
					
					.mint-actionsheet-listitem{
						flex:1;
						.flex-style1;
						box-sizing:border-box;
						padding-left: 50/@rem;
						border:none;
						font-size:48/@rem;
						background-color:transparent;
					}
					
				}
			}
			.v-modal{
				opacity:0;
			}			

		}
	}
		
</style>