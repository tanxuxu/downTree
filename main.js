import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import store from './vuex/store.js';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import $ from "jquery";
import util from './libs/util.js';


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use($);
Vue.use(iView);

Vue.prototype.$ajax = util.ajax; //将ajax赋值到vue下面

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
