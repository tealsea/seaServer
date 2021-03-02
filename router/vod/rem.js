const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    const { type } = req.query;
    let sql = `SELECT vod_id,vod_name,vod_blurb,vod_actor,vod_lang,vod_remarks,vod_pic,vod_score,vod_class,type_id,type_id_1 FROM mac_vod WHERE vod_level=1 LIMIT 4`;
    if (type) {
      sql = `SELECT vod_id,vod_name,vod_blurb,vod_actor,vod_lang,vod_pic,vod_remarks,vod_score,vod_class,type_id,type_id_1 FROM mac_vod WHERE vod_level=1&&type_id=${type} LIMIT 4`;
    };
    const data = await db(sql);
    res.send({ status: 200, data })
  } catch (error) {
    next({ status: 400, msg: '获取推荐失败' })
  }
}