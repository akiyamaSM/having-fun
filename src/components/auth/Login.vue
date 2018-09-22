<template>
  <div>
		<h1>Login</h1>
		<form>
			<basic-form @basicFormSubmitted="login" />
		</form>
  </div>		
</template>

<script>

	import BasicForm from './BasicForm.vue'

	export default {
		components: {
			BasicForm
		},
		methods:{
			login(email, password){
				// make ajax call to login
			}
		}
	}
</script>

<style scoped>

</style>