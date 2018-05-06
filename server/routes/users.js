var express = require('express');
var router = express.Router();

// 获取用户模型
let User = require("../model/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// 用户校验接口
router.post('/checkLogin', function(req, res, next) {

    // 判断用户是否登录
    if (req.cookies.userName) {
        res.json({
            status: '0',
            msg: '用户已经登录',
            result: {
                userName: req.cookies.userName
            }
        })
    } else {
        res.json({
            status: '1',
            msg: '用户未登录',
            result: '用户未登录'
        })
    }

})

// 登录接口
router.post('/login', function(req, res, next) {
    // console.log(req)
    let param = {
        userName: req.body.params.username,
        userPwd: req.body.params.password
    }
    let findUserPromist = new Promise((resolve, reject) => {
        User.findOne(param, function(err, doc) {

            if (doc == null) {
                res.json({
                    status: '1',
                    msg: '用户名不存在'
                })
            } else {

                // 向前端发送cookie
                res.cookie('userId', doc.userId, {
                    path: '/',
                    maxAge: 1000 * 60 * 60 * 60 //cookie在前端的存储时间
                })
                res.cookie('userName', doc.userName, {
                    path: '/',
                    maxAge: 1000 * 60 * 60 * 60 //cookie在前端的存储时间
                })

                // 返回前端用户名信息
                res.json({
                    status: '0',
                    msg: '登录成功',
                    result: {
                        userName: doc.userName
                    }

                })
            }

        })
    })


});

// 退出接口
router.post('/logout', function(req, res, next) {

    // 将浏览器端的cookie清空
    res.cookie('userId', '', {
        path: '/',
        maxAge: -1
    })
    res.cookie('userName', '', {
            path: '/',
            maxAge: -1
        })
        //返回浏览器端退出成功信息    
    res.json({
        status: '0',
        msg: '退出成功',
        result: '退出成功'
    })

})

// 查询当前用户购物车数据
router.get('/cart', function(req, res, next) {

    // 查找数据库中的购物车列表信息
    let param = { userId: req.cookies.userId };

    User.findOne(param, function(err, doc) {
        console.log(err, doc)
        if (doc) {
            res.json({
                status: '0',
                msg: '成功',
                result: doc.cartList
            })
        } else {
            res.json({
                status: '1',
                msg: '失败',
                result: '失败'
            })
        }

    })



})



module.exports = router;