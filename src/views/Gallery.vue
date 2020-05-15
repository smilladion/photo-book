<template>
    <section>
        <b-row>
            <b-col><h3 class="text-left">Din fotobog</h3></b-col>
            <b-col class="text-right">
                <b-dropdown right text="Vælg tema" variant="outline-primary">
                    <b-dropdown-item disabled v-if="themes === null">Loading themes</b-dropdown-item>
                    <b-dropdown-item :active="theme.id === activeTheme" :key="theme.id" @click="themeClicked(theme)" v-else v-for="theme in themes['themes']">{{
                        theme.name }}
                    </b-dropdown-item>
                </b-dropdown>
            </b-col>
        </b-row>

        <hr>

        <b-alert :show="true" dismissible v-if="state.photos.length === 0" variant="info">
            Det ser ud til du ikke har tilføjet nogle billeder endnu! Gå ind på
            <router-link to="/upload">tilføj billeder</router-link>
            for at oprette din fotobog.
        </b-alert>

        <h6 class="text-muted text-center my-4">
            Tryk på et foto for at redigere det.
        </h6>

        <ImageGrid :photos="state.photos" :styleObject="styleObject" @photoClicked="photoClicked"></ImageGrid>
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
                activeTheme: -1,

                styleObject: {
                    color: '',
                    backgroundColor: '',
                    border: '',
                    borderRadius: '',
                    fontFamily: '',
                    padding: '0',
                    fontSize: ''
                }
            }
        },
        methods: {
            photoClicked(photo) {
                this.$router.push({name: 'Editor', params: {photo: photo}})
            },
            themeClicked(theme) {
                this.activeTheme = theme.id
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
                .then(json => this.themes = json)
                .catch(error => console.error(error))
        }
    }
</script>

<style scoped>
    h3 {
        margin: 0 !important;
    }
</style>
