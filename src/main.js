import Vue from 'vue'

import {
    BootstrapVue,
    IconsPlugin
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import PhotoBook from './PhotoBook'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    render: createElement => createElement(PhotoBook, {props: {'homePage': 'welcome'}}),
}).$mount('#photobook')
