<script >
    
    export default{
        componets:{
            comph1:comph1,
            comph2:comph2,
        }
    }

</script>
    
<script setup>
import { Ref } from "vue";
    import comph1 from "../components/comph1.vue";
    import comph2 from "../components/comph2.vue";
    
</script>

<template>
    <comph1></comph1>
    <button @click="handleClick">change</button>

</template>

<style lang="scss">

</style> 