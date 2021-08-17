<template>
  <div>
    <v-card app flat class="register__card">
      <v-card-title class="register__header justify-center">REGISTER</v-card-title>
      <v-form @submit.prevent="registerUser" name="myForm">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="4"
            >
              <v-text-field
                label="First Name"
                filled
                v-model="formData.firstname"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="4"
            >
              <v-text-field
                label="Last Name"
                filled
                v-model="formData.lastname"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="4"
            >
              <v-text-field
                label="User Name"
                filled
                v-model="formData.username"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                filled
                label="Location"
                append-icon="mdi-map-marker"
                v-model="formData.location"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Your Email ID"
                hint="example@gmail.com"
                v-model="formData.email"
                persistent-hint
                filled
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="formData.password1"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2 createpassword"
                label="Create Password"
                hint="At least 8 characters"
                value=""
                class="input-group--focused"
                @click:append="show2 = !show2"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="formData.password2"
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show3 ? 'text' : 'password'"
                name="input-10-2 confirmpassword"
                label="Confirm Password"
                hint="At least 8 characters"
                value=""
                class="input-group--focused"
                @click:append="show3 = !show3"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-checkbox v-model="formData.checkbox" class="check">
                <template v-slot:label>
                  <div>
                    I agree to <span id="terms">terms</span> and conditions
                  </div>
                </template>
              </v-checkbox>
            </v-col>

          </v-row>
        </v-container>
        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            elevation="23"
            large
            class="mb-3 ml-3 my-0 register__button"
            type="submit"
            @click="snackbar = true"
          > Register </v-btn>

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
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      show2: true,
      show3: false,
      checkbox: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
      formData: {
        firstname: null,
        lastname: null,
        username: null,
        location: null,
        email: null,
        checkbox: null,
        password1: '',
        password2: ''
      },
      mes: '',
      snackbar: false,
      timeout: 2000
    }
  },
  methods: {
    ...mapMutations(['add']),
    registerUser() {
      const {firstname,lastname,username,location,email,checkbox,password1,password2} = this.formData
      const payload = {firstname,lastname,username,location,email,checkbox,password1,password2}
      if(!firstname || !lastname || !username || !location || !email || !checkbox || !password1 || !password2) {
        this.mes = "Every fields must be filled out";
      }else if(password1 !== password2) {
        this.mes = "Confirm password is not correct";
      } else {
        console.log(payload);
        this.add(payload)
        this.mes = "Registered Successfully"
        this.formData= {
          firstname: null,
          lastname: null,
          username: null,
          location: null,
          email: null,
          checkbox: null,
          password1: '',
          password2: ''
        }         
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  margin: auto;
  position: relative;
  .register__card {
    max-width: $card-register-width;
    max-height: $card-register-height;
    .register__header {
      font-family: $font;
    }
    .check {
      margin-left: 30px;
      margin-right: 0;
    }
    .register__button {
      font-family: $font;
    }
  }
}
</style>

