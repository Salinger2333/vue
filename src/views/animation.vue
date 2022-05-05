<script setup>
    import { ref } from 'vue';
    const show =ref(false);
     const handleClick = () => {
        show.value = !show.value
    };
    

</script>

<template>
    <transition>
        <div v-show="show" id="cy">
            <img src="../QQ图片20220413171654.jpg" alt="" srcset="">
        </div>
        
    </transition>
    <button @click="handleClick">animation</button>
</template>

<style >
    #cy{
        
        width:466px;
    }

    @-webkit-keyframes move{
        0%{
            transform: 0;
        }
        50%{
            transform: rotate(0.5turn);
        }
        
        100%{
            transform: rotate(1turn);
        }
    }
    .v-enter-active{
        
        animation: move 2.5s;
        
    }
    

</style>