import Vue from 'vue'

import router from './router'
import store from './store'

import BootstrapVue, {IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../public/style.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

let state = {
    photos: []
}

new Vue({
    router,
    store,
    render: createElement => createElement(
        App,
        {props: {state: state}}
    )
}).$mount('#app')
