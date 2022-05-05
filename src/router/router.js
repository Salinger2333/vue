import { createRouter,createWebHashHistory } from "vue-router";
import Index from '../views/index.vue';

//定义一些路由
const routes = [
   { path:'/',name:'Index',component:Index },
   {path:'/p2',name:'Page2',component:()=>import('../views/page2.vue')},
//    {path:'/',name:'Todo',component:()=>import('../views/TodoList.vue')}
 {path:'/animation',name:'Animation',component:()=>import('../views/animation.vue')}
]

//创建路由实例并传递routes配置
const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;