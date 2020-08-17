importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if(workbox){
    workbox.precaching.precacheAndRoute(['/index.html'])
    workbox.routing.registerRoute(
        /\.(css|html|js|webmanifest)$/,
            new workbox.strategies.NetworkFirst()
    )
    workbox.routing.registerRoute(
        /\.(png|jpg)$/,
        new workbox.strategies.CacheFirst()
    )
    workbox.routing.registerRoute(
        "https://avancera.app/cities/",
        new workbox.strategies.StaleWhileRevalidate,'GET'
    )
    //hemside url, offline strategi, requesttyp
}

self.addEventListener('offline', () => {
    console.log('Offline')
})

self.addEventListener('online', () => {
    console.log('Online')
})