<template>
    <b-jumbotron bg-variant="light" border-variant="muted" class="text-center" text-variant="muted">
        <b-container style="max-width: 30rem">
            <h1>Getting started</h1>
            <p class="lead text-muted">Welcome to your personal photo book, a place to store, view, and edit photos
                online.</p>
            <p>
                <b-button @click="viewPage('gallery')" class="mr-1" variant="secondary">View gallery</b-button>
                <b-button @click="viewPage('upload')" variant="dark">Add photos</b-button>
            </p>
        </b-container>
    </b-jumbotron>
</template>

<script>
    export default {
        name: 'Welcome',
        props: {
            viewPage: Function
        }
    }
</script>

<style scoped></style>
