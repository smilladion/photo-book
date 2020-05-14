<template>
    <section>
        <h3>Upload photos</h3>

        <hr>

        <b-form-file accept="image/*" drop-placeholder="Omnom, that is a tasty photo" multiple placeholder="Drop your photos here" ref="file-input"
                     v-model="files"></b-form-file>

        <FileMessage :files="files" :uploadStarted="uploadStarted" @change="invalidChanged"></FileMessage>
        <FileList :files="files" :invalid="invalid" :uploaded="uploaded"></FileList>

        <p :class="{ 'my-4': invalid.length !== 0 }" class="text-center" v-if="!uploadStarted && files.length > 0">
            <b-button @click="startClicked" class="mr-1" v-if="invalid.length === 0" variant="success">Start upload</b-button>
            <b-button @click="resetClicked" variant="danger">Reset files</b-button>
        </p>

        <b-progress animated height="1.5rem" show-progress v-if="uploadStarted" variant="info">
            <b-progress-bar :max="files.length" :value="uploaded.length">{{ uploaded.length + '/' + files.length + ' complete'}}</b-progress-bar>
        </b-progress>

        <div class="text-center" v-if="uploadStarted && uploaded.length === files.length">
            <router-link to="/gallery">
                <b-button class="mr-1 my-4" variant="dark">View in gallery</b-button>
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
                            'src': e.target.result,
                            'tag': file.name.toLowerCase()
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
