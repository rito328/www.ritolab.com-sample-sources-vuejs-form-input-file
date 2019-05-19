<template>
    <div>
        <div class="drop_area" :class="classesDragArea" @dragover.prevent="onArea" @drop.prevent="dropFile" @dragleave.prevent="offArea" @dragend.prevent="offArea">
            <label>ファイルを選択
                <input @change="changeFile" ref="file" type="file">
            </label>
        </div>
        <p><span id="file_name" v-show="file.name">{{ file.name }} <span class="reset_file_ico" @click="resetFile">×</span></span></p>
        <p id="error" v-show="error">{{ error }}</p>
        <p v-if="isPreview"><img :src="imageData" alt=""></p>
    </div>
</template>

<script>
    import { FileInputable } from './Mixins/FileInputable'
    import { ImageCreatable } from './Mixins/ImageCreatable'

    export default {
        name: "FileInputImage",
        props: ['params'],
        mixins:[ FileInputable, ImageCreatable ],

        data () {
            return {
                preview: true
            }
        },

        mounted () {
            const preview = this.params.preview
            this.preview = (typeof preview === 'boolean') ? preview : true
        },

        updated () {
            if (typeof this.file.size === 'undefined') {
                this.imageData = ''
                return
            }

            if (this.isImage(this.file.type)) {
                this.createImage(this.file)
            }
        },

        computed: {
            isPreview () {
                return this.imageData !== '' && this.preview
            }
        }
    }
</script>