<!-- Komponent skrevet af: Esther -->
<!-- Den overordnede side til redigering af billeder, som man kommer ind på ved at trykke "Rediger". -->
<template>
    <section>
        <h3>Rediger billede</h3>

        <hr>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Titel</span>
            </div>
            <input :aria-label="photo.tag" :placeholder="photo.tag" aria-describedby="basic-addon1" class="form-control" type="text" v-model="newName">
        </div>

        <PhotoEditor :photo="photo" ref="photo-editor"></PhotoEditor>

        <p class="text-center my-4">
            <b-button @click="saveClicked" class="mr-1" variant="success">Gem billede</b-button>
            <b-button @click="returnPrevious" variant="danger">Annuller</b-button>
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
            return {
                newName: ''
            }
        },
        methods: {
            returnPrevious() {
                this.$router.go(-1)
            },
            saveClicked() {
                this.$refs['photo-editor'].saveBase64()
                this.returnPrevious()

                // Sætter billedets nye navn hvis det er blevet redigeret
                if (this.newName.length > 0) {
                    this.photo.tag = this.newName
                }
            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>
