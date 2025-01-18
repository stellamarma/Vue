<template>
 <app-header></app-header>
 <h1>{{name}}</h1>
 <app-footer></app-footer>
</template>

<script setup>
  import {ref} from 'vue';

  const name=ref("Hello world");
 

</script>

<style >
    h1{
      color:blue;
    }
</style>
