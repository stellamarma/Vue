<template>

  <div>
    <app-header></app-header>
    <div class="container">
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
