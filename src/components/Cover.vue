<template>
    <div id="cover">
        <slot></slot>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    #cover {
        height: 100vh;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    h1{
        font-size: 55px;
        letter-spacing: -1px;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.21);
        margin: 0;
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
</style>

