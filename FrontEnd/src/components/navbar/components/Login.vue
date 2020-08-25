<template>
  <b-dropdown
      position="is-bottom-left"
      append-to-body
      aria-role="menu"
      trap-focus
      v-if="!$store.getters.isLoggedIn">

    <a class="navbar-item" slot="trigger" role="button">
      <span>Login</span>
      <b-icon icon="menu-down"></b-icon>
    </a>

    <b-dropdown-item aria-role="menu-item" :focusable="false" custom paddingless>
      <form action>
        <div class="modal-card" style="width:300px;">
          <section class="modal-card-body">
            <b-field label="Username">
              <b-input type="text" placeholder="Your username" required v-model="logUsername"></b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                  type="password"
                  password-reveal
                  placeholder="Your password"
                  required
                  v-model="logPassword"
              ></b-input>
            </b-field>
            <b-checkbox>Remember me</b-checkbox>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" @click="login">Login</button>
          </footer>
        </div>
      </form>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      logUsername: "",
      logPassword: ""
    }
  },
  methods: {
    async login() {
      try {
        let response = await axios.post(
            "http://localhost:3000/login",
            {
              username: this.logUsername,
              password: this.logPassword
            },
            {withCredentials: true}
        );
        console.log(response);
        let user = response.data.user;
        let token = response.data.token;
        await this.$store.dispatch("login", {user, token});
        await this.$router.push("/my-wishlists");
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>

</style>
