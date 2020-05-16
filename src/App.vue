<template>
    <div id="app">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-container>
                <router-link tag="b-navbar-brand" to="/">📷 Photo Book</router-link>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <router-link exact-active-class="active" tag="b-nav-item" to="/">Hjem</router-link>
                        <router-link exact-active-class="active" tag="b-nav-item" to="/gallery">Vis fotobog</router-link>
                        <router-link exact-active-class="active" tag="b-nav-item" to="/upload">Tilføj billeder</router-link>
                        <router-link exact-active-class="active" tag="b-nav-item" to="/save">Gem/åbn</router-link>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>

        <b-container class="mt-4">
            <router-view :sharedState="state"/>
        </b-container>
    </div>
</template>

<script>
    import PhotoEditor from './components/PhotoEditor'

    export default {
        name: 'App',
        components: {
            PhotoEditor
        },
        props: {
            state: Object
        }
    }
</script>

<style>

</style>
