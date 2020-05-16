<template>
    <div>
        <b-row cols="2" cols-lg="3">
            <b-col :key="photo.src" class="mb-4 text-center" v-for="(photo, index) in photos">
                <div :style="styleObject">
                    <img :alt="photo.tag" :src="photo.src" :style="styleObject" class="img-fluid img-thumbnail" v-img:gal/>
                    <h4 :style="styleObject" class="text-center my-0" v-if="!editMode">{{ photo.tag }}</h4>
                    <b-input :style="titleInputStyle" class="text-center" placeholder="Enter a title" size="lg" v-else v-model="photo.tag"></b-input>
                </div>
                <template v-if="editMode">
                    <div class="mt-2">
                        <b-button @click="editPhoto(photo)" class="mr-2" size="sm" variant="info">Rediger</b-button>
                        <b-button @click="$emit('doneEditing')" class="mr-2" size="sm" variant="success">Gem</b-button>
                        <b-button @click="photos.splice(index, 1)" size="sm" variant="danger">Slet</b-button>
                    </div>
                </template>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'ImageGrid',
        props: {
            photos: Array,
            styleObject: Object,
            editMode: Boolean
        },
        data() {
            return {
                titleInputStyle: {
                    fontSize: '1rem',
                    fontFamily: 'sans-serif'
                }
            }
        },
        methods: {
            editPhoto(photo) {
                this.$router.push({name: 'Editor', params: {photo: photo}})
            }
        }
    }
</script>

<style scoped>
    h4 {
        word-wrap: anywhere;
    }

    img {
        cursor: pointer;
    }
</style>
