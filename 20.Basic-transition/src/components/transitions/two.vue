<template>
    <transition>
        <div>
            <button class ="btn btn-primary" @click="status=!status">
                Tpggle status
            </button>
        </div>
    </transition>

    <transition mode="out-in"
    name="constum">
        <div class="p-3 mb-2 bg-danger text-white" v-if="!status" 
        key="status_off">
            OFF
        </div>
        <div class="p-3 mb-2 bg-success text-white" v-else="status" 
        key="status_on">
            ON
        </div>
    </transition> 

</template>

<script setup>
   import { ref } from 'vue';

   const status=ref(false)


</script>
<style>
    .constum-enter-from,
    .constum-leave-to {
        opacity: 0;
    }
    .constum-enter-active,
    .constum-leave-active {
        transition: 2s;
    }
    .constum-enter-to,
    .constum-leave-from {
        opacity: 1;
    }
    /* for slide side */
    .slide-enter-from{
        transform: translateX(20p);
        opacity: 0;
    }
    .slide-enter-active{
        transition: all 1s ease;

    }
    .slide-enter-to{
        opacity: 1;
    }
    .slide-leave-from {
        opacity: 1;
        background-color: red !important;
    }
    .slide-leave-active{
        transition: all .3s ease;
    }
    .slide-leave-to {
        background-color: black !important;
        transform: translateX(100p);
        opacity: 0;
    }

    /* for slideup side */
    .slideup-enter-from{
        animation:slideUp .5s ease-in-out;
    }    
    .slideup-leave-from {
        animation:slideDown .5s ease-in-out;
    }
    @keyframes slideUp{
        from {
            opacity: 0;
            transform: translateY(10p);
        }to{
            opacity: 0;
            transform: translateY(0p);
        }
    }
    @keyframes slideDown{
        from {
            opacity: 0;
            transform: translateY(0p);
        }to{
            opacity: 0;
            transform: translateY(10p);
        }
    }
</style>