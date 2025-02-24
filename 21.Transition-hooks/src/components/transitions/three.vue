<template>
    <div class ="md-3">
        <input v-model="data.name" class="form-control"/>
    </div>
    <button class="btn btn-primary" @click="addOne">
        Add on
    </button>
    <hr>
    <div>
        <ul class="list-group pl-0">
            <li class ="list-group-item"
            v-for="(item) in data.list"
            :key="item">
                {{ item }}
            </li>
        </ul>
    </div>

</template>
<script setup>
    import { reactive } from 'vue';

    const data =reactive({
        list:['francis','ron','mike'],
        name:''
    });

    const addOne=()=>{
        if(!data.list.includes(data.name) && data.name !== ' '){
            data.list.unshift(data.name)
        }
    }
</script>