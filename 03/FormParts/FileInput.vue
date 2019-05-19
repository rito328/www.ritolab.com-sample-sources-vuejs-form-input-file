<template>
    <div>
        <div class="drop_area" :class="classesDragArea" @dragover.prevent="onArea" @drop.prevent="dropFile" @dragleave.prevent="offArea" @dragend.prevent="offArea">
            <label>ファイルを選択
                <input @change="changeFile" ref="file" type="file">
            </label>
        </div>
        <p><span id="file_name" v-show="file.name">{{ file.name }} <span class="reset_file_ico" @click="resetFile">×</span></span></p>
        <p id="error" v-show="error">{{ error }}</p>
    </div>
</template>

<script>
    import { FileEvaluable } from './Mixins/FileEvaluable'
    export default {
        name: "FileInput",
        mixins: [ FileEvaluable ],

        data () {
            return {
                file: {},
                error: '',
                inArea: false
            }
        },

        computed: {
            isError: function () {
                return !!this.error !== ''
            },
            classesDragArea () {
                return {
                    'drag_on': this.inArea
                }
            }
        },

        methods: {
            dropFile(e) {
                this.changeFile(e)
                this.offArea()
            },
            changeFile (e) {
                const files = e.target.files || e.dataTransfer.files

                if (this.validation(files[0])) {
                    this.file = files[0]
                } else {
                    this.file = {}
                }
            },
            resetFile () {
                const input = this.$refs.file;
                input.type = 'text'
                input.type = 'file'
                this.file = {}
                this.error = ''
            },
            validation (file) {
                if (!this.isAllowFileType(file.type)) {
                    this.error = this.getErrorMessageType()
                    return false
                }

                if (!this.isAllowFileSize(file.size)) {
                    this.error = this.getErrorMessageSize()
                    return false
                }

                this.error = ''
                return true
            },
            onArea  () { this.inArea = true  },
            offArea () { this.inArea = false }
        }
    }
</script>

<style scoped>
    label {
        font-size: 12px;
        padding: 2px 3px;
    }
    label:hover {
        cursor: pointer;
    }
    label input {
        display: none;
    }
    #file_name {
        font-size: 14px;
        margin-left: 20px;
    }
    .reset_file_ico {
        padding: 0 4px;
        font-size: 12px;
        border: 1px solid #c6c6c6;
        border-radius: 10px;
    }
    .reset_file_ico:hover {
        cursor: pointer;
        border-color: #5f6674;
    }
    #error {
        color: #d70035;
    }
    .drop_area {
        width: 200px;
        padding: 10px;
        text-align: center;
        border: 1px dashed #c6c6c6;
        background-color: #f9f9f9;
    }
    .drag_on {
        border: 2px dashed #bcbcbc;
        background-color: #fafdff;
    }
</style>