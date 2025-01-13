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

        const showResults=(()=>{
            data.state=false;
            return data.state;
        })
        
    return{
        data,
        addMovieToList,
        removeMovie,
        isReady,
        showResults
    }
    }
}).mount('#app')