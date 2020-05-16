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
                this.parsing = true
                this.fileInvalid = false

                // Do nothing is no file was selected
                if (this.importFile === null) {
                    this.parsing = false
                    return
                }

                // Make sure it is a JSON file first
                if (!this.importFile.type.endsWith('json')) {
                    this.fileInvalid = true
                    this.parsing = false
                    return
                }

                const fileReader = new FileReader()

                fileReader.onload = e => {
                    try {
                        this.onJsonLoaded(JSON.parse(e.target.result))
                    } catch (error) {
                        this.fileInvalid = true
                        this.parsing = false

                        console.log(error)

                        return false
                    }
                }

                fileReader.readAsText(this.importFile)
            },
            export() {
                this.$refs['data-file'].href = 'data:application/json,' + encodeURIComponent(JSON.stringify(this.encodeState(this.state)))
                this.$refs['data-file'].click()
                this.$refs['data-file'].href = ''
            },
            encodeState(data) {
                let encodedJson = {}

                encodedJson.title = this.state.title
                encodedJson.activeTheme = this.state.activeTheme
                encodedJson.pages = []

                for (const photo of data.photos) {
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

                return encodedJson
            },
            onJsonLoaded(data) {
                this.validate(data, this.onJsonValidated)
            },
            onJsonValidated(data) {
                // Set title from JSON
                this.state.title = data['title']

                // if active theme exists, set it
                if ('activeTheme' in data) {
                    this.state.activeTheme = data['activeTheme']
                }

                let tag = 'unknown'

                // Add each photo from pages array
                for (const page of data['pages']) {
                    for (const content of page.content) {
                        if (content.type === 'title') {
                            tag = content.text
                        }
                    }

                    this.state.photos.push(
                        {
                            src: page.image_url,
                            tag: tag
                        }
                    )
                }

                this.$router.push('/gallery')

                this.parsing = false
            },
            validate(data, callback) {
                fetch(
                    'https://itu-sdbg-s2020.now.sh/api/validate',
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            // The API has a bug that does not set correct cross-site headers
                            // TODO: 'Content-Type': 'application/json'
                        },
                        body: data
                    }
                )
                    .then(stream => stream.json())
                    .then(json => {
                        if (json['success']) {
                            callback(data)
                        } else {
                            // this.fileInvalid = true
                            // this.parsing = false
                            callback(data) // Comment when API fixed
                        }
                    })
                    .catch(error => {
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
