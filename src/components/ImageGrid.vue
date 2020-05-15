<template>
    <div>
        <b-row cols="3">
            <b-col :key="photo.src" class="mb-4" v-for="photo in photos">
                <img :alt="photo.tag" :style="styleObject" :src="photo.src" @click="$emit('photoClicked', photo)" class="img-fluid img-thumbnail"/>
                <h6 v-text="photo.tag" :style="styleObject" class="text-center"></h6>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'ImageGrid',
        props: {
            photos: Array,
            styleObject: Object
        }
    }
</script>

<style scoped>
    img {
        cursor: pointer;
    }
</style>
