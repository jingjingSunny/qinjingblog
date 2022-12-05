<template>
  <div id="app" >
	<!-- 头部 -->
	<com-nav></com-nav>
  </div>
</template>
<script>
export default {
	name: 'app',
	created(){
		this.$nextTick(()=>{
			document.oncontextmenu = new Function('event.returnValue=false')
			// document.onselectstart = new Function('event.returnValue=false')
		})
	},
	
	methods: {
	}
}
</script>
<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
<style lang="scss">
@import './src/assets/css/public.scss';
</style>
