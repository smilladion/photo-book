<!-- Komponent skrevet af: Ida og Esther -->
<!-- Siden til at gemme og åbne en fotobog i JSON format. -->
<template>
    <section>
        <h3>Gem eller åbn en fotobog</h3>

        <hr>

        <b-card-group deck>
            <b-card align="center" header="Importering">
                <b-card-text>
                    <p>For at importere en <code>photobook.json</code>, vælg en fil:</p>

                    <b-spinner v-if="parsing"></b-spinner>
                    <b-form-file @input="this.import" accept="application/json" browse-text="Gennemse"
                                 drop-placeholder="Slip for at åbne" placeholder="Upload din photobook.json fil her"
                                 ref="file-input" v-else v-model="importFile"></b-form-file>

                    <p class="mt-3 mb-0 text-danger" v-if="fileInvalid">Filen du har valgt er ikke en gyldig .json-fil.</p>
                </b-card-text>
            </b-card>

            <b-card align="center" header="Eksportering">
                <b-card-text>
                    <p>For at eksportere din <code>photobook.json</code>, klik her:</p>

                    <b-button @click="this.export" variant="outline-primary">Eksporter JSON</b-button>
                    <a download="photobook.json" ref="data-file" v-show="false"/>
                </b-card-text>
            </b-card>
        </b-card-group>
    </section>
</template>

<script>
    export default {
        name: 'Save',
        props: {
            sharedState: Object
        },
        data() {
            return {
                state: this.sharedState,
                importFile: null,
                importJson: null,
                fileInvalid: false,
                parsing: false
            }
        },
        methods: {
            import() {
                // Sætter parsing = true (viser loading-hjulet)
                this.parsing = true
                // Nulstiller ugyldig fil tekst (fjerner fejlen)
                this.fileInvalid = false

                // Gør ingenting hvis ingen fil var valgt
                if (this.importFile === null) {
                    // Parser ikke længere (viser loading-hjulet)
                    this.parsing = false
                    return
                }

                // Sørger for at filen er en JSON fil
                if (!this.importFile.type.endsWith('json')) {
                    this.fileInvalid = true // Shows error prompt
                    this.parsing = false // Hides spinner
                    return
                }

                // Opretter en ny file reader
                const fileReader = new FileReader()

                // "File reader onload" bliver kørt når fildata er tilgængelig
                fileReader.onload = e => {
                    try {
                        // Forsøger at parse dette som en JSON fil
                        this.onJsonLoaded(JSON.parse(e.target.result))
                    } catch (error) {
                        // Vis ugyldig fil tekst hvis parsing fejlede
                        this.fileInvalid = true
                        this.parsing = false

                        console.log(error)

                        return false
                    }
                }

                // Læs fil og kald "onload" når færdig
                fileReader.readAsText(this.importFile)
            },
            export() {
                // For at downloade fra "data blob", krypter JSON-tilstand til data URI på et usynligt link
                this.$refs['data-file'].href = 'data:application/json,' + encodeURIComponent(JSON.stringify(this.encodeState(this.state)))
                // Tvangsklik linket for at downloade dataen
                this.$refs['data-file'].click()
                // Smid dataen væk for at undgå en langsom browser
                this.$refs['data-file'].href = ''
            },
            encodeState(data) {
                // Opret tomt JS objekt
                let encodedJson = {}

                // Sæt titel og aktivt tema fra den nuværende "state"
                encodedJson.title = this.state.title
                encodedJson.activeTheme = this.state.activeTheme
                encodedJson.pages = []

                // For hvert billede i dataen, tilføj til den krypterede JSON
                for (const photo of data.photos) {
                    // Formater JSON side til API
                    encodedJson.pages.push({
                        image_url: photo.src,
                        content: [
                            {
                                type: 'title',
                                text: photo.tag
                            }
                        ]
                    })
                }

                // Returner endelige JS objekt, nu lavet
                return encodedJson
            },
            onJsonLoaded(data) {
                // Kør dataen gennem validation API'en
                this.validate(data, this.onJsonValidated)
            },
            onJsonValidated(data) {
                // Sæt titel fra JSON
                this.state.title = data['title']
                // Fjern gamle billeder
                this.state.photos = []

                // Hvis et aktivt tema eksisterer, sæt det
                if ('activeTheme' in data) {
                    this.state.activeTheme = data['activeTheme']
                }

                // Sæt billedets tag til "unknown" som en sikkerhedsforanstaltning
                let tag = 'unknown'

                // Tilføj hvert billede fra "pages" arrayet
                for (const page of data['pages']) {
                    // Prøv at finde et tag fra billedets indhold
                    for (const content of page.content) {
                        if (content.type === 'title') {
                            // Tag fundet, sæt variabel til tag
                            tag = content.text
                        }
                    }

                    // Tilføj et nyt billede med det korrekte tag, url og indhold
                    this.state.photos.push(
                        {
                            src: page.image_url,
                            tag: tag
                        }
                    )
                }

                // Naviger til fotobogen når upload er færdiggjort
                this.$router.push('/gallery')

                // Skjul loading-hjulet
                this.parsing = false
            },
            validate(data, callback) {
                fetch(
                    // Send en POST request for at validere API
                    'https://itu-sdbg-s2020.now.sh/api/validate',
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            // API'en har en fejl som ikke sætter de korrekte "cross-site headers"
                            // TODO: 'Content-Type': 'application/json'
                        },
                        // Sæt POST data til parset JSON
                        body: data
                    }
                )
                    .then(stream => stream.json()) // Konverter string til JSON
                    .then(json => {
                        // Tjek om validering var succesfuld
                        if (json['success']) {
                            callback(data)
                        } else {
                            // Vis fejlbesked (når/hvis API fejlen er fikset)
                            // this.fileInvalid = true
                            // this.parsing = false
                            callback(data) // Udkommenter når API virker
                        }
                    })
                    .catch(error => {
                        // API/parsing fejl, vis fejlbesked
                        console.error(error)

                        this.fileInvalid = true
                        this.parsing = false
                    })
            }
        }
    }
</script>

<style scoped>

</style>
