<template>
    <section>
        <h3>Din fotobog</h3>

        <hr>

        <b-alert :show="true" dismissible v-if="state.photos.length === 0" variant="info">
            Det ser ud til du ikke har tilføjet nogle billeder endnu! Gå ind på
            <router-link to="/upload">tilføj billeder</router-link>
            for at oprette din fotobog.
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
