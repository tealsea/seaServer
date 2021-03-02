const express = require('express');
// 创建路由
const vod = express.Router();
// 获取推荐轮播数据
vod.get('/banner', require('./banner'));
// 获取搜索数据
vod.get('/search', require('./search'));
// 获取推荐
vod.get('/rem', require('./rem'));
//获取分类选择数据
vod.get('/cate', require('./cate'));
// 获取分类
vod.get('/class', require('./class'))
// 获取相关推荐数据
vod.get('/related', require('./related'));
// 获取播放源
vod.get('/video', require('./video'));
//获取首屏数据
vod.get('/main', require('./main'));
// 点赞
vod.get('/give', require('./give'));
// 获取榜单排行
vod.get('/rank', require('./rank'));
// 获取联想词
vod.get('/think', require('./think'));
// 获取直播
vod.get('/live',require('./live'));
// 默认导出
module.exports = vod;
