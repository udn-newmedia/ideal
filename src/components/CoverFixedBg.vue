<template>
    <div id="cover">
        <slot></slot>
        <div id="back-bg-contain" :style="{opacity: opacity}">
            <img class="hidden-md hidden-lg lazyload" :data-src="src" >
            <img class="hidden-xs hidden-sm lazyload" :data-src="srcWeb">
        </div>
    </div>
</template>

<script>
export default {
    props: ['src', 'srcWeb'],
    methods: {
        handleScroll: function(e){
            let currentH = window.pageYOffset
            if(currentH < (this.$el.offsetTop + window.innerHeight)){
                this.opacity = 1
            }
            else{
                this.opacity = 0
            }
        }
    },
    mounted: function(){
        window.addEventListener('scroll', this.handleScroll)
    },
    data: function(){
        return{
            opacity: 1,
        }
    }
}
</script>

<style scoped>
    #cover {
        height: 100vh;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #back-bg-contain{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
        transition: opacity 0.7s ease;
    }
    h1{
        font-size: 55px;
        letter-spacing: -1px;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.21);
        margin: 0;
    }
    img{
        width: 100%;
    }
    @media screen and (max-width: 767px){
        h1{
            font-size: 40px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        h1{
            font-size: 45px;
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1280px){
        img{
            width: auto;
            height: 100%;
        }
    }
</style>

