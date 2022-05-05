<script setup>
import { inject } from 'vue';
import grandSon from './grandSon.vue';
    const emit = defineEmits(['childEven']);
    const count = inject("count");

    const handleClick = ()=>{
        emit('childEven',{name:'huangbo',age:80});

    }
</script>


<template>
    <div>
        <button @click="handleClick">子组件按钮</button>
        <grand-son></grand-son>
    </div>
</template>



<style >

</style>