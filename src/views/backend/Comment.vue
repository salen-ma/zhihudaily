<template>
	<div id="comments">
		<div class="len-comm">
			<h3>0条长评</h3>
			<div class="content"></div>
		</div>
		<div class="short-comm">
			<h3>9条短评</h3>
			<div class="content"></div>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="less">
	@rem:40rem;
	#comments{
		height:100%;
		box-sizing: border-box;
		padding-top:168/@rem;
		overflow: hidden;

		.len-comm{
			height:100%;
		}
		h3{
			height: 140/@rem;
			padding-left:48/@rem;
			border-bottom: 3px solid #e5e5e5;
			font-size:46/@rem;
			line-height: 140/@rem;
		}
	}
</style>