<template>

  <div>
    <app-header></app-header>
    <div>
      <h1>{{name}}</h1>
    </div>
    <app-footer></app-footer>
  </div>
  
</template>

<script setup>
  import {ref} from 'vue';
  //the second way 
  // import Footer from './components/header_footer/Footer.vue'
  //and use <Footer/> to the template
  const name=ref("Hello world");
 

</script>

<style >
    h1{
      color:blue;
    }
</style>
