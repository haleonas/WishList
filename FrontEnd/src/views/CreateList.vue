<template>
  <div id="create-list">
    <section>
      <p class="content">
        <b>Selection:</b>
        {{ radio }}
      </p>
    </section>
    <section v-if="$store.getters.isLoggedIn" id="list">
      <b-field label="Name of list">
        <b-input v-model="listName" type="text" placeholder="Name of the wishlist"></b-input>
      </b-field>
      <hr />
      <div v-for="(item,index) in listItems" :key="index">
        <app-list-item :item="item" :remove="remove" />
      </div>
      <section>
        <button class="button is-primary is-medium" @click="itemForm">Add item to wishlist</button>
      </section>
      <section>
        <hr />
        <section v-for="(friend,index) in listFriends" :key="index">{{ friend.optionName }}</section>Add Friends
        <app-name-selector
          :options="friends"
          :pre-selected="tempList"
          @name-selected="updateSelected"
        />
      </section>

      <section style="margin-top:5px">
        <button class="button is-medium" @click="createList">Save List</button>
        <br />
        <p id="text">Remember to press the Save list button to save the changes you have done</p>
      </section>
    </section>
    <section v-else>You are not logged in and can't create a list nor edit a list</section>
  </div>
</template>

<script>
import axios from "axios";
import AddItemForm from "@/components/AddItemForm";
import ListItem from "@/components/ListItem";
import uniqid from "uniqid";
import NameSelector from "@/components/NameSelector";

export default {
  name: "List",
  components: {
    appListItem: ListItem,
    appNameSelector: NameSelector
  },
  data() {
    return {
      listItems: [],
      listName: "",
      listFriends: [],
      tempList: []
    };
  },
  computed: {
    friends: {
      get() {
        return this.$store.getters.getUsers;
      }
    }
  },
  beforeMount() {
    this.checkList();
  },
  methods: {
    async createList() {
      let listUrl = this.$route.params.list
        ? this.$route.params.list
        : uniqid();

      if (this.listName) {
        const listData = {
          listName: this.listName,
          listUrl,
          items: this.listItems,
          friends: this.listFriends
        };
        const response = this.$route.params.list
          ? await axios.patch("http://localhost:3000/createlist", listData, {
              withCredentials: true
            })
          : await axios.post("http://localhost:3000/createlist", listData, {
              withCredentials: true
            });

        console.log(response.data);
        if (response.status === 200) {
          this.notification("List saved");
          this.$route.params.list
            ? location.reload()
            : await this.$router.push(`/createlist/${listUrl}`);
        } else {
          this.notification("Something went wrong");
        }
      } else {
        this.notification("Missing a title for the list");
      }
    },
    async checkList() {
      if (this.$route.params.list) {
        try {
          const response = await axios.get("http://localhost:3000/editlist", {
            withCredentials: true,
            params: { listUrl: this.$route.params.list }
          });

          this.listName = response.data.listName;
          this.listItems = response.data.items;

          this.tempList = response.data.users;
          this.tempList.map(user => {
            user.optionName = `${user.firstname} ${user.lastname} (${user.phone})`;
          });
          this.listFriends = this.tempList;
          console.log("this route had a parameter");
        } catch (e) {
          this.notification(`${e}`);
        }
      }
    },
    notification(message) {
      this.$buefy.notification.open({
        message: message,
        duration: 3000,
        type: "is-info",
        position: "is-top"
      });
    },
    itemForm() {
      this.$buefy.modal.open({
        parent: this,
        component: AddItemForm,
        props: { name: "", description: "" },
        hasModalCard: true,
        trapFocus: true,
        events: {
          "items-added": value => {
            this.listItems.push(value);
          }
        }
      });
    },
    remove(value) {
      const index = this.listItems.findIndex(item => item === value);
      this.listItems.splice(index, 1);
    },
    updateSelected(friends) {
      this.listFriends = friends;
    }
  }
};
</script>

<style scoped>
#create-list {
}

#text {
  color: #999999;
  margin-bottom: 5rem;
  margin-top: 5px;
}
</style>