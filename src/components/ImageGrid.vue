<template>
    <div>
        <b-row cols="3">
            <b-col :key="photo.src" class="mb-4" v-for="photo in photos">
                <img :alt="photo.tag" :src="photo.src" @click="$emit('photoClicked', photo)" class="img-fluid img-thumbnail"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'ImageGrid',
        props: {
            photos: Array
        }
    }
</script>

<style scoped>
    img {
        cursor: pointer;
    }
</style>
