<template>
  <div id="app">
      <navbar/>  
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";
import io from 'socket.io-client'

export default {
  components: {
    Navbar
  },
  
  updated() {
    this.displayNotification()
  },
  mounted() {
    Notification.requestPermission(status => {
      console.log('show notifications: ' + status)
     
    })

    //connecting to server socket
    const client = io.connect('http://localhost:3000')

    //to make sure that if the user is logged in, the user will get all the users,
    // and show the navbar
    if (this.$store.getters.isLoggedIn) {
      console.log('retrieving users')
      this.$store.dispatch('retrieveUsers')
      
    }else{
     
      console.log('inte inloggad');
      
    }
    
    //when backend makes a emit for 'update', update all retrieved users
    client.on('update', () => {
      console.log('Someone has registered')
      if (this.$store.getters.isLoggedIn) {
        console.log('retrieving new users')
        this.$store.dispatch('retrieveUsers')
      }
    })
    
  },
  methods: {
    displayNotification() {
      if (Notification.permission === 'granted') {
        if (!navigator.onLine) {
          navigator.serviceWorker.ready
              .then(ServiceWorkerRegistration => {

                console.log(ServiceWorkerRegistration)
                const title = 'Offline notification'
                const options = {
                  body: 'You are currently offline',
                  tag: 'confirm-notification',
                  renotify: true
                }
                ServiceWorkerRegistration.showNotification(title, options)
              })
        }
      }
    }
  }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
}
</style>
