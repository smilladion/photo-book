<!-- Komponent skrevet af: Esther -->
<!-- UI til redigering af et billede (Toast Image Editor). -->
<template>
    <ImageEditor :options="options" include-ui ref="image-editor"></ImageEditor>
</template>

<script>
    import ImageEditor from '@toast-ui/vue-image-editor/src/ImageEditor.vue'

    import 'tui-image-editor/dist/svg/icon-a.svg'
    import 'tui-image-editor/dist/svg/icon-b.svg'
    import 'tui-image-editor/dist/svg/icon-c.svg'
    import 'tui-image-editor/dist/svg/icon-d.svg'

    import 'tui-color-picker/dist/tui-color-picker.css'
    import 'tui-image-editor/dist/tui-image-editor.css'

    const THEME = {
        'common.bisize.width': '0',
        'common.bisize.height': '0',
        'common.backgroundColor': '#f8f9fa',
        'common.border': 'none',

        // Ikon tema
        'menu.normalIcon.color': '#c9c9c9',
        'menu.disabledIcon.color': '#727272',
        'menu.hoverIcon.color': '#e9e9e9',
        'menu.iconSize.width': '16px',
        'menu.iconSize.height': '16px'
    }

    export default {
        name: 'PhotoEditor',
        components: {
            ImageEditor
        },
        props: {
            photo: Object
        },
        data() {
            return {
                options: {
                    includeUI: {
                        loadImage: {
                            path: this.photo.src,
                            name: this.photo.tag
                        },
                        theme: THEME,
                        uiSize: {
                            width: '100%',
                            height: '672px'
                        },
                        menuBarPosition: 'left'
                    },
                    usageStatistics: false
                }
            }
        },
        methods: {
            saveBase64() {
                this.photo.src = this.$refs['image-editor'].invoke('toDataURL', {
                    format: 'jpeg',
                    quality: 0.5
                })
            }
        }
    }
</script>

<style scoped>

</style>
