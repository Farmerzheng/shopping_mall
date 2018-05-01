<template>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="登录">
            
        </el-form-item>
        <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                }
            };
        },
        methods: {
            submitForm() {
            }
        }
    }
</script>
<style>
    .el-form {
        width: 400px;
        background-color: #eee;
        border: 1px solid #ddd;
        padding: 30px;
        border-radius: 10px;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -200px;
        margin-top: -200px;
    }
</style>