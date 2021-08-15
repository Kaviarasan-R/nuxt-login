<template>
	<div class="main">
		<div class="form-container">
			<div class="card bg-light mb-3" style="max-width: 20rem;">
			  <h3 class="card-header">Login</h3>
			  <form class="needs-validation" @submit.prevent="loginUser" novalidate>
				  <div class="card-body">
					  <div class="form-group row">
					    <h5 class="card-title mb-9 mr-3" for="colFormLabel">Email</h5><br>
					    <div class="col-sm-10">
					      <input type="email" class="form-control mb-3" v-model="formData.email" id="colFormLabel" placeholder="Email">
					    </div>
						  <div class="form-group">
						    <h5 class="card-title mb-9 mr-3" for="inputPassword6" >Password</h5>
						    <input type="password" id="inputPassword6" class="form-control pass" v-model="formData.password" aria-describedby="passwordHelpInline" placeholder="Password">
						  </div>
			        <div class="col-auto">
						    <div class="form-check mb-2">
						      <input class="form-check-input" type="checkbox" id="autoSizingCheck">
						      <label class="form-check-label" for="autoSizingCheck">
						        Remember me
						      </label>
						    </div>
						  </div>
					  </div>
			      <b-button variant="primary" type="submit" @click="modalShow = !modalShow">Login</b-button>
  					<b-modal v-model="modalShow" title="Login Page">{{mes}}</b-modal>
  					<NuxtLink to="/" class="reg" >Register</NuxtLink>
				  </div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			formData: {
				email: null,
				password: null
			},
			modalShow: false,
			mes: null
		}
	},
  computed: {
    ...mapState(['User'])
  },
	methods: {
		loginUser() {
			const {email,password} = this.formData
			if(this.User[0] == null){
				this.mes = 'Sorry, there is no registered user'
			}else if (email == "" || password == "") {
				alert("Every fields must be filled out");
				return false;
			} else if(this.User[0].email == email && this.User[0].password == password){
				this.mes = 'Login Successfull'
			} else if(this.User[0].email !== email && this.User[0].password !== password) {
				this.mes = 'Sorry, Email or Password is incorrect'
			}
			this.formData= {
				email: null,
				password: null
			}
		}
	}
}

</script>

<style lang="css" scoped>
.main {
	width: 100%;
	height: 100%;
	background-color: rgb(32, 33, 36);
}
.card {
	height: 24rem;
}
.card-header {
	color: black;
	text-align: center;
}
.card-title{
	margin-left: 35px;
}
.reg{
	margin-left: 20px;
}
.card-body {
	color: black;
}
.card title {
	color: black;
	text-align: center;
}
.form-control {
	margin-left: 20px;
}
.pass {
	margin-left: 33px;
}
.form-check, .btn{
	margin-left: 20px;
}
.form-container {
	width: 600px;
	height: 300px;
	display: flex;
	justify-content: center;
	margin-top: 170px;
	margin-left: 380px;
	color: white;
}
</style>