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
                // Set parsing = true (this shows the spinner)
                this.parsing = true
                // Reset invalid file prompt (hides the error)
                this.fileInvalid = false

                // Do nothing is no file was selected
                if (this.importFile === null) {
                    // No longer parsing (hides spinner)
                    this.parsing = false
                    return
                }

                // Make sure it is a JSON file first
                if (!this.importFile.type.endsWith('json')) {
                    this.fileInvalid = true // Shows error prompt
                    this.parsing = false // Hides spinner
                    return
                }

                // Creates a new file reader
                const fileReader = new FileReader()

                // File reader onload is triggered when file data is available
                fileReader.onload = e => {
                    try {
                        // Try to parse this as a JSON file
                        this.onJsonLoaded(JSON.parse(e.target.result))
                    } catch (error) {
                        // Show invalid file prompt if parsing failed
                        this.fileInvalid = true
                        this.parsing = false

                        console.log(error)

                        return false
                    }
                }

                // Read file and call onload when done
                fileReader.readAsText(this.importFile)
            },
            export() {
                // To download from data blob, encode JSON state into data URI on invisible link
                this.$refs['data-file'].href = 'data:application/json,' + encodeURIComponent(JSON.stringify(this.encodeState(this.state)))
                // Force click the link to download the data
                this.$refs['data-file'].click()
                // Discard the data to avoid slow browser
                this.$refs['data-file'].href = ''
            },
            encodeState(data) {
                // Create empty javascript object
                let encodedJson = {}

                // Set title active theme and pages keys from current state
                encodedJson.title = this.state.title
                encodedJson.activeTheme = this.state.activeTheme
                encodedJson.pages = []

                // For each photo in data, add to encoded JSON
                for (const photo of data.photos) {
                    // Correctly format page JSON for API
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

                // Return final javascript object now built
                return encodedJson
            },
            onJsonLoaded(data) {
                // Run the data through the validate API
                this.validate(data, this.onJsonValidated)
            },
            onJsonValidated(data) {
                // Set title from JSON
                this.state.title = data['title']
                // Remove old photos
                this.state.photos = []

                // if active theme exists, set it
                if ('activeTheme' in data) {
                    this.state.activeTheme = data['activeTheme']
                }

                // Set photo tag to unknown as fallback/safety precaution
                let tag = 'unknown'

                // Add each photo from pages array
                for (const page of data['pages']) {
                    // Try and find tag from all of the photo content data
                    for (const content of page.content) {
                        if (content.type === 'title') {
                            // Tag found, set variable to tag
                            tag = content.text
                        }
                    }

                    // Add new photo with correct tag, url and content
                    this.state.photos.push(
                        {
                            src: page.image_url,
                            tag: tag
                        }
                    )
                }

                // Navigate to gallery once upload is complete
                this.$router.push('/gallery')

                // Hide spinner
                this.parsing = false
            },
            validate(data, callback) {
                fetch(
                    // Send a POST request to validate API
                    'https://itu-sdbg-s2020.now.sh/api/validate',
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            // The API has a bug that does not set correct cross-site headers
                            // TODO: 'Content-Type': 'application/json'
                        },
                        // Set POST data to parsed JSON
                        body: data
                    }
                )
                    .then(stream => stream.json()) // Convert string to JSON
                    .then(json => {
                        // Check if validation was successful
                        if (json['success']) {
                            callback(data)
                        } else {
                            // Show error message (when API is fixed)
                            // this.fileInvalid = true
                            // this.parsing = false
                            callback(data) // Comment when API fixed
                        }
                    })
                    .catch(error => {
                        // API/parsing error show error message
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
