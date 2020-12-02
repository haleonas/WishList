<template>
  <div class="landing-page" v-bind:class="[bgclrG ? activeG : '', bgclrY ? activeY : '']">
    <!-- Logo -->
    <div class="landing-page-header">
      <img
        class="landing-page-header__logo"
        src="../assets/landingpage/svg/logo.png"
        alt="Kan inte hitta logo"
      />
      <h1 class="landing-page-header__name">WishList</h1>
    </div>

    <!-- title -->
    <div class="landing-page-title">
      <div class="title">
        <div class="title__seq1">
          <span>CREATE</span>
        </div>
        <div class="title__seq2">
          <span>A</span>
        </div>
        <div class="title__seq3">
          <img src="../assets/landingpage/svg/gift-checklist.svg" alt="no Image" />
        </div>
        <div class="title__seq4">
          <span>FOR ALL YOUR</span>
        </div>
        <div class="title__seq5">
          <img src="../assets/landingpage/svg/wish.svg" alt="no Image" />
        </div>
      </div>
      <div class="title__final-seq">
        <span>Create a list for all your wishes</span>
      </div>

      <div class="landing-page-body">
        <form-input />
        <p class="landing-page-body__paragraph">
          Our philosphy is to make your whishing list the best you ever made. We make it easy
          for you to add, remove, change, share... you name it. Give it a shot at it, if you did not like it at
          least you got your whises written down em i right !!
        </p>
      </div>

      <!-- Paragraph -->
      <!-- ska bort innafor denna del -->
      <!-- <button @click="tryForFree">Try for free</button> -->
      <!-- <p> You already created a wish? <a class="Sign-in-link" href="http://localhost:8080/#/login">Sign in</a> </p> -->
      <!-- ska bort innafor denna del -->

      <!-- Present buttons -->
      <!-- <div class="landing-page__present-container">
                <div class="present present--bounceG" @mouseenter="bgclrG = true" @mouseleave="bgclrG = false" >
                    <div class="present__green-anim">
                        <img class="present__green-lid move-green-lid" src="../assets/landingpage/svg/green-lid.svg" alt="sign in button - lid" >
                        <img class="present__green-box" src="../assets/landingpage/svg/green-box.svg" alt="sign in button -box ">
                    </div>
                </div>
                <div class="present present--bounceY" @mouseenter="bgclrY = true" @mouseleave="bgclrY = false">
                    <div class="present__yellow-anim">
                        <img class="present__yellow-lid move-yellow-lid" src="../assets/landingpage/svg/yellow-lid.svg" alt="register button - lid">
                        <img class="present__yellow-box" src="../assets/landingpage/svg/yellow-box.svg" alt="register button - box">
                    </div>
                </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import signInOrSignUp from "../components/signInOrSignUp.vue";

