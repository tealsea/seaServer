const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    let { id = 1, cate = '' } = req.query;
    if (cate) {
      cate = `&&vod_class='${cate}'`
    }
    const sql = `SELECT vod_id,type_id,type_id_1,vod_name,vod_pic,vod_actor,vod_blurb,vod_remarks,vod_lang,vod_score,vod_year 
  FROM mac_vod WHERE type_id=${id}${cate} limit 6`
    const data = await db(sql);
    res.send({ status: 200, data })
  } catch (error) {
    next({ status: 400, msg: '获取播放地址失败' })
  }
}