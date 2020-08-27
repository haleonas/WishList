<template>
  <div>
    <h3>{{name}}</h3>
    <br />

    <items
      v-for="item in items"
      :key="item.list_item_id"
      :item-data="item"
      @completed-change="updateList"
    ></items>
    <hr />Assinged users
    <br />
    <section v-for="user in users" :key="user.userid">{{user.showName}}</section>
  </div>
</template>

<script>
import axios from "axios";
import Item from "@/components/Item";

export default {
  name: "Details",
  components: {
    items: Item,
  },

  data() {
    return {
      users: [],
      items: [],
      name: "",
    };
  },

  beforeMount() {
    this.getItems();
  },

  methods: {
    async getItems() {
      try {
        const res = await axios.get("http://localhost:3000/list", {
          params: { listUrl: this.$route.params.url },
          withCredentials: true,
        });
        this.name = res.data.listName;
        this.items = res.data.items;
        this.users = res.data.users;

        this.users.map(
          (user) =>
            (user.showName = `${user.firstname} ${user.lastname} (${user.phone})`)
        );
        this.items.map(
          (item) => (item.completed = item.completed ? true : false)
        );
      } catch (e) {
        this.showNotification(`${e}`);
      }
    },

    async updateList(value) {
      try {
        await axios.patch(
          "http://localhost:3000/list",
          { itemList: this.items },
          { withCredentials: true }
        );
        this.showNotification("List updated");
      } catch (e) {
        this.showNotification(`${e}`);
      }

      console.log(value);
    },

    showNotification(message) {
      this.$buefy.notification.open({
        message,
        duration: 3000,
        type: "is-info",
        position: "is-top",
      });
    },
  },
};
</script>

<style scoped>
</style>

