import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '../views/Welcome'
import Gallery from '../views/Gallery'
import Upload from '../views/Upload'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/upload',
        name: 'Upload',
        component: Upload
    }
]

const router = new VueRouter({
    routes
})

export default router
