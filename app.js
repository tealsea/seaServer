const express = require('express');
const app = express();
const port = 4000;
const { vod, msg, user } = require('./router/index');
// 拦截post参数
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// 跨域
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); 
  }
  else {
    next();
  }
});
//关于视频二次路由
app.use('/vod', vod);
app.use('/msg', msg);
app.use('/user', user);
// 错误中间件
app.use((err, req, res, next) => {
  if (err) {
    return res.status(err.status || 500).send(err);
  }
});
app.listen(port, _ => {
  console.log('running to http://localhost:' + port)
})