<template>
  <b-dropdown
    position="is-bottom-left"
    append-to-body
    aria-role="menu"
    trap-focus
    v-if="!$store.getters.isLoggedIn"
  >
    <a class="navbar-item" slot="trigger" role="button">
      <span>Register</span>
      <b-icon icon="menu-down"></b-icon>
    </a>

    <b-dropdown-item aria-role="menu-item" :focusable="false" custom paddingless>
      <form action>
        <div class="modal-card" style="width:300px;">
          <section class="modal-card-body">
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
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" @click="register">Register</button>
          </footer>
        </div>
      </form>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      regUsername: "",
      regPassword: "",
      firstName: "",
      lastName: "",
      phone: ""
    };
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
        this.$buefy.notification.open({
          message: "You have registered successfully and may now login!",
          type: "is-success",
          hasIcon: true
        });
        console.log(response);
      } catch (err) {
        this.$buefy.notification.open({
          message: "Username already exists!",
          type: "is-danger",
          hasIcon: true
        });
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
</style>
