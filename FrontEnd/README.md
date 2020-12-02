# wishlist

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
<div>
Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

<div>Icons made by <a href="https://www.flaticon.com/authors/pixelmeetup" title="Pixelmeetup">Pixelmeetup</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

  

/*
    Speech bubble
*/
    #SpeechBubble{
        pointer-events: none; /* so the user cant open the present by clicking on the speetch bubble */
    }

    /* #SpeechBubble is set as a child of #present to make positioning
    it easier. #SpeechBubble is given an absolute position so that its 
    position is relative to the #present (its parent). Its scale is 
    set to zero since it appear when the website opens. The 'animation-fill-mode' property is set to 'forwards' 
    so that the scale value stays at 1 after the animation finishes, 
    otherwise #SpeechBubble will disappear once the animation finishes. */
    
    #SpeechBubble {
        position: absolute;
        transform-origin: 0% 100%; 
        text-align: center;
        background-color: #5a5a5a;
        color: white;
        border-radius: 10px;
        width: 120px;
        padding: 10px;
        left: 125px;
        top: -60px;
        transform: scale(0);
        animation-fill-mode: forwards;
        animation-name: expand-bounce;
        animation-timing-function: ease-in ;
        animation-duration: 0.8s;
        animation-delay: 2s;

    }
    /* This is the tail to the speech bubble. This is done using
    the ::before pseudo-element. The tail's size is controlled by 
    its borders. The right and bottom borders are given a transparent
    color so that the tail still retains its shape */
    
    #SpeechBubble::before {
        content: "";
        display: block;
        width: 0;
        position: absolute;
        bottom: -22px;
        left: 10px;
        border-style: solid;
        border-width: 15px;
        border-color: #5a5a5a transparent transparent #5a5a5a;
        transform: rotate(10deg);
    }
    /* Expand-bounce triggers 3 times where the scale 
    changes from 0 to 1. To add the bounciness effect, 
    the scale is set to 1.25 midway through the animation. */
    
    @keyframes expand-bounce {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }

