const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    const { id } = req.query;
    const sql = `SELECT vod_id,type_id,type_id_1,vod_name,vod_pic,vod_actor,vod_blurb,vod_remarks,
  vod_lang,vod_score,vod_year,vod_play_from,vod_play_url FROM mac_vod WHERE vod_id=${id}`;
    const data = await db(sql);
    res.send({ status: 200, data })
  } catch (error) {
    next({ status: 400, msg: '获取播放地址失败' })
  }
}