<template>
    <div class="logo-block">
        <a href="https://event.franklin.com.tw/ft_retire/index.html" target="_blank">
        <div class="logo-f">
            <img src="../assets/franklin.jpg" alt="">
            <span class="f-text">富蘭克林‧國民的基金</span>
        </div>
        </a>
        <div class="logo">
            <a href="https://udn.com/news/index" target="_blank"><img src="https://udn.com/upf/newmedia/image/udn-logo.svg"></a>
        </div>
        <div class="logo">
            <a href="https://udn.com/upf/newmedia/udn_newmedia/" target="_blank"><img src="https://udn.com/upf/newmedia/image/nmd-logo.svg"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'logo'
}
</script>

<style scoped>
    .logo{
        width: 140px;
        display: inline-block;
    }
    .logo-f{
        float: left;
    }
    .f-text{
        margin-right: 5px;
        font-size: 21px;
        color: #004690;
        font-weight: bold;
    }
    @media screen and (max-width: 1024px){
        .logo-block{
            margin-top: 32px;
        }
        .f-text{
            font-size: 17px;
        }
    }
    @media screen and (min-width: 1025px){
        .logo-block{
            float: right;
            margin-top: -45px;
        }
    }
</style>