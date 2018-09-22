<template>
  <div>
	<div class="group">
		<label>Email</label>
		<input type="email" id="email" name="email" v-model="email">
	</div>
	<div class="group">
		<label>Password</label>
		<input type="password" id="password" name="password" v-model="password">
	</div>

	<div class="group">
		<input type="submit" value="send" @click="submitForm" />
	</div>	
  </div>		
</template>

<script>
	export default {
		name: 'basic-form',
		data(){
			return {
				email: '',
				password: ''
			}
		},

		methods: {
			submitForm(e){
				e.preventDefault()

				this.$emit('basicFormSubmitted', this.email, this.password)
			}
		}
	}
</script>

<style scoped>

</style>