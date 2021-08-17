<template>
  <div>
    <v-card app flat class="login__card">
      <v-card-title class="login__header justify-center">LOGIN</v-card-title>
      <v-form @submit.prevent="loginUser" name="myForm">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="12"
            > 
              <v-layout column align-center>
                <v-avatar
                  color="primary"
                  size="85"
                  class="avatar__logo"
                >
                  <img :src="image" class="login__image" />
                </v-avatar>
              </v-layout>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="12"
            >
              <v-text-field
                v-model="formData.name"
                label="Email or Username"
                placeholder="Email or Username"
                name="email"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="12"
            >
              <v-text-field
                v-model="formData.password"
                label="Password"
                placeholder="Password"
                :type="'password'"
                name="password"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
    
          </v-row>
        </v-container>
        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            elevation="23"
            large
            class="mb-3 ml-3 login__button"
            type="submit"
            @click="snackbar = true"
          > Login </v-btn>

          <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            top
          >
          {{ mes }}

            <template v-slot:action="{ attrs }">
              <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="snackbar = false"
              >
              Close
              </v-btn>
            </template>
          </v-snackbar>

        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import {image} from 'assets/img'
import {mapState} from 'vuex'

export default {
  data() {
    return {
      image: image,
      formData: {
        name: null,
        password: ''
      },

      mes: '',
      snackbar: false,
      timeout: 2000,
    }
  },
  computed: {
    ...mapState(["User"])
  },
  methods: {
    loginUser() {
      const {name,password} = this.formData
      console.log({name,password})
      if(!name || !password) {
        this.mes = 'Every fields must be filled out';
      }else if(!this.User[0]) {
        this.mes = "Sorry, there is no registered user";
      }else if( (this.User[0].username == name || this.User[0].email == name ) && this.User[0].password2 == password) {
        this.mes = "Login Successfully"
      }else if( (this.User[0].username !== name || this.User[0].email !== name) || this.User[0].password2 !== password) {
        this.mes = "Sorry, Email or Password is incorrect";
      }
      console.log(this.mes);
      
      this.formData = {
        name: null,
        password: ''
      }

    }
  }
}
</script>

<style lang="scss" scoped>
div{
  margin: auto;
  position: relative;
  .login__card {
    max-width: $card-login-width;
    max-height: $card-login_height;
    margin-top: 35px;
    .login__header {
      font-family: $font;
    }
    .avatar__logo {

    }
    .login__button {
      font-family: $font;
    }
  }
}
</style>


