const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    const sql = 'select * from mac_gbook';
    const data = await db(sql);
    res.send({ status: 200, data: data.reverse() })
  } catch (error) {
    next({ status: 400, msg: '请求求片留言失败' })
  }
}