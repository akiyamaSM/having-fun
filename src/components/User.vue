<template>
  <div>
  		Team id is {{ id }}
  		<button @click="goBackHome" >Go Home</button>
  </div>		
</template>

<script>
	export default {
		data(){
			return {
				id : this.$route.params.id
			}
		},
		methods: {
			goBackHome(){
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped>

</style>