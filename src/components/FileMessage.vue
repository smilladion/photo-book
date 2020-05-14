<template>
    <div>
        <h6 class="text-muted text-center mt-4" v-if="uploadStarted">
            Your files have been uploaded to the site.
        </h6>
        <h6 class="text-muted text-center mt-4" v-else-if="filesEmpty">
            Please select image files for uploading.
        </h6>
        <h6 class="text-muted text-center mt-4" v-else-if="filesValid">
            {{ files.length }} photo{{ files.length > 1 ? 's were' : ' was'}} selected for upload, is this correct?
        </h6>
        <h6 class="text-danger text-center mt-4" v-else>
            {{ invalid.length }} file{{ files.length > 1 ? 's were' : ' was'}} not valid, please only upload images.
        </h6>
    </div>
</template>

<script>
    export default {
        name: 'FileMessage',
        props: {
            files: Array,
            uploadStarted: Boolean
        },
        data() {
            return {
                invalid: []
            }
        },
        computed: {
            filesEmpty() {
                return this.files.length === 0
            },
            filesValid() {
                return this.invalid.length === 0
            }
        },
        watch: {
            files(value, oldValue) {
                this.invalid = []

                for (const file of this.files) {
                    if (!file.type.startsWith('image')) {
                        this.invalid.push(file)
                    }
                }

                this.$emit('change', this.invalid)
            }
        }
    }
</script>

<style scoped>

</style>