export default {
  name: "landing-page",
  components: {
    formInput: signInOrSignUp
  },
  data() {
    return {
      active: false, // check if present is open or not and correspond that with the HTML (v-show="!active" or v-show="active")
      bgclrY: false,
      bgclrG: false,
      activeG: "activeG",
      activeY: "activeY"
    };
  },

  methods: {
    tryForFree() {
      this.$router.push({ name: "RegisterFromLandingPage" });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.landing-page {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: rgb(243, 213, 91);
  background-image: -moz-linear-gradient(
    90deg,
    rgba(243, 213, 91, 1) 30%,
    rgba(102, 178, 91, 1) 70%
  );
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(243, 213, 91, 1) 30%,
    rgba(102, 178, 91, 1) 70%
  );
  background-image: linear-gradient(
    90deg,
    rgba(243, 213, 91, 1) 30%,
    rgba(102, 178, 91, 1) 70%
  );
  background-size: 200%;
  background-position: center;
  transition: background-position 1s ease-in-out;
}

.landing-page-header {
  display: flex;
  position: absolute;

  &__logo {
    padding: 10% 0px;
    width: 100px;
    margin-left: 10%;
  }

  &__name {
    flex: 1;
    margin: auto;
    justify-content: flex-start;
    padding-left: 20px;
    font-size: 2rem;
    font-weight: bold;
  }
}

/*  
    ---------------------------------------------
    body = form and paragraph
    ---------------------------------------------
*/

.landing-page-body {
  display: flex;
  max-width: 100%;
  margin: 90px 100px;
  position: relative;

  &__paragraph {
    align-self: center;
    font-size: 1.5em;
    max-width: 45%;
    opacity: 0;
    animation: text 1s ease-in-out forwards;
    animation-delay: 6s;
    color: rgba(30, 30, 30, 0.8);
    margin: auto auto auto 100px;
  }
}

/*  
    ---------------------------------------------
    The presents that is shown on the website
    ---------------------------------------------
*/
.landing-page__present-container {
  display: flex;
  justify-content: space-evenly;
}

.present {
  display: flex;
  flex-direction: column;
  transition: all 1s ease-in-out;

  // Concerning the green and the yellow present "animations into the viewport"
  &--bounceG,
  &--bounceY {
    animation: expand-present-bounce 1s ease-in-out forwards;
    //animation-delay: 5.6s;
    opacity: 0;
  }
  // to get the desired loook of the box from original position
  &__green-box,
  &__yellow-box {
    margin-top: -18%;
  }

  &__green-lid {
    z-index: 5;
    animation-name: lid-shaking; /*connects to the keyframe of the animation that will occur*/
    animation-duration: 0.7s; /* Specifies how many seconds or milliseconds a transition effect takes to complete */

    /*definition of how the animation should move time wise */
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    /* Some examples would be:
            * ease-in = specifies a transition effect with a slow start, then fast, then end slowly
            * ease-in-out = specifies a transition effect with a slow start and end  
            * linear = specifies a transition effect with the same speed from start to end
        */
    animation-iteration-count: infinite; /*animation never stops*/
  }

  &__yellow-lid {
    z-index: 5;
    animation-name: lid-shaking;
    animation-duration: 0.6s;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.82, 1.275);
    animation-iteration-count: infinite;
    animation-delay: 7s;
  }
  &__yellow-anim:hover .move-yellow-lid {
  }
}

/* 
Change color when hover over the different presents
*/
.activeY {
  background-position: left;
  transition: background-position 1s ease-in;
}
.activeG {
  background-position: right;
  transition: background-position 1s ease-in;
}

.present__green-anim:hover + .move-green-lid {
  margin-top: -28%;
  background: pink;
}

/*  
    ---------------------------------------------
    xxxxxxx
    ---------------------------------------------
*/

/* 
    ---------------------------------------------
   Built for screens width max-width of 840px - cover all mobile surfaces
    ---------------------------------------------
*/
@media (max-width: 840px) {
}

/* 
   Built for screens that reach up tp 1920px -> 
    ---------------------------------------------
*/
@media (max-width: 1919px) {
  .landing-page-body {
    flex-direction: column-reverse;
    max-width: 100%;
    margin: 10px 0;

    &__paragraph {
      display: flex;
      text-align: center;
      font-size: 1.3em;
      margin: auto auto 100px auto;
      animation: text 0s ease-in-out forwards;
      animation-delay: 0s;
      max-width: 70%;
    }
  }
  .title {
    display: none;
  }
  .landing-page-header {
    &__logo {
      padding: 10% 0px;
      width: 90px;
      margin-left: 10%;
    }

    &__name {
      padding-left: 10%;
      font-size: 20px;
    }
  }
  .title__final-seq {
    display: flex;
    margin: 100px auto auto auto;

    & span {
      font-size: 4.5em;
      margin: auto;
    }
  }
}
/* 
    ---------------------------------------------
    Built for screens width min-width of 1920px
    ---------------------------------------------
*/
@media (min-width: 1920px) {
  .landing-page-body::before {
    content: "";
    position: absolute;
    top: 60%;
    left: 50%;
    width: 120vw;
    height: 500px;
    transform: translate(-50%, -50%) rotate(-10deg);
    z-index: 0;
    background: rgba(240, 240, 240, 0.4);
    box-shadow: 0 19px 98px rgba(0, 0, 0, 0.15);
    opacity: 0;
    animation: show 0.2s ease-in forwards;
    animation-delay: 8s;
  }
  .landing-page-title {
    font-family: sans-serif;
    margin: 90px 0 5px 0;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(240, 240, 240);
      animation: remove-anim-title 2s ease-out 0.8s forwards;
      animation-delay: 6s;
      height: 100vh;

      // "Create" --> "a" --> (image) --> "for all your"
      &__seq1,
      &__seq2,
      &__seq4 {
        animation: show-all-text-seq 0.5s ease-out forwards;
      }
      // image
      &__seq3 {
        animation: show-all-img 1s ease-out forwards;
      }
      &__seq5 {
        margin-left: 30px;
        animation: wish-move 2s ease-out forwards;
      }
    }
    // title will be shown
    .title__final-seq {
      display: flex;
      margin: 40px 0;
      opacity: 0;
      margin-left: 100px;
      color: rgba(40, 40, 40, 0.7);
      animation: show-final-seq 0.5s ease-in-out forwards;
      animation-delay: 6s;

      & span {
        font-size: 6.5em;

        font-weight: bold;
      }
    }
  }

  // The intervals as the when each part of the title should show
  .title div:nth-child(1) {
    animation-delay: 0.5s;
  } // create 2s
  .title div:nth-child(2) {
    animation-delay: 1.2s;
  } // a
  .title div:nth-child(3) {
    animation-delay: 2.2s;
  } // img
  .title div:nth-child(4) {
    animation-delay: 3.1s;
  } // for all your
  .title div:nth-child(5) {
    animation-delay: 4.2s;
  } // img

  // Let the items get centered over each other
  .title div {
    opacity: 0;
    margin: 0px 5px;
  }
  .title span {
    font-size: 1.8em;
  }
  .title img {
    width: 150px;
    height: 150px;
    align-self: center;
  }
}

