<template>
    <div class="user_profile">
        <h3>User information</h3>
        <ul>
            <li><span>Name: </span> {{ name }}</li>
            <li><span>Last Name: </span> {{ userlastname }}</li>
            <li><span>Age: </span> {{ userAge }}</li>
            
        </ul>
        <h3>Parents info</h3>
            <ul>
                <li v-for="(value,key,index) in userParents" :key="index"><span>{{ key }} :</span> {{ value }}</li>
            </ul>
        <hr/>
        <button @click="updateLastname">Change from child</button>
    </div>
</template>
<script setup>
//props are read only

    const emit = defineEmits(['update-lastname']);
    const props = defineProps({
        name:String,
        userlastname:String,
        userAge:Number,
        userParents:Object
    });//The names must be unique
    const updateLastname=()=>{
        emit('update-lastname','madame');
    }
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
