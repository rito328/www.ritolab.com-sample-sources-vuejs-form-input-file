<template>
    <form method="post" action="">
        <file-input :params="{ limit: 100, unit: 'kb', allow: 'csv' }"></file-input>
    </form>
</template>

<script>
    import FileInput from './FormParts/FileInput.vue'
    export default {
        name: "FormSample",
        components: {
            FileInput
        }
    }
</script>
