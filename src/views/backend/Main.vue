<template>
	<div id="main">
		<custom-carousel />
		<custom-list />
	</div>
</template>

<script>
	import Carousel from '@/views/backend/Carousel'
	import List from '@/views/backend/List'

	export default{
		components:{
			'custom-carousel':Carousel,
			'custom-list':List
		}
	}
</script>


