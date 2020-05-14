<template>
    <div>
        <h3>Your new photos</h3>

        <hr/>

        <div class="text-center">
            <b-button @click="viewPage('gallery')" class="mt-4 mr-1" variant="info">View full gallery</b-button>
            <b-button @click="uploadMore()" class="mt-4" variant="dark">Return to upload</b-button>
        </div>

        <b-row cols="3" style="min-height: 5rem">
            <b-col class="mt-4" v-for="(img, index) in photos">
                <img :src="img.data" alt="Uploaded image" class="img-fluid rounded img-thumbnail"/>
            </b-col>
        </b-row>

        <b-progress animated class="mt-4" height="1.5rem" show-progress variant="info">
            <b-progress-bar :max="total" :value="photos.length">{{ photos.length + '/' + total + ' complete'}}</b-progress-bar>
        </b-progress>
    </div>
</template>

<script>
    export default {
        name: 'Preview',
        props: {
            'photos': Array,
            'total': Number,
            'viewPage': Function,
            'uploadMore': Function
        }
    }
</script>

<style scoped></style>
