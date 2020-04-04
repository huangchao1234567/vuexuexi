import Vue from 'vue'
import App from './App.vue'
import router from './router'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';

import Element from 'element-ui';


Vue.use(ElementUI);
//引入Button 和 Select，插件
Vue.use(Button)
Vue.use(Select)
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
