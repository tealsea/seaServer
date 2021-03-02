const db = require('../../database/connect');
const user = require('./user');
const crypto = require('crypto');
module.exports = async (req, res, next) => {
  let { admin, password, nick = '大海' } = req.body;
  try {
    if (admin && password) {
      const name = await db(`select user_name from mac_user where user_name='${admin}'`);
      if (name.length === 0) {
        password = crypto.createHash('md5').update(password).digest('hex');
        const sql = `insert into mac_user (user_name,user_pwd,user_nick_name,user_status,group_id) values ('${admin}','${password}','${nick}',1,1)`;
        const data = await db(sql)
        return res.send({
          status: 200,
          data: {
            name: nick,
            id: data.insertId,
            cookie: password
          }
        })
      }
      next({ status: 409, msg: '账号已存在，请更换' })
    } else {
      next({ status: 400, msg: "账号或密码不能为空" })
    }
  } catch (error) {
    next({ status: 400, msg: "创建失败" })
  }
}