<template>
    <div class="cart_list">
      <mall-header></mall-header>
      <router></router>
      <footer></footer>
    </div>
</template>

<script>
    import MallHeader from './base_component/mallheader.vue'
    import Footer from './base_component/footer.vue'
    import Router from './base_component/router.vue'

    import axios from 'axios'
    import scroll_bottom from '../common/js/scroll_bottom'
    import {ERR_OK} from '../api/api.config'
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        data() {
            return {}
        },
        computed: {},
        mounted() {
            // 获取用户的购物车数据
            this.getCartList();
        },
        methods: {
            getCartList() {
                // console.log('请求购物车数据')

                this.$axios.get('/users/cart').then((res) => {
                  console.log(res)
                })

            }
        },
        components:{
            MallHeader,
            Footer,
            Router
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
