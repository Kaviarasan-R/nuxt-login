<template>
	<div class="main">
		<h1 class="header">Register</h1>
		<NuxtLink to="/login">Login</NuxtLink>
		<div class="form-container">
			<form class="needs-validation" @submit.prevent="registerUser" name="myForm" novalidate>
			  <div class="form-row">
			    <div class="col-md-4 mb-3">
			      <label for="validationCustom01">First name</label>
			      <input type="text" class="form-control" v-model="formData.firstname" id="validationCustom01" placeholder="First name" name="firstname" required>
			      <div class="valid-feedback">
			        Looks good!
			      </div>
			    </div>
			    <div class="col-md-4 mb-3">
			      <label for="validationCustom02">Last name</label>
			      <input type="text" class="form-control" v-model="formData.lastname" id="validationCustom02" placeholder="Last name" name="lastname" required>
			      <div class="valid-feedback">
			        Looks good!
			      </div>
			    </div>
			    <div class="col-md-4 mb-3">
			      <label for="validationCustomUsername">Username</label>
			      <div class="input-group">
			        <div class="input-group-prepend">
			          <span class="input-group-text" id="inputGroupPrepend">@</span>
			        </div>
			        <input type="text" class="form-control" v-model="formData.username" id="validationCustomUsername" placeholder="Username" name="username" aria-describedby="inputGroupPrepend" required>
			        <div class="invalid-feedback">
			          Please choose a username.
			        </div>
			      </div>
			    </div>
			  </div>
			  <div class="form-row">
			    <div class="col-md-6 mb-3">
			      <label for="validationCustom03">City</label>
			      <input type="text" class="form-control" v-model="formData.city" id="validationCustom03" placeholder="City" name="city" required>
			      <div class="invalid-feedback">
			        Please provide a valid city.
			      </div>
			    </div>
			    <div class="col-md-3 mb-3">
			      <label for="validationCustom04">State</label>
			      <input type="text" class="form-control" name="state" v-model="formData.state" id="validationCustom04" placeholder="State" required>
			      <div class="invalid-feedback">
			        Please provide a valid state.
			      </div>
			    </div>
			    <div class="col-md-3 mb-3">
			      <label for="validationCustom05">Zip</label>
			      <input type="text" class="form-control" name="zip" v-model="formData.zip" id="validationCustom05" placeholder="Zip" required>
			      <div class="invalid-feedback">
			        Please provide a valid zip.
			      </div>
			    </div>
			  </div>
		    <div class="form-row">
		      <div class="col-md-6 mb-3">
				    <label for="inputEmail3">Email</label>
			      <input type="email" class="form-control" name="email" v-model="formData.email" id="inputEmail3" placeholder="Email" required>
				  </div>
				  <div class="col-md-6 mb-3">
				    <label for="inputPassword3">Password</label>
			      <input type="password" name="password" class="form-control" v-model="formData.password" id="inputPassword3" placeholder="Password" required>
				  </div>
				</div>
			  <div class="form-group">
			    <div class="form-check">
			      <input class="form-check-input" name="check" type="checkbox" value="" id="invalidCheck" required>
			      <label class="form-check-label" for="invalidCheck">
			        Agree to terms and conditions
			      </label>
			      <div class="invalid-feedback">
			        You must agree before submitting.
			      </div>
			    </div>
			  </div>
			  <button class="btn btn-primary" type="submit">Register</button>
			</form>
		</div>
	</div>
</template>

<script>
import {mapMutations} from "vuex"

export default {
	data() {
		return {
			formData: {
				firstname: null,
				lastname: null,
				username: null,
				city: null,
				state: null,
				zip: null,
				email: null,
				password: null
			}
		}
	},
	methods: {
		...mapMutations(['addUser']),
		registerUser() {
			const {firstname,lastname,username,city,state,zip,email,password} = this.formData
			const payload = {firstname,lastname,username,city,state,zip,email,password}
			if(firstname == "" || lastname == "" || username == "" || city == "" || state == "" || zip
				== "" || email == "" || password == "") {
				alert("Every fields must be filled out");
				return false;
			}else {
		    this.addUser(payload)
				this.formData= {
					firstname: null,
					lastname: null,
					username: null,
					city: null,
					state: null,
					zip: null,
					email: null,
					password: null
				}					
			}
		}
	}
}

</script>

<style lang="css" scoped>
a {
	margin-left: 920px;
}
.main {
	width: 100%;
	height: 100%;
	background-color: rgb(32, 33, 36);
}
.header{
	display: flex;
	justify-content: center;
	margin-top: 100px;
	margin-bottom: 0px;
	color: white;
}
.form-container {
	width: 600px;
	height: 300px;
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-left: 370px;
	color: white;
}

</style>