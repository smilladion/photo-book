<!-- Komponent skrevet af: Smilla -->
<!-- Viser en vejledende tekst baseret på brugerens input og hvad de har gjort indtil videre i upload-processen. -->
<template>
    <div>
        <h6 class="text-muted text-center mt-4" v-if="uploadStarted">
            Dine billeder er blevet uploadet til siden.
        </h6>
        <h6 class="text-muted text-center mt-4" v-else-if="filesEmpty">
            Vælg de billeder som skal uploades.
        </h6>
        <h6 class="text-muted text-center mt-4" v-else-if="filesValid">
            {{ files.length }} billede{{ files.length > 1 ? 'r' : ''}} blev valgt, er det korrekt?
        </h6>
        <h6 class="text-danger text-center mt-4" v-else>
            {{ invalid.length }} fil{{ invalid.length > 1 ? 'er' : ''}} var ikke gyldig{{ invalid.length > 1 ? 'e' : ''}}, kun billedfiler er tilladt.
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

                // Tilføjer ugyldige filer til deres egen liste
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
