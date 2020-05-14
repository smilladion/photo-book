<template>
    <section>
        <h3>Your gallery</h3>

        <hr>

        <b-alert :show="true" dismissible v-if="state.photos.length === 0" variant="info">
            It looks like you have no photos uploaded! Visit
            <router-link to="/upload">upload photos</router-link>
            to add photos.
        </b-alert>

        <ImageGrid :photos="state.photos"></ImageGrid>
    </section>
</template>

<script>
    import ImageGrid from '../components/ImageGrid'

    export default {
        name: 'Gallery',
        components: {
            ImageGrid
        },
        props: {
            sharedState: Object
        },
        data() {
            return {
                state: this.sharedState
            }
        }
    }
</script>

<style scoped>

</style>
