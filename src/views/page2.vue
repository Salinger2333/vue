<template>
    <div>
        <child @child-even="childEventHandle"></child>
        <h1>{{obj}}</h1>
    </div>
</template>

<script setup>
import { provide, reactive, readonly, ref } from 'vue';
import child from "../components/child.vue"

    const name = ref("");
    const count=ref(2);
    provide("count",readonly(count));
    provide("changeCount",()=>{
        count.value++;
    })
    let obj = reactive({});
    const childEvenHandle = (param) => {
        console.log("监听到childEvent",param);
        name.value = param.name;
}
</script>

<style lang="scss">

</style>