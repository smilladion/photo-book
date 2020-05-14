<template>
    <div>
        <h3>View your gallery</h3>

        <hr/>

        <b-alert :show="true" @dismissed="alertDismiss()" dismissible v-if="storedPhotos.length === 0" variant="info">
            It looks like you have no photos available! Visit <a @click="viewPage('upload')" href="#">upload photos</a> to add photos.
        </b-alert>

        <b-row cols="3" style="min-height: 5rem">
            <b-col class="mt-4 text-center" v-for="(img, index) in storedPhotos">
                <img :src="img.data" alt="Uploaded image" class="img-fluid rounded img-thumbnail"/>
                <span class="text-muted">{{ img.title }}</span>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Gallery',
        props: {
            viewPage: Function
        },
        methods: {
            alertDismiss() {
                console.log('Hide this alert and never show again!')
            }
        },
        data() {
            return {
                storedPhotos: []
            }
        },
        mounted() {
            let photos = localStorage.getItem('photos')

            if (photos === null) {
                photos = []
            } else {
                photos = JSON.parse(photos)
            }

            this.storedPhotos = photos
        }
    }
</script>

<style scoped></style>
