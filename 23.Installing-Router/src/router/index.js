import { createRouter, createWebHistory } from 'vue-router'
import Articles from '@/components/articles/index.vue';
import Contact from '@/components/contact/index.vue'
import Home from '@/components/home.vue'
import Article from '@/components/articles/article.vue';
import NotFound from '@/components/404.vue';
import Notify from '@/components/notify.vue';
import Login from '@/components/login.vue';

const propsBack = (route) => {
    /////
    return {
        crazy: route.path + ' some other route'
    }
}
const checkAuth = () =>{
    const isAuth = true;//if it is false, we will not get the atricles

    if(!isAuth) return '/login';
}
const checkAdmin = () =>{
    const isAdmin =true;

    if(!isAdmin) return '/';


}
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/',component:Home},
        {path:'/articles',component:Articles,
            beforeEnter: [checkAuth,checkAdmin]
        },
        {path:'/articles/:articleID',component:Article, props:propsBack},
        {path:'/contact',components:{
            default:Contact,
            notify:Notify
        }, name:'contact'},
        {path:'/login',component:Login},
        {path:'/:noFound(.*)',component:NotFound}
    ],
    linkActiveClass:'active'
});


// router.beforeEach((to,from,next)=>{
//     const isAuth = true;

//     if(to.path === '/'){
//         next();
//     } else {
//         if(to.path !== '/login' && !isAuth) return next({path:'/login'});
//         if(to.path === '/login' && isAuth) return next({path:'/'})
//         return next();
//     }
// })

// router.afterEach(()=>{
//     console.log('after');
// })


export default router;