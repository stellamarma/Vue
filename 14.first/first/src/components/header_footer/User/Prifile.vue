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
        <button @click="emit('update-lastname','madame')">Change from child</button>
        <button @click="sayHello">Say hello</button>
        <button @click="updateAge(90)">update the age</button>
    </div>
</template>
<script setup>
//props are read only

    const emit = defineEmits(['update-lastname','say-hello']);
    const props = defineProps({
        name:{
            type:String,
            required:true,
            default:'N/A'
        },
        userlastname:{
            type:String,
            validator(value){
                if(value=== 'maria'){
                    return true
                }else{
                    return false;
                }
            }
        },
        userAge:[Number,String],
        userParents:Object,
        updateAge:Function
    });//The names must be unique
    const sayHello=()=>{
    emit('say-hello') 
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
