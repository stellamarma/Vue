<template>
    <transition>
        <div class="p-3 mb-2 bg-success text-white" v-show="data.display">
            Hello
        </div>
    </transition>
    <button class="btn btn-primary" @click="data.display = !data.display">
        Toggle display 0
    </button>
    <hr/>
    <transition>
        <div class="p-3 mb-2 bg-warning text-white" v-if="data.display2">
            Hello
        </div>
    </transition>
    <button class="btn btn-primary" @click="data.display2 = !data.display2">
        Toggle display 2
    </button>
    <hr/>
    <transition name="slide">
        <div class="p-3 mb-2 bg-warning text-white" v-if="data.display3">
            Hello
        </div>
    </transition>
    <button class="btn btn-primary" @click="data.display3 = !data.display3">
        Toggle display 3
    </button>
    <hr/>
    <transition name="slideup">
        <div class="p-3 mb-2 bg-success text-white" v-if="data.display4">
            Hello
        </div>
    </transition>
    <button class="btn btn-primary" @click="data.display4 = !data.display4">
        Toggle display 4
    </button>
</template>

<script setup>
   import { reactive } from 'vue';

   const data = reactive({
        display:false,
        display2:true,
        display3:true,
        display4:true
   })
</script>

<style>
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
    .v-enter-active,
    .v-leave-active {
        transition: 2s;
    }
    .v-enter-to,
    .v-leave-from {
        opacity: 1;
    }

    /*  */

    .slide-enter-from {
        transform: translateX(20px);
        opacity: 0;
    }
    .slide-enter-active {
        transition: all 1s ease;
    }
    .slide-enter-to {
        opacity: 1;
    }
    .slide-leave-from {
        opacity: 1;
        background-color: red !important;
    }
    .slide-leave-active {
        transition: all .3s ease;
    }
    .slide-leave-to {
        background-color: black !important;
        transform: translateX(100px);
        opacity: 0;
    }

     /*  */

    .slideup-enter-active{
        animation: slideUp .5s ease-in-out;
    }
    .slideup-leave-active {
        animation: slideDown .5s ease-in-out;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform:  translateY(10px);
        } to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateY(0);
        } to {
            opacity: 0;
            transform:  translateY(10px);
        }
    }


</style>