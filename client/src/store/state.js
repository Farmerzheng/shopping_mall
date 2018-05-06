const state = {
    showLogin: false,
    loginState: false,
    username: '',
    // 展示消息提示框的全局方法
    showModel(message, type) {
        this.$message({
            message: message,
            type: type || 'success'
        });
    }

};

export default state;