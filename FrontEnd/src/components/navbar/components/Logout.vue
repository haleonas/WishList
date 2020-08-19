<template>
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
</template>

<script>
import axios from "axios";

export default {
  name: "Logout",
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      try {
        let response = await axios.post(
            "http://localhost:3000/logout",
            {
              userid: this.$store.getters.getUser.userid,
              token: this.$store.state.token
            },
            {withCredentials: true}
        );
        console.log(response);
        await this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>
