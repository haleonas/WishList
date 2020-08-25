<template>
    <div id="container-for-website">
        <div id="container-for-content">
            <div class="content">
                <div id="title-section">
                    <img id="logo" src="../assets/logo.png" alt="bild finns ej">
                    <h1 id="name">WishList</h1>
                </div>
                <div id="information-section">
                    <h1 style="font-size: 5rem;">Create i List for all you wishes</h1>
                    <p style="font-size: 27px;"> Our philosphy is to make your whishing list the best you ever made. We make it easy for you to add, remove, change, share... you name it. Give it a shot at it, if you did not like it at least you got your whises written down em i right !! Underneith is our gift to you :D </p>
                    
                    <form>
                        <div id="toggle-img" @click="active = !active">
                            <img v-show="active" class="present-icon-btn" src="../assets/gift.png" alt="">
                            <div v-show="active" id="SpeechBubble">Open me</div>
                        </div>
                        <div id="container-after-present-input">
                                <div v-show="!active" id="wrapper-after-present-input">
                                    <input v-show="!active" class="input-txt" type="text" placeholder="say something here">
                                    <button v-show="!active" class="input-btn" @click="tryForFree">Try for free</button>
                                </div>
                            </div>
                    </form>
                    <div id="sign-in-wrapper">
                        <p v-show="!active" id="already-signed-in-text">You already created a wish? <a id="Sign-in-link" href="#">Sign in</a> </p>
                    </div>   
                </div>    
            </div>
        </div>
        <div id="container-for-image">
            <div id="img">
                <img src="../assets/PARTY-01.svg" alt="could not find the image" >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LandingPageComp",
    data() {
        return {
            active: true
        } 
    },
    methods: {
        tryForFree() {
            //.......
        }
    }
}
</script>

<style scoped>
    *{
        padding: 0px;
        margin: 0px;
    }
    #container-for-website{
        display: flex;
        height: 100vh;
    }
    #container-for-content {
        width: fit-content;
        box-shadow: 5px 10px 50px rgba(0, 0, 0, 0.28);
        z-index: 1;
        max-width: 900px;
        position: relative;
    }
    #title-section{
        display: flex;
        padding: 26px;
    }
    #name{
        flex: 1;
        margin: auto;
        justify-content:flex-start;
        padding-left: 20px;
        font-size: 2rem;
    }
    #logo{
        width: 64px;
        height: 64px;
    }
    #information-section {
        padding:60px 90px 90px 90px; 
    }
    #information-section p{
       margin-bottom: 100px;
    }
    #already-signed-in-text , #Sign-in-link {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.2rem;
    }
    #Sign-in-link{
        margin-left: 10px;
        font-size: 1.2rem;
        font-weight: bold;
    }
    #Sign-in-link:hover{
       color: green;
    }
    #container-for-image{
        width: 100%;
        height: auto;
        display: flex;
    }
    #img{
        display: flex;
        margin: auto;   
    }
    #container-for-image:hover {
        box-shadow:inset 2px 2px 20px 2000px rgba(0,0,0,.07);
        filter: brightness(93%);
    }
    .container-for-content:hover{
        box-shadow:inset 2px 2px 20px 2000px rgba(0,0,0,.07);
    }
    #container-after-present-input{
        height: 106px;
        align-items: center;
        padding-top: 31px;
    }
    #wrapper-after-present-input{
        display: flex;
        width: 720px;
        max-width: 720px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.18);
    }
    /* this element takes care of the (<div id="toggle-img" @click="active = !active">) = transperent button*/
    #toggle-img{
        width: fit-content;
        height: fit-content;
        position: relative;
    }
    #SpeechBubble{
        pointer-events: none; /* so the user cant open the present by clicking on the speetch bubble */
    }
    .input-txt {
        display: flex;
        width: 80%;
        align-items: center;
        border-radius: 4px;
        outline: none;
        border: none;
        font-size: 1.5rem;
        background-color: white;
        padding: 12px 20px 12px 20px;
        animation: showInput 1.4s ease-in-out;
    }
    .input-btn{
        border: none;
        font-size: 16px;
        outline: none;
        padding: 12px 20px 12px 20px;
        animation: showInput 1.4s ease-in-out;
        font-size: 1.5rem;
        width: 300px;
    }
    .input-btn:hover{
        background: olivedrab;
    }
    @keyframes showInput {
        0%   {opacity: 0%;}
        100% {opacity:100%;}
    }

    /* 
        the actual present-icon as shown in the website 
    */
    .present-icon-btn {
        visibility: visible;
        width: 100px;
        cursor: pointer;
        z-index: 10;
        animation-name: present-icon-btn; /*connects to the keyframe of the animation that will occur*/
        
        animation-duration: 0.20s; /* Specifies how many seconds or milliseconds a transition effect takes to complete */
        
        animation-timing-function: linear; /*definition of how the animation should move time wise = called timing-function*/
                                            /* Some examples would be:
                                                * ease-in = specifies a transition effect with a slow start, then fast, then end slowly
                                                * ease-in-out = specifies a transition effect with a slow start and end  
                                                * linear = specifies a transition effect with the same speed from start to end
                                            */
        
        animation-iteration-count: infinite; /*animation never stops*/
        animation-delay: 3s;
    }
    
    @keyframes present-icon-btn {
        50% { /* halfway in to the animation as this is the Percentage of the animation duration */
            transform: translateX(3px) rotate(2deg);
        }
        100% {
            transform: translateX(-3px) rotate(-2deg);
        }
    }
    

/*
    speech bubble
*/

    /* #SpeechBubble is set as a child of #Rectangle to make positioning
    it easier. #SpeechBubble is given an absolute position so that its 
    position is relative to the #Rectangle (its parent). Its scale is 
    set to zero since it should only appear when the mouse hovers over
    #Rectangle. The 'animation-fill-mode' property is set to 'forwards' 
    so that  the scale value stays at 1 after the animation finishes, 
    otherwise  #SpeechBubble will disappear once the animation finishes. 
    The 'animation-name' property is omitted since it's going to be 
    set by jQuery instead */
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
    /* We need to add a tail to the speech bubble. This is done using
    the ::before pseudo-element. The tail's size is controlled by 
    its borders. The right and bottom borders are given a transparent
    color so that the tail still retains its shape while giving the
    desired look */
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
        /* Here the scale changes from 0 to 1. To add the bounciness 
    effect, the scale is set to 1.25 midway through the animation
    to give the animation a nicer effect. */
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

    /* Here the scale simply goes from 1 back to 0 */
    @keyframes shrink {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
</style>