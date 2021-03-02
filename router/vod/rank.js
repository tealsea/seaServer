const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    const { id = 1 } = req.query;
    const sql = `SELECT type_id,vod_pic,vod_name,vod_year,vod_lang,vod_area,vod_remarks FROM mac_vod WHERE type_id=${id} ORDER BY vod_hits_week desc LIMIT 10`;
    const data = await db(sql);
    res.send({
      status: 200,
      data
    })
  } catch (error) {
    next({ status: 400, msg: '获取榜单失败' })
  }
}