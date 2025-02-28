import { ref } from 'vue';
import axios from 'axios';
import {useToast} from 'vue-toast-notification';

const postUser=(user)=>{

    const $toast = useToast();
    const loading=ref(false);   
    
    const addUser=()=>{
            loading.value=true;
    
            axios({
                method:'POST',
                url:`http://localhost:3006/users`,
                data:user
            })
            .then(()=>{
                $toast.success('You have new user!')
            })
            .catch(error=>{
                $toast.error('Sorry try again')
            })
            .fanally(()=>{
                loading.value=false;
            })
        
    }

    return {addUser,loading}

}
export default postUser;