import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const UseEchart = () => import('@/views/use-echart');

const router = new Router({
    // mode: 'history',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/use-echart',
            component: UseEchart,
            name: 'UsePage',
        }
    ]
});

// router.beforeEach(async (to, from, next) =>{
//     sources.forEach((item) => {
//         item()
//     })
//     sources.length = 0;
//     next();
// })

export default router
