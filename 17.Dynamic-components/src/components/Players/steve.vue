<template>
    <h3>Steve is on</h3>
    <teleport to="#dialog_here">
        <modal/>
    </teleport>
</template>
<script setup>
    import modal from '../Utlis/modal.vue';
    import { onUnmounted } from 'vue';
    onUnmounted(()=>{
        console.log('Steve onUnmounted ')
    })
</script>