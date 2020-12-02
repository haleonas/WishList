<template>
    <div>
        <div class="test">
        <p class="home__title">Never get two pairs of identical socks again!</p>
        <p class="home__subtitle">Register today to start sharing your wishlists with friends and family</p>
        </div>
        <div class="container-for-gridlayout">
            <div id="gridlayout-svg">
                <div class="SvgContainer">
                    <img src="../assets/Home/Asset-1.svg" alt="could not find the image 1">
                    <div> <!-- DIV is used for respective svg files and gives the ability to control the <span> markup => centering the text over the Svg -->
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/Home/Asset-2.svg" alt="could not find the image 2">
                    <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/Home/Asset-3.svg" alt="could not find the image 3">
                    <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/Home/Asset-4.svg" alt="could not find the image 4">
                    <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/Home/Asset-5.svg" alt="could not find the image 5">
                   <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/Home/Asset-6.svg" alt="could not find the image 6">
                   <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/Home/Asset-7.svg" alt="could not find the image 7">
                    <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/Home/Asset-8.svg" alt="could not find the image 8">
                    <div>
                        <span class="titleWhenHoveredOverIcon">Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                </div>
                <div class="SvgContainer">
                    <img src="../assets/Home/Asset-9.svg" alt="could not find the image 9">
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
    name: 'Home',
    data() {
        return {
            
        }
    },
    methods: {
        myfunction(){

        }
    },
    
}
</script>

<style lang="scss" scoped>
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
    Built för screens width min-width of 2560
    ---------------------------------------------
*/
@media only screen and (min-width: 2560px){
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
    #gridlayout-svg{
        gap: 100px
    }
}

.test{
    color: red;
    height: 400px;
    background: grey;
    display: flex;
  align-items: center;
  justify-content: center;
   
}

</style> 

