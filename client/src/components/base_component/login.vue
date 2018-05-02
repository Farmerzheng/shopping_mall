<template>
    <el-form :label-position="labelPosition" label-width="80px" v-show="show">
        <div class="title">
            <h1>华为商城</h1>
            <p>因为专注&nbsp;&nbsp;&nbsp;所以专业</p>
        </div>
        <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <div class="submit">
            <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
    </el-form>
</template>

<script>
    export default {
        props:['show'],
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
    .title{
        text-align: center;
        color:#409EFF;
        margin:20px 0;
    }
    .title h1{
        font-size: 30px;
        margin-bottom:20px;
    }
    .title p{
        font-size: 20px;
    }
    .submit{
        text-align: center;
    }
</style>