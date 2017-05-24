<template>
	<section>
		<custom-header />
		<router-view></router-view>
	</section>
</template>

<script>
	import Header from '../components/Header.vue'

	export default{
		components:{
			'custom-header':Header
		}
	}
</script>