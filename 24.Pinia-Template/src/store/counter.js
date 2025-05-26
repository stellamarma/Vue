import  {defineStore} from "pinia";


export const useCounterStore= defineStore('counter',{
    state:()=>({
        counter:7
    }),        getters:{
        getCount(state){
            return state.counter
        }
    }

})