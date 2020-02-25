<template>
	<div id="gitlist">
		<div v-for="list of item">
			<h1>{{item.mpName}}</h1>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				item:this.$route.params.item
			}
		}
		
		
	}
</script>

<style>
</style>