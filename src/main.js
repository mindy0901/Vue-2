import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './styles/index.scss';
import { createPinia, PiniaVuePlugin } from 'pinia';

Vue.use(PiniaVuePlugin);
const pinia = createPinia();
Vue.use(ElementUI);

new Vue({
    render: (h) => h(App),
    pinia,
}).$mount('#app');
