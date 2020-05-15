<template>
    <section>
        <h3>Tilføj billeder</h3>

        <hr>

        <b-form-file :file-name-formatter="fileInputText" accept="image/*" browse-text="Gennemse..." drop-placeholder="Slip for at tilføje" multiple
                     placeholder="Træk og slip dine billeder her" ref="file-input" v-model="files"></b-form-file>

        <FileMessage :files="files" :uploadStarted="uploadStarted" @change="invalidChanged"></FileMessage>
        <FileList :files="files" :invalid="invalid" :uploaded="uploaded"></FileList>

        <p :class="{ 'my-4': invalid.length !== 0 }" class="text-center" v-if="!uploadStarted && files.length > 0">
            <b-button @click="startClicked" class="mr-1" v-if="invalid.length === 0" variant="success">Start upload</b-button>
            <b-button @click="resetClicked" variant="danger">Nulstil filer</b-button>
        </p>

        <b-progress animated height="1.5rem" show-progress v-if="uploadStarted" variant="info">
            <b-progress-bar :max="files.length" :value="uploaded.length">{{ uploaded.length + '/' + files.length + ' færdig'}}</b-progress-bar>
        </b-progress>

        <div class="text-center" v-if="uploadStarted && uploaded.length === files.length">
            <router-link to="/gallery">
                <b-button class="mr-1 my-4" variant="dark">Se fotobogen</b-button>
            </router-link>
        </div>
    </section>
</template>

<script>
    import FileMessage from '../components/FileMessage'
    import FileList from '../components/FileList'

    export default {
        name: 'Upload',
        components: {
            FileList,
            FileMessage
        },
        props: {
            sharedState: Object
        },
        data() {
            return {
                state: this.sharedState,
                files: [],
                invalid: [],
                uploaded: [],
                uploadStarted: false
            }
        },
        methods: {
            fileInputText(files) {
                let valid = files.length - this.invalid.length;
                return valid + ' gyldig' + (valid > 1 || valid === 0 ? 'e' : 't') + ' billede' + (valid > 1 || valid === 0 ? 'r' : '') + ' valgt'
            },
            invalidChanged(invalid) {
                this.invalid = invalid
            },
            startClicked() {
                if (this.invalid.length !== 0) {
                    return
                }

                this.uploadStarted = true
                this.uploaded = []

                const fileReader = new FileReader()

                let index = 0

                let doneFiles = () => {
                    // All images parsed! :)
                }

                let readFile = (files, state) => {
                    if (index >= files.length) {
                        doneFiles()
                        return
                    }

                    let file = files[index]

                    fileReader.onload = e => {
                        this.uploaded.push(file)

                        state.photos.push({
                            src: e.target.result,
                            tag: file.name.toLowerCase()
                        })

                        // TODO: Upload to imgur instead of this ghetto array

                        readFile(files, state)
                    }

                    fileReader.readAsDataURL(file)
                    index++
                }

                readFile(this.files, this.state)
            },
            resetClicked() {
                this.$refs['file-input'].reset()
            }
        },
        watch: {
            files(value, oldValue) {
                this.uploadStarted = false
            }
        }
    }
</script>

<style scoped>

</style>