/* 
    ---------------------------------------------
    Built for screens width min-width of 2560
    ---------------------------------------------
*/
@media only screen and (min-width: 2560px) {
  .landing-page-header {
    transform: scale(1.2);
    margin-bottom: 100px;

    &__logo {
      padding: 60px 0px;
      width: 80px;
      margin-left: 80px;
    }

    &__name {
      padding-left: 30px;
      font-size: 2.2rem;
    }
  }
  .landing-page-body::before {
    transform: translate(-50%, -50%) rotate(-10deg) scale(1.4);
  }
  .title__final-seq {
    & span {
      font-size: 1.4em;
      margin-left: 25px;
    }
  }
  .landing-page-body {
    margin: 180px 250px;
    width: 90%;

    &__paragraph {
      font-size: 2.1em;
      margin: auto auto auto 230px;
    }
  }
}

/*  
    ---------------------------------------------
    Built for screens width min-width of 3840px
    ---------------------------------------------
*/
@media only screen and (min-width: 3840px) {
  .landing-page-header {
    transform: scale(1.3);

    &__logo {
      padding: 70px 0px;
      width: 100px;
      margin-left: 90px;
    }

    &__name {
      padding-left: 50px;
      font-size: 2.4rem;
    }
  }
  .landing-page-body::before {
    transform: translate(-50%, -50%) rotate(-10deg) scale(2);
    top: 60%;
  }
  .title__final-seq {
    margin: 150px;

    & span {
      font-size: 1.9em;
      margin-left: 45px;
    }
  }
  .landing-page-body {
    margin: 380px 510px;
    width: 100%;

    &__paragraph {
      font-size: 3em;
      margin: auto auto auto 500px;
    }
  }
}

/*  
    ---------------------------------------------
    Animations
    ---------------------------------------------
*/

@keyframes show-all-img {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  40% {
    transform: scale(3);
    transform: rotate(3deg);
    opacity: 1;
  }
  60% {
    transform: scale(3);
    transform: rotate(3deg);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes show-final-seq {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes show-all-text-seq {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0;
    transform: scale(1.25);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes wish-move {
  0% {
    opacity: 0;
    transform: rotate(0deg) scale(1);
  }
  80% {
    opacity: 1;
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(45deg) scale(1.4);
    opacity: 1;
  }
}
@keyframes showParagraph {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes text {
  from {
    opacity: 0;
    transform: perspective(500px) translate3d(-35px, -40px, -150px)
      rotate3d(1, -1, 0, 5deg);
  }
  to {
    opacity: 1;
    transform: perspective(500px);
  }
}
@keyframes remove-anim-title {
  to {
    height: 0%;
    opacity: 0;
  }
}
@keyframes fade-in {
  to {
    filter: brightness(1);
  }
}
// Animations that effect both presents
@keyframes lid-shaking {
  50% {
    transform: translateX(4px) rotate(2deg);
  }
  100% {
    transform: translateX(-4px) rotate(-2deg);
  }
}
@keyframes expand-present-bounce {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0;
    transform: scale(1.25);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>