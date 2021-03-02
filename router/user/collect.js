const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  const { id } = req.query;
  try {
    if (id) {
      const sql = `select vod_id,type_id,type_id_1,vod_name,vod_pic,vod_actor,vod_blurb,vod_remarks,vod_lang,vod_score,vod_year from mac_vod where vod_id= ANY (SELECT ulog_rid FROM mac_ulog where user_id=${id} && ulog_type=2)`;
      const data = await db(sql);
      return res.send({ status: 200, data })
    }
    next({ status: 400, msg: '缺少必要的参数' });
  } catch (error) {
    next({ status: 400, msg: '查询收藏数据失败' });
  }
}