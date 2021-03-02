const db = require('../../database/connect');
const crypto = require('crypto');
module.exports = async (req, res, next) => {
  let { admin, password } = req.body;
  console.log(req.body)
  try {
    if (admin && password) {
      password = crypto.createHash('md5').update(password).digest('hex');
      const sql = `SELECT user_nick_name,user_pwd,user_id FROM mac_user WHERE user_status=1 && user_name='${admin}' && user_pwd='${password}'`;
      const data = await db(sql);
      if (data.length === 1) {
        return res.send({
          status: 200,
          data: {
            id: data[0].user_id,
            name: data[0].user_nick_name,
            cookie: data[0].user_pwd
          }
        })
      }
      next({ status: 401, msg: '账号或密码错误' })
    } else {
      next({ status: 400, msg: '账号或密码不能为空' })
    }
  } catch (error) {
    next({ status: 401, msg: '账号或密码错误' })
  }
}