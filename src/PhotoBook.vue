<template>
    <div id="photobook">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-container>
                <b-navbar-brand @click="viewPage('welcome')" href="#">Photo Book 📷</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item :class="{active: pageActive('gallery')}" @click="viewPage('gallery')">View albums</b-nav-item>
                        <b-nav-item :class="{active: pageActive('upload')}" @click="viewPage('upload')">Upload photos</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>

        <b-container class="my-4">
            <component :is="page" :viewPage="viewPage"></component>
        </b-container>
    </div>
</template>

<script>
    import Welcome from './components/Welcome'
    import Gallery from './components/Gallery'
    import Upload from './components/Upload'

    export default {
        name: 'PhotoBook',
        props: {
            'homePage': String
        },
        components: {
            Welcome,
            Gallery,
            Upload
        },
        methods: {
            viewPage(page) {
                this.page = page
            },
            pageActive(page) {
                return this.page === page
            }
        },
        data() {
            return {
                page: this.homePage
            }
        }
    }
</script>

<style></style>
