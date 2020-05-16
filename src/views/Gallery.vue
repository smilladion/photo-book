<template>
    <section>
        <b-row>
            <b-col><h3 class="text-left">Din fotobog</h3></b-col>
            <b-col class="text-right">
                <b-button :variant="editMode ? 'danger' : 'outline-danger'" @click="editMode=!editMode" class="mr-2" size="sm"
                          v-if="state.photos.length !== 0">Redigering
                </b-button>

                <b-dropdown right text="Vælg tema" v-if="state.photos.length !== 0" variant="primary">
                    <b-dropdown-item disabled v-if="themes === null">Loading themes</b-dropdown-item>
                    <template v-else>
                        <b-dropdown-item :active="state.activeTheme === -1" @click="resetTheme">Normal</b-dropdown-item>
                        <b-dropdown-item :active="theme.id === state.activeTheme" :key="theme.id" @click="themeClicked(theme)"
                                         v-for="theme in themes['themes']">
                            {{ theme.name }}
                        </b-dropdown-item>
                    </template>
                </b-dropdown>
            </b-col>
        </b-row>

        <hr>

        <b-alert :show="true" dismissible v-if="state.photos.length === 0" variant="info">
            Det ser ud til du ikke har tilføjet nogle billeder endnu! Gå ind på
            <router-link to="/upload">tilføj billeder</router-link>
            for at oprette din fotobog.
        </b-alert>

        <h6 class="text-muted text-center my-4" v-if="state.photos.length !== 0">
            Tryk på et foto for at se det i fuld skærm, eller rediger det gennem knappen til højre.
        </h6>

        <ImageGrid :editMode="editMode" :photos="state.photos" :styleObject="styleObject" @doneEditing="editMode=false"
                   @photoClicked="photoClicked"></ImageGrid>
    </section>
</template>

<script>
    import ImageGrid from '../components/ImageGrid'

    export default {
        name: 'Gallery',
        components: {
            ImageGrid
        },
        props: {
            sharedState: Object
        },
        data() {
            return {
                state: this.sharedState,
                themes: null,
                editMode: false,
                styleObject: {
                    color: '',
                    backgroundColor: 'white',
                    border: '8px solid white',
                    borderRadius: '0',
                    fontFamily: '',
                    padding: '0',
                    fontSize: '18px'
                }
            }
        },
        methods: {
            resetTheme() {
                this.state.activeTheme = -1
                this.styleObject = {
                    color: '',
                    backgroundColor: 'white',
                    border: '8px solid white',
                    borderRadius: '0',
                    fontFamily: '',
                    padding: '0',
                    fontSize: '18px'
                }
            },
            themeClicked(theme) {
                this.state.activeTheme = theme.id
                this.styleObject.color = '#' + theme.styles.primaryColor
                this.styleObject.backgroundColor = '#' + theme.styles.secondaryColor
                this.styleObject.border = '8px solid #' + theme.styles.secondaryColor
                this.styleObject.fontFamily = theme.styles.fontName
                this.styleObject.borderRadius = '0px'

                if (theme.name === 'Børnebog') {
                    this.styleObject.fontSize = '30px'
                } else if (theme.name === 'Rejsebog') {
                    this.styleObject.fontSize = '18px'
                } else if (theme.name === 'Formel') {
                    this.styleObject.fontSize = '20px'
                }
            }
        },
        mounted() {
            fetch('https://itu-sdbg-s2020.now.sh/api/themes')
                .then(stream => stream.json())
                .then(json => {
                    this.themes = json

                    if (this.state.activeTheme !== -1) {
                        this.themeClicked(this.themes['themes'][this.state.activeTheme - 1])
                    }
                })
                .catch(error => console.error(error))
        }
    }
</script>

<style scoped>
    h3 {
        margin: 0 !important;
    }
</style>
