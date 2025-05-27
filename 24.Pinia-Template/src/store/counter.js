import  {defineStore, storeToRefs} from "pinia";


export const useCounterStore= defineStore('counter',{
    state:()=>({
        counter:7,
        attempts:0,
        prizes:[
            'Car',
            'Coffee',
            'Cat',
            'Man',
            'Free meal',
            'Netflix and chill',
            'Marathon Anime',
            'Marathon Kdrama',
            'Nothing'
        ]
    }),        getters:{
        getCount(state){
            return state.counter
        },getAttempts(state){
            return state.attempts;
        },
        getPrize(state){
            state.attempts++;
            let prize='';
            console.log(this.getAttempts);
            for(let step=0 ; step < state.counter ; step++ ){

                prize = state.prizes[Math.floor(Math.random()*state.prizes.length)]
            }
            return prize;
        }
    }

})