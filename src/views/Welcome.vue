<template>
    <section>
        <b-jumbotron bg-variant="light" border-variant="muted" class="text-center" text-variant="muted">
            <b-container style="max-width: 30rem">
                <h1>Din digitale fotobog.</h1>
                <p class="lead text-muted">For at komme i gang, klik på en af de nedenstående knapper og upload et billede fra din computer.</p>
                <p>
                    <router-link to="/gallery">
                        <b-button class="mr-1" variant="info">Vis fotobog</b-button>
                    </router-link>
                    <router-link to="/upload">
                        <b-button variant="dark">Tilføj billeder</b-button>
                    </router-link>
                </p>
            </b-container>
        </b-jumbotron>
    </section>
</template>

<script>
    export default {
        name: 'Welcome',
        mounted() {
            document.body.style.background = 'url(\'https://i.imgur.com/CK3NmM1.jpg\')'
        },
        destroyed() {
            document.body.style.background = ''
        }
    }
</script>

<style scoped>

</style>
