import Vue from 'vue'
import App from './App.vue'
import "./common/stylus/index.styl"
import Router from "./router/index"
import attachFastClick from "fastclick";//引入该组件的目的就是为了解决移动端300ms的点击延迟问题
import store from "./store/index"

attachFastClick.attach(document.body);//激活组件
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router: Router,// 引用路由
    store
}).$mount('#app');
