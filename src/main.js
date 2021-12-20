import Vue from 'vue'
import App from './App.vue'
import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';


Vue.config.productionTip = false
Vue.use(VueSimpleAccordion, {
  // ... Options go here
});

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
