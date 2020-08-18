<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  updated() {
    this.displayNotification()
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
