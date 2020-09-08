<template>
    <div id="container-for-website">
        <div id="container-for-content">
            <div class="content">
                <div id="title-section">
                    <img id="logo" src="../assets/logo.png" alt="Kan inte hitta logan">
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
                        <p v-show="!active" id="already-signed-in-text">You already created a wish? <a id="Sign-in-link" href="http://localhost:8081/#/login">Sign in</a> </p>
                    </div>   
                    
                </div>
            </div>
        </div>
        <div class="container-for-gridlayout">
            <div id="gridlayout-svg">
                <div class="SvgContainer">
                    <img src="../assets/SVG/Asset-1.svg" alt="could not find the image 1">
                    <div> <!-- DIV is used for respective svg files and gives the ability to control the <span> markup => centering the text over the Svg -->
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>

                </div>
                <div class="SvgContainer">
                    <img src="../assets/SVG/Asset-2.svg" alt="could not find the image 2">
                    <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/SVG/Asset-3.svg" alt="could not find the image 3">
                    <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/SVG/Asset-4.svg" alt="could not find the image 4">
                    <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/SVG/Asset-5.svg" alt="could not find the image 5">
                   <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/SVG/Asset-6.svg" alt="could not find the image 6">
                   <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/SVG/Asset-7.svg" alt="could not find the image 7">
                    <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/SVG/Asset-8.svg" alt="could not find the image 8">
                    <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/SVG/Asset-9.svg" alt="could not find the image 9">
                    <div class="titleWhenHoveredOverIcon">
                        <span >Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>        
            </div> 
        </div>  
    </div>
</template>

<script>
export default {
    name: "LandingPageComp",
    data() {
        return {
            active: true, // check if present is open or not and correspond that with the HTML (v-show="!active" or v-show="active")
            iconsTitleIsActive: false
        } 
    },  
    methods: {
        tryForFree() {
            this.$router.push({name: 'RegisterFromLandingPage'})
            }
        },
        enteredIcon() {
            this.iconsTitleIsActive = true
            console.log('entered element');
            
        },
        leftIcon: function() {
            this.iconsTitleIsActive = false
            console.log('left element');
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
        
        z-index: 10;
        max-width: 900px;
        height: 100vh;
    }
    #title-section{
        display: flex;
        padding: 26px;
    }
    /* Name aka title for the name of the project */
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
       margin-bottom: 3%;
    }
    #already-signed-in-text , #Sign-in-link {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.2rem;
    }
    #Sign-in-link{
        margin-left: 10px;
        font-weight: bold;
    }
    #already-signed-in-text {
        margin-top: 10px;
    }
    #Sign-in-link:hover{
       color: green;
    }
    .container-for-gridlayout{
        display: flex;
        margin: auto;
        width: 100vw;
        height: 100vh;

    }
    #gridlayout-svg img{
        max-height: 11vh;
        width: 11vw;
        
    }
    #gridlayout-svg{
        margin: auto;
        position: relative;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        min-width: 430px;
        min-height: 430px;
        gap:80px;
        margin-top: 15vh;
    }
    /* The psuedo-class that attaches to the elemnt below creates in an interactive experience 
    for the user */
    .container-for-gridlayout:hover{
         box-shadow:inset 2px 2px 20px 2000px rgba(0,0,0,.07);
    }
    #container-after-present-input{
        height: fit-content;
        align-items: center;
        padding-top: 31px;
    }
    #wrapper-after-present-input{
        display: flex;
        max-width: 100%;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.18);
    }
    /* This element takes care of the (<div id="toggle-img" @click="active = !active">) = transperent button*/
    #toggle-img{
        width: fit-content;
        height: fit-content;
        position: relative;
    }
    
/* 
    The actual present-icon as shown in the website 
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
        animation-delay: 3s; /* this will make present shake efter 3 seconds from that the site is opened */
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
    Input that will be shown after the user interacts with present
*/

    /* This will probably get taken away, but i still have it for now */
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
        width: 30%;
    }
    .input-btn:hover{
        background: olivedrab;
    }

    @keyframes showInput {
        0%   {opacity: 0%;}
        100% {opacity:100%;}
    }

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

/*
    - Title styling when hovering trough the svg images in the landingpage
    - This relates to all SVG files
*/

/* positioning the SVG icons and also fade in when page is open */
.SvgContainer {
    position: relative;
    display: table;
    margin: auto;
    animation-name: show-up-the-SVG-icons;
    animation-duration: 1.80s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}
/* position and design on the text that will appear */
.titleWhenHoveredOverIcon {
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    background: rgba(240,240,240,.6);
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 4px;
    width: 80%;
    transition: .3s all ease-out;
    opacity: 0;
}


.SvgContainer:hover .titleWhenHoveredOverIcon {
    opacity:1;
}

@keyframes show-up-the-SVG-icons {
    0%{
        opacity: 0;
    }100% {
        opacity: 1;
    }
}

/* 
    ---------------------------------------------
    Built för screens width min-width of 1500px - cover all mobile surfaces
    ---------------------------------------------
*/
@media only screen and (max-width: 1500px){
    #container-for-website{
        flex-wrap: wrap;        
    }
    #container-for-content{
        max-width: 100%;
        height: fit-content;
        flex-wrap: wrap;
        background: rgb(173, 166, 143);
    }
    #information-section {
        padding:20px 30px 10px 30px; 
    }
    #information-section h1{
        font-size: 13vw;
    }
    #already-signed-in-text , #Sign-in-link {
        font-size: 1em;
        margin-right: 2.5%;
    }
    
    #wrapper-after-present-input{
        background: olive;
        margin-left:5%;
        margin-right:5%;
    }
    #gridlayout-svg{
        gap: 100px;
        transform: scale(1.3);
    }
    .container-for-gridlayout :hover{
        max-height: 100vh;
    }
}

/* 
    ---------------------------------------------
    Built för screens width min-width of 1500px - cover all mobile surfaces
    ---------------------------------------------
*/
@media only screen and (min-width: 1500px){
  
    #container-for-content{
        box-shadow: 5px 10px 50px rgba(0, 0, 0, 0.28);
    }
}

/* 
    ---------------------------------------------
    Built för screens width min-width of 2560
    ---------------------------------------------
*/
@media only screen and (min-width: 2560px){
    .content{
        background: chartreuse;
    }
    .imgContainer img{
        max-height: 13vh;
        width: 10vw;
        justify-content: space-between;
    }
    #gridlayout-svg{
        gap: 100px
    }
}


/*  
    ---------------------------------------------
    Built för screens width min-width of 3840px
    ---------------------------------------------
*/
@media only screen and (min-width: 3840px){
    .content{
        background: turquoise;
    }
    .imgContainer img{
        max-height: 13vh;
        width: 10vw;
        justify-content: space-between;
    }
    #gridlayout-svg{
        gap: 100px
    }
}

</style>