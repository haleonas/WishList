module.exports = {
    pwa: {
        name: 'Wishlist',
        themeColor: 'green',
        workboxOptions: {
            swSrc: 'sw.js'
        },
        workboxPluginMode:'InjectManifest',
        manifestOptions: {
            background_color: 'green',
        },
        favicon16: 'img/icons/favicon-16x16.png',
        favicon32: 'img/icons/favicon-32x32.png',
        appleTouchIcon: 'img/icons/apple-touch-icon.png',
        maskIcon: 'img/icons/safari-pinned-tab.svg',
        msTileImage: 'img/icons/mstile-150x150.png'
    }
}