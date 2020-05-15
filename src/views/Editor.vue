<template>
    <section>
        <h3>Edit photo <small class="text-muted">{{ photo.tag }}</small></h3>

        <hr>

        <PhotoEditor :photo="photo" ref="photo-editor"></PhotoEditor>

        <p class="text-center my-4">
            <b-button @click="saveClicked" class="mr-1" variant="success">Finish and save</b-button>
            <b-button @click="returnPrevious" variant="danger">Cancel edit</b-button>
        </p>
    </section>
</template>

<script>
    import PhotoEditor from '../components/PhotoEditor'

    export default {
        name: 'Editor',
        components: {
            PhotoEditor
        },
        props: {
            photo: Object
        },
        data() {
            return {}
        },
        methods: {
            returnPrevious() {
                this.$router.go(-1)
            },
            saveClicked() {
                this.$refs['photo-editor'].saveBase64()
                this.returnPrevious()
            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>
