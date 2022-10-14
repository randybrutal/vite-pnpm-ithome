import Vue from 'vue';
import VueRouter, { createRouter, createWebHistory } from 'vue-router';
// import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

// const lazyLoading = (name: any) => () => import(`@/views/${name}`);
// const Layout = lazyLoading('layout/Layout');
const Layout = () => import('@/views/layout/Layout.vue');

// Vue.use(VueRouter);

const routes: any = [
    {
        path: '/',
        component: Layout,
        redirect: '/Home',
        meta: {
            hidden: true
        }
    },
    {
        path: '/Home',
        component: Layout,
        // name: 'Home',
        meta: {
            titleKey: '首頁',
            noCache: true
        },
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Navs/Home/Home.vue'),
                meta: {
                    titleKey: '首頁',
                    upStair: 'Home'
                }
            }
        ]
        // children: [
        //     {
        //         path: 'Man',
        //         component: lazyLoading('Navs/Home/Home'),
        //         name: 'Man',
        //         meta: {
        //             titleKey: '首頁',
        //             noCache: true
        //         }
        //     }
        // ]
    },
    // {
    //     path: '/Gallery',
    //     component: Layout,
    //     // name: 'About',
    //     meta: {
    //         titleKey: 'Gallery',
    //         noCache: true
    //     },
    //     children: [
    //         {
    //             path: '',
    //             component: () => import('@/views/Navs/Gallery/Gallery.vue'),
    //             name: 'Gallery',
    //             meta: {
    //                 titleKey: 'Gallery',
    //                 noCache: true,
    //                 upStair: 'Gallery'
    //             }
    //         },
    //         {
    //             path: 'Album',
    //             component: () => import('@/views/Navs/Gallery/Album.vue'),
    //             name: 'Album',
    //             meta: {
    //                 titleKey: 'Album',
    //                 noCache: true,
    //                 upStair: 'Gallery'
    //             }
    //         }
    //     ]
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
