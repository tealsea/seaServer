const express = require('express');
const msg = express.Router();
// 获取资讯
msg.get('/all', require('./all'))
module.exports = msg