import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '../views/Welcome'
import Gallery from '../views/Gallery'
import Upload from '../views/Upload'
import Editor from '../views/Editor'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
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
    },
    {
        path: '/editor',
        name: 'Editor',
        component: Editor,
        props: true,
        beforeEnter(to, from, next) {
            if (to.params.photo) {
                next()
            } else {
                next('/')
            }
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
