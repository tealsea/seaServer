const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    const { id } = req.query;
    const sql = 'UPDATE mac_vod set vod_up=vod_up+1 where vod_id=' + id
    const data = await db(sql);
    res.send({
      status: 200,
      data
    })
  } catch (error) {
    next({ status: 400, msg: '点赞失败' })
  }
}