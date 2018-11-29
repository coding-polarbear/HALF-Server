var express = require('express');
var router = express.Router();
const userModel = require('../models/userModel')
const config = require('../config/config');
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/add_user', (req, res) => {
    console.log(req.query.id);
    userModel.findOne({id : req.query.id}, (user, err) => {
        if(user) {
            console.log("asdf");
            res.status(203).json({
                message : '이미 존재하는 디바이스 입니다.'
            });
        } else {
            var newUser = new userModel({
                id : req.query.id,
                name : req.query.name,
                rpi_ip : req.query.rpi_ip,
                hmd_ip : req.query.hmd_ip
            });
            newUser.save();
            res.status(200).json({
                message : '계정 생성 성공!'
            });
        }
    });
});

router.get('/login',  (req, res) => {
    userModel.findOne({id : req.body.id}, (user, err) => {
        if(err) {
            res.send('알 수 없는 오류가 발생하였습니다.');
        }
        if(!user) {
            res.send('이미 존재하는 아이디입니다.')
        } else {
            if(user.id === req.body.id && user.password === req.boy.password) {
                let payload = { name: user.name, id: user.id, email : user.email };
                res.cookie('token', jwt.sign(payload, config.salt, { algorithm: config.jwtAlgorithm }), {});
                res.send("Success")
            }
        }
    })
});
module.exports = router;
