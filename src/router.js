import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import Router from 'vue-router';
import Home from './views/home/Index.vue';
import Form from './views/form/Index.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior (to, from, savedPosition) {
        const scrollTo = () => VueScrollTo.scrollTo(to.hash, 1000, {
            offset: -85,
            cancelable: true
        })

        if (to.hash) {
            if (from.name === 'home') {
                scrollTo()
            } else {
                this.push({ path: '/' + to.hash }, () => {
                    setTimeout(() => {
                        scrollTo()
                    }, 500)
                })
            }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        }, {
            path: '/sign',
            name: 'sign',
            component: Form
        }, {
            path: '*',
            component: Home
        }
    ],
});
