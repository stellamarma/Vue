<template>
    <div class="user_profile">
        <h3>User information</h3>
        <ul>
            <li><span>Name: </span> {{ name }}</li>
            <li><span>Last Name: </span> {{ lastname }}</li>
        </ul>
    </div>
</template>
<script setup>
    const props = defineProps(['name','lastname']);//because its array. The names must be unique
  
</script>
<style scoped>
    span{
        font-weight:800;
    }
    .user_profile{
      border:1px solid  blue ; 
      padding:10px;
    }
</style>
