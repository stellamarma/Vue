import { reactive,ref } from 'vue';
import axios from 'axios';
import {useToast} from 'vue-toast-notification';

const getUsers=()=>{

    const $toast = useToast();
    const data= reactive({
        loading:true,
        users:[]
    })

    const loadUsers=()=>{

        axios.get(`http://localhost:3006/users`)
        .then(response=>{
            data.users=response.data;
            data.loading=false;
        })
        .catch(error=>{
            $toast.error('Sorry something went wrong')
        })
    }

    return {data,loadUsers}
}
export default getUsers;