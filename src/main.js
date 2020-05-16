import Vue from 'vue'

import router from './router'
import store from './store'

import BootstrapVue, {IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueImg from 'v-img'

import '../public/style.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueImg)

let state = {
    title: 'My Photo Book',
    photos: [],
    activeTheme: -1,
    styleObject: {
        color: '',
        backgroundColor: 'white',
        border: '8px solid white',
        borderRadius: '0',
        fontFamily: '',
        padding: '0',
        fontSize: '18px'
    }
}

new Vue({
    router,
    store,
    render: createElement => createElement(
        App,
        {props: {state: state}}
    )
}).$mount('#app')
