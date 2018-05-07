<template>
    <div class="cart_list">
        <mall-header></mall-header>
        <router>
            <span slot='secondary_routing' class="router">购物车列表</span>
        </router>
        <div class="list">
            <div class="cart_title clearfix">
                <span>商品</span>
                <span>价格</span>
                <span>数量</span>
                <span>总价</span>
                <span>编辑</span>
            </div>
            <ul>
                <li class="cart_item" v-for='item in cartList '>
                    <span class="clearfix">
                                                                    <input type="checkbox" :checked="item.checked==1" class='check' @click='changeProduct("check",item)'>
                                                                    <a href="" class='img_link'>
                                                                        <img class="cart_image" v-bind:src='"/images/"+item.productImage'/>
                                                                        <span class='product_name'>{{item.productName}}</span>
                    </a>
                    </span>
                    <span>{{item.salePrice|currency('￥')}}</span>
                    <span class="cart_item_num">
                                                                                                <button @click='changeProduct("minus",item)'>-</button>
                                                                                                <span>{{item.productNum}}</span>
                    <button @click='changeProduct("plus",item)'>+</button>
                    </span>
                    <span class="total_price">{{item.productNum*item.salePrice|currency('￥')}}</span>
                    <span class='delete' @click='deleteGoods(item.productId)'>
                                                                                                删除
                                                                                            </span>
                </li>
            </ul>
        </div>
        <div class="total clearfix">
            <span class="check_wrap">
                                                <input type="checkbox" class="check_all" @click='checkAll' :checked='checkAllFlag'>
                                                <span>全选</span>
            </span>
            <span class="check_wrap">
                                                <input type="checkbox" class="check_all" @click='deselectAll' :checked='!checkAllFlag'>
                                                <span>取消全选</span>
            </span>
            <span class="total_price">
                                                <span> 总价</span>
            <span>{{totalPrice|currency('￥')}}</span>
            </span>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import MallHeader from './base_component/mallheader.vue'
    import MyFooter from './base_component/footer.vue'
    import Router from './base_component/router.vue'
    import axios from 'axios'
    import scroll_bottom from '../common/js/scroll_bottom'

    // 导入局部过滤器
    // import {currency} from '../common/js/currency'

    import {
        ERR_OK
    } from '../api/api.config'
    import {
        mapGetters,
        mapMutations
    } from 'vuex';
    export default {
        data() {
            return {
                cartList: []
            }
        },
        // filters:{
            // 定义价格过滤器
        //    currency:currency
        // },
        computed: {
            // 计算属性，复选框是否被选中
            checkAllFlag() {
                return this.cartList.length == this.checkedNum
            },
            // 计算属性，选中的商品总量
            checkedNum() {
                let i = 0;
                this.cartList.forEach(function(item) {
                    item.checked == 1 ? i++ : '';
                })
                return i;
            },
            // 计算属性，总价
            totalPrice() {
                let total_price = 0;
                this.cartList.forEach(function(item) {
                    // 如果商品被选中，加入总价
                    if (item.checked == '1') {
                        total_price += item.salePrice * item.productNum;
                    }
                })
                // console.log(total_price);
                return total_price;
            },
            ...mapGetters([
                'showMessageBox'
            ])
        },
        mounted() {
            // 获取用户的购物车数据
            this.getCartList();
        },
        methods: {
            deselectAll() {
                this.$axios.get('/users/checkAll', {
                    params: {
                        checkAllFlag: false
                    }
                }).then((res) => {
                    // console.log(res);
                    this.getCartList();
                    // console.log(this.checkAllFlag, this.cartList)
                })
            },
            checkAll() {
                this.$axios.get('/users/checkAll', {
                    params: {
                        checkAllFlag: true
                    }
                }).then((res) => {
                    // console.log(res);
                    this.getCartList();
                    console.log(this.checkAllFlag)
                })
            },
            getCartList() {
                // console.log('请求购物车数据')
                this.$axios.get('/users/cart').then((res) => {
                    // console.log(res.data.result)
                    this.cartList = res.data.result
                })
            },
            deleteGoods(productId) {
                let self = this;
                // 弹出提示框
                this.showMessageBox('确定删除此商品', 'success', function() {
                    // 删除成功后的回调
                    self.$axios.get('/users/delete', {
                        params: {
                            productId: productId
                        }
                    }).then((res) => {
                        // console.log(res)
                        if (res.data.status == ERR_OK) {
                            // 删除成功，重新请求数据
                            self.getCartList();
                        }
                    })
                })
            },
            changeProduct(type, item) {
                item.productNum = parseInt(item.productNum);
                if (type == 'minus') {
                    if (item.productNum == 1) return;
                    item.productNum -= 1;
                } else if (type == 'plus') {
                    item.productNum += 1;
                } else {
                    item.checked == 1 ? item.checked = 0 : item.checked = 1;
                }
                //  console.log(type,item.productNum)
                this.$axios.get('/users/editCartList', {
                    params: {
                        productId: item.productId,
                        productNum: item.productNum,
                        checked: item.checked
                    }
                }).then((res) => {
                    if (res.data.status == ERR_OK) {
                        // 删除成功，重新请求数据
                        // console.log(res);
                    } else {
                        // console.log(res);
                    }
                })
            }
        },
        components: {
            MallHeader,
            MyFooter,
            Router
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .router {
        color: #D8565C;
    }
    .cart_title span {
        width: 20%;
        float: left;
        font-size: 20px;
        text-align: center;
        padding: 10px 0;
    }
    .cart_item {
        font-size: 0;
        text-align: center;
        margin: 10px 0;
        border-bottom: 1px solid #eee;
    }
    .cart_item span {
        font-size: 18px;
        vertical-align: middle;
        width: 20%;
        display: inline-block;
    }
    .cart_item img {
        vertical-align: middle
    }
    .cart_image {
        width: 200px;
        height: 150px;
    }
    .cart_item_num button {
        width: 30px;
        height: 30px;
        font-size: 20px;
    }
    .cart_item .check {
        float: left;
        vertical-align: middle;
        display: inline-block;
        margin: 70px 0 0 20px;
        width: 20px;
        height: 20px;
    }
    .cart_item .img_link {
        width: 80%;
        display: inline-block;
        vertical-align: middle;
        float: right
    }
    .cart_item .product_name {
        display: block;
        text-align: center;
        width: 100%;
        padding: 10px 0
    }
    .delete {
        color: #D8565C;
        cursor: pointer;
    }
    .total {
        padding: 20px 20px;
        font-size: 20px;
    }
    .total .check_wrap {
        float: left
    }
    .total .check_all {
        width: 20px;
        height: 20px;
    }
    .total .total_price {
        float: right;
        margin-right: 100px;
    }
</style>
