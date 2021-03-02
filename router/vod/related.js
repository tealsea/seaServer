const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    const { id, year, lang } = req.query;
    const sql = `SELECT vod_id,type_id,type_id_1,vod_name,vod_pic,vod_actor,vod_blurb,vod_remarks,vod_lang,vod_score,vod_year 
  FROM mac_vod WHERE type_id=${id}&&vod_lang='${lang}'&&vod_year=${year} limit 6`;
    const data = await db(sql);
    res.send(data)
  } catch (error) {
    next({ status: 400, msg: '获取相关推荐失败' })
  }
}