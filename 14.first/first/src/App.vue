<template>

  <div>
    <app-header></app-header>
    <div class="container">
      <h1>{{greed}}</h1>
      <UserProfile 
      :name="data.name"
      :userlastname="data.lastname"
      :userAge="data.age"
      :userParents="data.parents"
      @update-lastname="data.lastname=$event"
      @say-hello="alertHello"
      />
      <button @click="updateName">Update name</button>
    </div>
    <app-footer></app-footer>
  </div>

</template>

<script setup>
  import {ref} from 'vue';
  //the second way 
  // import Footer from './components/header_footer/Footer.vue'
  //and use <Footer/> to the template
  import UserProfile from './components/header_footer/User/Prifile.vue';
  import {reactive} from 'vue';

  const data=reactive ({
    name:'Francis',
    lastname:'tata',
    age:28,
    parents:{
      mother:'Caty',
      father:'Mario'
    }
  })
  const greed=ref("Hello world");

  const updateName=()=>{
    data.name='Your name is Madame'
  }
  const alertHello=()=>{
    alert('Hello') ;
  }
</script>

<style scoped>
  body {
    padding:0;
    margin:0;
    font-family:'Courier New', 
  }
  .container{
    min-height:auto;
    box-sizing: border-box;
    padding:50px;
  }
</style>
