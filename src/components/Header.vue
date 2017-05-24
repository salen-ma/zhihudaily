<template>
	<header id="head">
		<div class="left">
			<i class="menu"></i>
			<router-link to="/">首页</router-link>
		</div>
		<div class="right">
			<i class="el-icon-information"></i>
			<i class="el-icon-more"></i>
		</div>		
	</header>	
</template>

<script>
	export default{

	}
</script>

<style lang="less" scoped>
	@rem:40rem;
	.flex-style1{
		display:flex;
		justify-content: space-between;
		align-items: center;		
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
		}
	}
		
</style>