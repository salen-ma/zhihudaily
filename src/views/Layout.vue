<template>
	<section>
		<custom-header :name="name"/>
		<router-view></router-view>
		<!-- 侧边栏主题列表 -->
		<slide-menu></slide-menu>	
	</section>
</template>

<script>
	import Header from '../components/Header.vue'
	import SlideMenu from '../components/SideMenu.vue'

	export default{
		components:{
			'custom-header':Header,
			SlideMenu
		},
		data(){
			return{
				name:''
			}
		},
		mounted(){
			this.name = this.$route.name
		},
		updated(){
			this.name = this.$route.name
		}			
	}
</script>

<style lang="less" scoped>
	@rem:40rem;
	section{
		height:100%;
	}	
</style>