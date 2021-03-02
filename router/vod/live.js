const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    let sql = `SELECT * FROM mac_live`;
    const data = await db(sql);
    res.send({
      status: 200,
      data
    })
  } catch (error) {
    next({ status: 200, msg: '获取直播失败' })
  }
}
