<template>
  <div>
  		<h1>Register</h1>
  		<form>
			<basic-form @basicFormSubmitted="register" />
  		</form>
  </div>		
</template>

<script>

	import BasicForm from './BasicForm.vue'

	export default {
		components: {
			BasicForm
		},
		methods: {
			register(email, password){

			}
		}
	}
</script>

<style scoped>

</style>