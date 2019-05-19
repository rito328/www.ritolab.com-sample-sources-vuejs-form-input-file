import { FileEvaluable } from './FileEvaluable'

export const FileInputable = {
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