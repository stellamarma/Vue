const {createApp, reactive, computed}= Vue;

const DEAFULT_STATE={
    state:true,
    inputMovie:'',
    names:[],
    error:'',
    showError:false,
    result:''
}
createApp({
    setup(){
        const data = reactive(DEAFULT_STATE)

        const addMovieToList = () => {
            const userMovie = data.inputMovie.trim();
            
            if (!userMovie) {//because we dont want to have null value
                window.alert("Sorry, no empty movie")

            }else if(data.names.includes(userMovie)){// if its already excist
                window.alert("Sorry,movies must be unique")
            }else{//when its true
                data.names.push(userMovie);
                data.inputMovie = '';
                console.log(data.names);
            }
        }

        const removeMovie = (index) =>{
            data.names.splice(index,1);

        }
        //computed
        const isReady= computed(()=>{
            return data.names.length>1;
        })
        const getRandomName=()=>{
            return data.names[Math.floor(Math.random()*data.names.length)];
        }
        const genearteResult=()=>{
            let rand = getRandomName();
            data.result=rand;
        }
        const showResults=(()=>{
            genearteResult()
            data.state=false;
            return data.state;
        })
        const restApp= ()=>{
            data.state=true;
            data.inputMovie='';
            data.names=[];
            data.error='';
            data.showError=false;
            data.result='';

        }

        const getNewResult=()=>{

            return genearteResult();
        }

        
    return{
        data,
        addMovieToList,
        removeMovie,
        isReady,
        showResults,
        restApp,
        getNewResult
    }
    }
}).mount('#app')