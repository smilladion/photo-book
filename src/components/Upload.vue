<template>
    <!-- Messy, sorry :) -->

    <div>
        <div v-if="noImages()">
            <h3>Upload your photos</h3>

            <hr/>

            <b-form-file @input="photosAdded()" accept="image/jpeg, image/png, image/gif" drop-placeholder="Omnom, that is a tasty photo"
                         multiple placeholder="Drop your photos here" ref="file-input" v-model="files"></b-form-file>

            <div class="mt-4" v-if="photosValid()">
                <b-list-group>
                    <b-list-group-item :class="{'text-danger': invalid.includes(file)}" v-for="(file, index) in files">
                        <b-badge :variant="invalid.includes(file) ? 'danger' : 'primary'" pill>{{ index + 1 }}</b-badge>
                        {{ file.name.toLowerCase() + (invalid.includes(file) ? ' (invalid)' : '')}}
                    </b-list-group-item>
                </b-list-group>

                <div v-if="invalid.length === 0">
                    <h6 class="text-muted text-center mt-4">{{ files.length }} photo{{ files.length > 1 ? 's were' : ' was'}} selected for upload, is this
                        correct?</h6>

                    <p class="mt-4 text-center">
                        <b-button @click="photosUpload()" class="mr-1" variant="success">Start upload</b-button>
                        <b-button @click="photosReset()" variant="danger">Reset files</b-button>
                    </p>
                </div>

                <div v-else>
                    <h6 class="text-danger text-center mt-4">{{ invalid.length }} file{{ files.length > 1 ? 's were' : ' was'}} not valid, please only upload
                        image
                        formats.</h6>

                    <p class="mt-4 text-center">
                        <b-button @click="photosReset()" variant="danger">Reset files</b-button>
                    </p>
                </div>
            </div>

            <div class="mt-4" v-else>
                <h6 class="text-muted text-center">No valid files were selected, please choose photos.</h6>
            </div>
        </div>

        <component :photos="images" :total="files.length" :uploadMore="uploadMore" :viewPage="viewPage" is="preview" v-else></component>
    </div>
</template>

<script>
    import Preview from './Preview'

    export default {
        name: 'Upload',
        components: {
            Preview
        },
        props: {
            'viewPage': Function
        },
        data() {
            return {
                files: null,
                invalid: [],
                images: []
            }
        },
        methods: {
            uploadMore() {
                this.files = null
                this.invalid = []
                this.images = []
            },
            photosAdded() {
                this.invalid = []

                for (const file of this.files) {
                    if (!file.type.startsWith('image')) {
                        this.invalid.push(file)
                    }
                }

                console.log(this.invalid)
            },
            photosValid() {
                return this.files != null && this.files?.length !== 0
            },
            photosReset() {
                this.$refs['file-input'].reset()
            },
            photosUpload() {
                const fileReader = new FileReader()

                let files = this.files
                let images = this.images

                let index = 0

                let doneFiles = () => {
                    let photos = localStorage.getItem('photos')

                    if (photos === null) {
                        photos = []
                    } else {
                        photos = JSON.parse(photos)
                    }

                    for (const photo of images) {
                        photos.push(photo)
                    }

                    localStorage.setItem('photos', JSON.stringify(photos))
                }

                let readFile = () => {
                    if (index >= files.length) {
                        doneFiles()
                        return
                    }

                    let file = files[index]

                    fileReader.onload = e => {
                        images.push({'title': file.name.toLowerCase(), 'data': e.target.result})
                        readFile()
                    }

                    fileReader.readAsDataURL(file)
                    index++
                }

                readFile(index)
            },
            noImages() {
                return this.images === null || this.images?.length === 0
            }
        }
    }
</script>

<style scoped></style>
