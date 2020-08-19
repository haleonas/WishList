<template>
  <div class="home">
    <section class="hero is-success is-fullheight is-bold">
      <div class="hero-body">
        <div class="container">
          <p class="title">Never get two pairs of identical socks again!</p>
          <p class="subtitle">Register today to start sharing your wishlists with friends and family</p>
        </div>
      </div>
    </section>

    <!--<app-name-selector @name-selected="updateSelected"></app-name-selector>

    {{ selected }}-->
  </div>
</template>

<script>
//import NameSelector from "@/components/NameSelector";
//import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      username: "",
      password: "",
      selected: []
    };
  },
  components: {
    //appNameSelector: NameSelector
  },
  methods: {
    /*updateSelected(item) {
      this.selected = item;
    },
    async loginUser() {
      await axios.post(
        "http://localhost:3000/login",
        {
          username: this.username,
          password: this.password
        },
        { withCredentials: true }
      );
    }*/
  }
};
</script>
