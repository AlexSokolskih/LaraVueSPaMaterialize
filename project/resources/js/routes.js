import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./components/Home.vue').default
    },
    {
        path: '/about',
        component: require('./components/About.vue').default
    },
    {
        path: '/login',
        component: require('./components/Login.vue').default,
        meta: { middlewareAuth: false }
    },
    {
        path: '/dashboard',
        component: require('./components/Dashboard.vue').default,
        meta: { middlewareAuth: true }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.middlewareAuth)) {
        if (!auth.check()) {
            next({
                path: '/login',
                //query: { redirect: to.fullPath }
            });

            return;
        }
    }
    if (to.matched.some(record => (record.meta.middlewareAuth === false))) {
       if (auth.check()) {
            next({
                path: '/home',
                query: { redirect: to.fullPath }
            });

            return;
        }
    }
    next();
})
export default router;

