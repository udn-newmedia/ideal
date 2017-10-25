<template>
    <div class="image-contain">
        <img class="hidden-md hidden-lg" :src="src">
        <img class="hidden-xs hidden-sm" :src="srcWeb">
        <div class="img-say">{{imgSay}}</div>
    </div>
</template>

<script>
export default {
    props: ['src', 'srcWeb', 'imgSay'],
}
</script>

<style scoped>
    img{ 
        width: 100%;
    }
    .img-say{
        font-size: 17px;
        color: gray;
        margin-top: 5px;
    }
    @media screen and (max-width: 767px){
        .img-say{
            font-size: 15px;
        }
    }
</style>