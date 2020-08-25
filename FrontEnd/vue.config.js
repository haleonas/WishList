module.exports = {
    pwa: {
        name: 'Wishlist',
        workboxOptions: {
            swSrc: 'sw.js'
        },
        workboxPluginMode:'InjectManifest',
        manifestOptions: {

        }
    }
}