<template>
    <section>
        <b-jumbotron bg-variant="light" border-variant="muted" class="text-center" text-variant="muted">
            <b-container style="max-width: 30rem">
                <h1>Greetings, human!</h1>
                <p class="lead text-muted">This is your personal photo book, a place to store, view, and edit your photos online.</p>
                <p>
                    <router-link to="/gallery">
                        <b-button class="mr-1" variant="info">View gallery</b-button>
                    </router-link>
                    <router-link to="/upload">
                        <b-button variant="dark">Add photos</b-button>
                    </router-link>
                </p>
            </b-container>
        </b-jumbotron>
    </section>
</template>

<script>
    export default {
        name: 'Welcome'
    }
</script>

<style scoped>

</style>
