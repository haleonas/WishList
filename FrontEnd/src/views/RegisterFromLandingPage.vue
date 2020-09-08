<template>
<div>
    <form action>
        <div class="modal-card" style="width:300px;">
         
            <b-field label="Username">
              <b-input type="text" placeholder="Username" required v-model="regUsername"></b-input>
            </b-field>
            <b-field label="First name">
              <b-input type="text" placeholder="First name" required v-model="firstName"></b-input>
            </b-field>
            <b-field label="Last name">
              <b-input type="text" placeholder="Last name" required v-model="lastName"></b-input>
            </b-field>
            <b-field label="Phone">
              <b-input type="text" placeholder="Your phone number" required v-model="phone"></b-input>
            </b-field>
            <b-field label="Password">
              <b-input
                  type="password"
                  password-reveal
                  placeholder="Your password"
                  required
                  v-model="regPassword"
              ></b-input>
            </b-field>
         
          
            <button class="button is-success" @click="register">Register</button>
         
        </div>
      </form>
</div>
      
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterLandingPage",
  data() {
    return {
      regUsername: "",
      regPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
    }
  },
  methods: {
    async register() {
      try {
        let response = await axios.post(
            "http://localhost:3000/register",
            {
              username: this.regUsername,
              firstname: this.firstName,
              lastname: this.lastName,
              phone: this.phone,
              password: this.regPassword
            },
            { withCredentials: true }
        );
        console.log(response);
         
        if (response.status === 200) {   
            this.$buefy.notification.open({
            message: "You have registered successfully and may now login!",
            type: "is-success",
            hasIcon: true
        });
            this.$router.push('/')
        }
        this.regUsername = ""
        this.password = ""
        this.firstname = ""
        this.lastname = ""
        this.phone = ""
        } catch (err) {
            this.$buefy.notification.open({
            message: "Username already exists!",
            type: "is-danger",
            hasIcon: true
            })
            console.log(err);
        }
    }
}}
</script>

<style scoped>

</style>
