<template>
  <div class="header">
    <div class="navbar clearfix">
      <h1 class="logo pull_left">
        <img src="../../assets/logo.png" alt="华为商城">
      </h1>
      <ul class="user pull_right">
        <li class="username">王争</li>
        <li class="logout">注销</li>
        <li class="login" @click="showLogin">登录</li>
        <li class="cart">购物车</li>
      </ul>
    </div>
    <login v-show="loginFlag"></login>
  </div>
</template>

<script>
  import Login from './login.vue'
  export default {
    data() {
      return {
        loginFlag: false
      }
    },
    created() {},
    methods: {
      showLogin() {
        this.loginFlag = true
      }
    },
    components: {
      Login
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
  }
  .logo {
    height: 80px;
  }
  .logo img {
    margin-top: 15px;
  }
  .user {
    line-height: 80px;
  }
  .user li {
    cursor: pointer;
    display: inline-block;
    margin: 0 10px;
  }
</style>
