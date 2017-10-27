<template>
    <div class="fixed-bg-contain">
        <div class="back-bg-contain" :style="{opacity: opacity}">
            <img class="hidden-md hidden-lg lazyload" :data-src="src">
            <img class="hidden-xs hidden-sm lazyload" :data-src="srcWeb">
            <div class="bg-text" :class="{hidden: isHidden}">{{ text }}</div>
        </div>
        <div class="hidden-md hidden-lg" id="space"></div>
    </div>
</template>

<script>
export default {
    name: 'fixedbackground',
    props: ['text', 'src', 'src-web', 'titletext1', 'titletext2'],
    data: function(){
        return{
            opacity: 0,
            isHidden: false
        }
    },
    methods: {
        handleScroll: function(e){
            let currentH = window.pageYOffset
            if(currentH > (this.$el.offsetTop - window.innerHeight - 200) && currentH < (this.$el.offsetTop + window.innerHeight)){
                this.opacity = 1
            }
            else{
                this.opacity = 0
            }
        }
    },
    mounted: function(){
        if(this.text == undefined){
            this.isHidden = true
        }
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>

    .fixed-bg-contain{
        height: 100vh;
    }
    .bg-text{
        color: #FFFFFF;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 17px;
        padding: 5px 20px;
        background-color: rgba(0,0,0,.7);
    }
    .back-bg-contain{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
        transition: opacity 0.7s ease;
    }
    img{
        width: 100%;
    }
    @media screen and (max-width: 1024px){
        .bg-text{
            font-size: 15px;
        }
    }
    @media screen and (min-width: 1025px){
        
    }
</style>