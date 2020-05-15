<template>
    <div>
        <b-list-group class="mt-4">
            <b-list-group-item :key="file.name" :variant="uploaded.includes(file) ? 'success' : ''" v-for="(file, index) in files"
                               v-if="!invalid.includes(file)">
                <b-badge :variant="uploaded.includes(file) ? 'success' : ''" pill>{{ index + 1 }}</b-badge>
                {{ file.name.toLowerCase() }}
                <b-icon-check v-if="uploaded.includes(file)" variant="success"></b-icon-check>
            </b-list-group-item>
        </b-list-group>

        <b-list-group :class="{ 'mt-4': files.length !== invalid.length }">
            <b-list-group-item :key="file.name" v-for="(file, index) in files" v-if="invalid.includes(file)">
                <b-badge pill variant="danger">{{ index + 1 }}</b-badge>
                {{ file.name.toLowerCase() }} (ugyldig)
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    export default {
        name: 'FileList',
        props: {
            files: Array,
            invalid: Array,
            uploaded: Array
        }
    }
</script>

<style scoped>

</style>
