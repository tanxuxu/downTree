const routers = [{
    path: '/',
    meta: {
        title: '云眼'
    },
    component: (resolve) => require(['./views/index/index.vue'], resolve)
}];
export default routers;
