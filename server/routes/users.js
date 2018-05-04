var express = require('express');
var router = express.Router();

// 获取用户模型
let User = require("../model/user");
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

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
                res.json({
                    status: '0',
                    msg: '登录成功',
                    result: {
                        userName: doc.userName,
                        password: doc.userPwd
                    }

                })
            }

        })
    })


});

module.exports = router;