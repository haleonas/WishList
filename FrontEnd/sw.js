if (workbox) {
    workbox.precaching.precacheAndRoute(['/index.html'])
    workbox.routing.registerRoute(
        /\.(css|html|js|webmanifest|manifest|json)$/,
        new workbox.strategies.NetworkFirst()
    )
    workbox.routing.registerRoute(
        /\.(png|jpg)$/,
        new workbox.strategies.CacheFirst()
    )
    workbox.routing.registerRoute(
        "http://localhost:3000/user/",
        new workbox.strategies.StaleWhileRevalidate, 'GET'
    )
    //hemside url, offline strategi, requesttyp
}

self.addEventListener('offline', () => {
    console.log('Offline')
})

self.addEventListener('online', () => {
    console.log('Online')
})

self.addEventListener('push', event => {
    const {body, title} = event.data.json()

    self.registration.showNotification(title, {body})
})