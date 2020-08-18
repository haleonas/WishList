<template>
  <nav class="navbar">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Logo/Name</router-link>
      <router-link to="/my-wishlists" class="navbar-item">My Wishlists</router-link>
      <router-link to="/friends-wishlists" class="navbar-item">Friends Wishlists</router-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
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

        <b-dropdown
          position="is-bottom-left"
          append-to-body
          aria-role="menu"
          trap-focus
          v-if="!$store.getters.isLoggedIn"
        >
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

        <b-dropdown
          position="is-bottom-left"
          append-to-body
          aria-role="menu"
          trap-focus
          v-if="$store.getters.isLoggedIn"
        >
          <a class="navbar-item" slot="trigger" role="button">
            <span>{{ $store.getters.getUser.username }}</span>
            <b-icon icon="menu-down"></b-icon>
          </a>
          <b-dropdown-item aria-role="menu-item" :focusable="false" custom paddingless>
            <form action>
              <div class="modal-card" style="width:300px;">
                <section class="modal-card-body"></section>
                <footer class="modal-card-foot">
                  <button class="button is-success" @click="logout">Logout</button>
                </footer>
              </div>
            </form>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  created() {},
  data() {
    return {
      regUsername: "",
      regPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
      logUsername: "",
      logPassword: ""
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
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    async login() {
      try {
        let response = await axios.post(
          "http://localhost:3000/login",
          {
            username: this.logUsername,
            password: this.logPassword
          },
          { withCredentials: true }
        );
        console.log(response);
        let user = response.data.user;
        let token = response.data.token;
        this.$store.dispatch("login", { user, token });
        this.$router.push("/my-wishlists");
      } catch (err) {
        console.log(err);
      }
    },
    async logout() {
      this.$store.dispatch("logout");
      try {
        let response = await axios.post(
          "http://localhost:3000/logout",
          {
            userid: this.$store.getters.getUser.userid,
            token: this.$store.state.token
          },
          { withCredentials: true }
        );
        console.log(response);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
</style>