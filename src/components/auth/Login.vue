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
				if(email == 'inanielhoussain@gmail.com' && password == 'pass'){
					this.$store.dispatch('login', {
						email,
						password
					}).then( response => this.$router.push('/') )
					  .catch( error => console.log(error))
				}
			}
		}
	}
</script>

<style scoped>

</style>