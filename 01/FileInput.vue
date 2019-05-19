<template>
    <div>
        <label>ファイルを選択
            <input type="file">
        </label> <span id="file_name" >sample.csv <span class="reset_file_ico">×</span></span>
        <p id="error">csv ファイルのみアップロード可能です</p>
    </div>
</template>

<script>
    export default {
        name: "FileInput",
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
        padding: 4px;
        font-size: 12px;
        border: 1px solid #c6c6c6;
        border-radius: 10px;
    }
    .reset_file_ico:hover {
        cursor: pointer;
        border-color: #5f6674;
    }
    #error {
        color: red;
    }
</style>