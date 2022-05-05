<script setup>
    const props =defineProps({
        modelValue :{
            type:Boolean,
            default:false
        },
        title:String,
        content:String
    });
    const onCancel =() =>{
            
    }
</script>

<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-head">
            head
            </div>
            <div class="modal-body">
            body
            </div>
            <div class="modal-footer">
            <button @click="onCancel">取消</button>
            <button @click="onOk">取消</button>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .modal{
        
        background-color: rgba(235, 57, 57, 0.453);
    }
    .modal .modal-content{
        position: absolute;
        width: 450px;
        height: 250px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: bisque;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        flex-shrink: 1;
    }

    .modal-head,.modal-body,.modal-footer{
        padding: 10px;
    }

    
    .modal-footer{
        display: flex;
        justify-content: end;
    }
    .modal-footer button{
        margin-right: 5px;
    }
</style>