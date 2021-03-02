const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    const sql = 'SELECT type_id,type_name FROM mac_type';
    const data = await db(sql);
    res.send({ status: 200, data })
  } catch (error) {
    next({ status: 400, msg: '分类获取失败' })
  }
}