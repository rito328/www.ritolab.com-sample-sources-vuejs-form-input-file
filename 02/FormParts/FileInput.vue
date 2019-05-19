<template>
    <div>
        <label>ファイルを選択
            <input @change="changeFile" ref="file" type="file">
        </label> <span id="file_name" v-show="file.name">{{ file.name }} <span class="reset_file_ico" @click="resetFile">×</span></span>
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
                error: ''
            }
        },

        computed: {
            isError: function () {
                return !!this.error !== ''
            }
        },

        methods: {
            changeFile: function (e) {
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
            validation: function (file) {
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
            }
        }
    }
</script>

<style scoped>
    label {
        font-size: 12px;
        padding: 2px 3px;
        border: 1px solid #c6c6c6;
    }
    label:hover {
        cursor: pointer;
        background-color: #cbdada;
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
</style>