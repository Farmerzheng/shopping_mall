<template>
    <div class="process">
        <ul class="process_wraper clearfix">
            <li class="process_item address">地址列表</li>
            <li class="process_item order">订单确认</li>
            <li class="process_item payment">支付</li>
            <li class="process_item review">查看订单</li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {}
        },
        components: {}
    }
</script>

<style scoped>
    .process {
        width:1200px;
        margin: 10px auto;
        
    }
    .process_item {
        float: left;
        width: 25%;
        text-align: center;
        color: #333;
        font-size: 18px;
        padding: 5px 0;
        box-sizing: border-box;
    }
    .address {
        background-color: #ca141d;
        color: #fff;
    }
</style>
