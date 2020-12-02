<template>
    <div id="conditionalComponent" >
        <!-- if user has a token, go to home page-->
        <div v-if="state">
            <home></home>
        </div>
        <!-- if user does not have a token, go to landingpage -->
        <div v-else>
            <landingPage></landingPage>
        </div>
    </div>
</template>

<script>
import landingPage from '../components/LandPageComp.vue';
import home from '../components/HomeComp.vue';

export default {
    name: "landingpage",
    components: {
        landingPage: landingPage,
        home: home
    },
    data() {
        return {
            // take the current state and se if the user has a token or not
            state: this.$store.getters.isLoggedIn 
        } 
    }
}


</script>


