<template>
  <div>
		<h1>Login</h1>
		{{ myTest }}
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
		computed: {
			myTest(){
				return this.$store.getters.email;
			}
		},
		methods:{
			login(email, password){
				this.$store.commit('changeText', email)
			}
		}
	}
</script>

<style scoped>

</style>