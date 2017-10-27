<template>
    <div class="fixed-bg-contain">
        <div class="back-bg-contain" :style="{opacity: opacity}">
            <img class="hidden-md hidden-lg lazyload" :data-src="src">
            <img class="hidden-xs hidden-sm lazyload" :data-src="srcWeb">
        </div>
        <div class="hidden-md hidden-lg" id="space"></div>
        <div class="bg-title-contain" :class="{hidden: isTitleHidden}">
            <div class="bg-title">
                <span>{{ titletext1 }}</span>
            </div>
            <div class="bg-title" id="bg-title2">
                <span id="title2">{{ titletext2 }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fixedbackground',
    props: ['src', 'src-web', 'titletext1', 'titletext2'],
    data: function(){
        return{
            opacity: 0,
            isTitleHidden: false
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
        if(this.titletext1 == undefined){
            this.isTitleHidden = true
        }
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style scoped>
    .fixed-bg-contain{
        height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .bg-title{
        color: #000000; 
        font-size: 55px;
    }
    .bg-title span{
        background-color: #A5DEE4;
        padding: 3px;
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
        .bg-title{
            font-size: 30px;
        }
        .bg-title span{
            padding: 3px 5px;
        }
        #bg-title2{
            margin-top: -6px;
        }
        #space{
            flex-grow: 1;
        }
        .bg-title-contain{
            flex-grow: 2;
        }
        #title2{
            margin-left: 45px;
        }
    }
    @media screen and (max-width: 350px){
        .bg-title{
            font-size: 28px;
        }
    }
    @media screen and (min-width: 1025px){
        .bg-title-contain{
            width: 880px;
            margin: 0 auto;
        }
        #bg-title2{
            margin-top: -21px;
            margin-left: 75px;
        }
    }
</style>