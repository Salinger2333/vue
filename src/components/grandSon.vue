<script setup>
    import { inject } from 'vue';
    const count = inject("count");
    const changeValue = inject("changeCount");

    const handleClick = ()=>{
        changeValue();
    }
</script>

<template>
    <div>
    <button @click="handleClick">孙子组件</button> 
    <h1>从父组件中获得count:{{count}}</h1>   
    </div>
</template>

<style >

</style>