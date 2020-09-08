<template>
    <div id="conditionalComponent" >
        <landingPage></landingPage>
    </div>
</template>

<script>
import landingPage from '../components/LandPageComp.vue';

export default {
    name: "landingpage",
    components: {
        landingPage: landingPage
    }
}


</script>


<p class="title">Never get two pairs of identical socks again!</p>
<p class="subtitle">Register today to start sharing your wishlists with friends and family</p>