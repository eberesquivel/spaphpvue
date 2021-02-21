require('./bootstrap');

window.Vue = require('vue').default;

import Vuetify from "vuetify";
Vue.use(Vuetify);
Vue.component('Principal',require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify()
});

export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }