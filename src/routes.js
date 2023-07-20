import { createWebHistory,createRouter } from "vue-router";
import HomeComp from './components/HomeComp'
import LoginComp from './components/LoginComp'
import ProfileComp  from './components/ProfileComp'
import PageNotFound from './components/PageNotFound';
const routes=[
    {
name:'HomeComp',
path:'/',
component:HomeComp

    },
    {
        name:'LoginComp',
        path:'/login',
        component:LoginComp
        
            },
            {
                name:'ProfileComp',
                path:'/profile/:name',
                component:ProfileComp
                
                    },
                    {
                        name:'PageNotFound',
                        path:'/:pathMatch(.*)',
                        component:PageNotFound
                        
                            }

];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;