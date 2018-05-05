var express = require('express');
var router = express.Router();

// 获取用户模型
let User = require("../model/user");
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


// 登录接口
router.post('/login', function(req, res, next) {
    console.log(req)
    let param = {
        userName: req.body.params.username,
        userPwd: req.body.params.password
    }
    let findUserPromist = new Promise((resolve, reject) => {
        User.findOne(param, function(err, doc) {
            if (err) {
                res.json({
                    status: '1',
                    msg: err.message
                })
            } else {

                // 向前端发送cookie
                res.cookie('userId', doc.userId, {
                    path: '/',
                    maxAge: 1000 * 60 * 60 //cookie在前端的存储时间
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

    //返回浏览器端退出成功信息    
    res.json({
        status: '0',
        msg: '退出成功',
        result: '退出成功'
    })

})




module.exports = router;