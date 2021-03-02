const express = require('express');
const user = express.Router();
// 登录
user.post('/login', require('./login'));
// 注册
user.post('/register', require('./register'));
// 添加删除收藏
user.post('/heart', require('./heart'));
// 查询收藏的数据
user.get('/collect', require('./collect.js'));
// 获取求片留言
user.get('/gbook', require('./gbook.js'));
//写入求片留言
user.post('/crgb', require('./creatGbook'));
module.exports = user; 