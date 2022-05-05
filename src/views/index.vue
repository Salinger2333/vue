<script setup>
import {ref} from 'vue'
import modalVue from '../components/modal.vue';
</script>

<template>

<h1>首页</h1>

<div><router-link to="/p2">Page2.vue</router-link></div>
<div><router-link to='/animation'>'animation'</router-link></div>
<modalVue></modalVue>

</template>

<style>
</style>