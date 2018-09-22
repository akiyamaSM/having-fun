<template>
</template>

<script>
	export default {
		created(){
			this.$store.dispatch('logout')
			this.$router.push('/')
		}
	}
</script>

<style scoped>

</style>