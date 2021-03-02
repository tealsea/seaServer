const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    const { wd, page = 1 } = req.query;
    const sql = `SELECT vod_id,type_id,type_id_1,vod_name,vod_pic,vod_actor,vod_blurb,vod_remarks,vod_lang,vod_score,vod_year 
    FROM mac_vod where vod_name REGEXP '${wd}'|| vod_actor REGEXP '${wd}' || vod_en REGEXP '${wd}' || vod_class REGEXP '${wd}' limit ${(page - 1) * 20},20`;
    const data = await db(sql);
    res.send({ status: 200, data })
  } catch (error) {
    next({ status: 400, msg: '搜索失败' })
  }
}