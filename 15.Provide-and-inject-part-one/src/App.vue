<template>
    <div>
        <app-header/>
        <div class="container">
            <Cars />
            <hr/>
            <button @click="updateCar">Update from parent</button>
            <hr/>
            <CarBrands>
                <template v-slot:brands>
                    <ul>
                        <li v-for="(brand,index) in brands" :key="index">
                            {{ brand }}
                        </li>
                     </ul>
                </template>
                <template v-slot:cats>
                    <div>
                        You should have at least one cat at your home 
                    </div>
                </template>
                <strong>Default slot</strong>
            </CarBrands>
        </div>
    </div>
</template>

<script setup>
    import { reactive,provide } from 'vue';
    import Cars from './components/Cars/index.vue';
    import CarBrands from './components/Cars/brads.vue'

    const cars=reactive([
        {model:'F9',brand:'Ferrari'},
        {model:'911',brand:'Porsche'},
        {model:'Tipo',brand:'Fiat'}
    ])
   

    const updateCar=()=>{
        cars[0].model='shakira'

    }
    const brands = reactive (['Mazda','Honda','lopezz'])
    provide('cars',{cars,updateCar})
</script>

<style scoped>
    body {
        padding: 0;
        margin: 0;
        font-family: 'Robot',sans-serif;
    }
    .container {
        min-height:84vh;
        box-sizing: border-box;
        padding: 20px;
    }
    li{
        color:red;
    }

</style>
