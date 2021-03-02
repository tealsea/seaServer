const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    const query = req.query;
    let val = ''
    const { page = 0, id = 1, limit = 50 } = query;
    for (let v in query) {
      const d = query[v];
      if (d && v !== 'limit' && v !== 'id' && v !== 'page') {
        val += `&&vod_${v}='${d}'`
      }
    }
    const sql = `SELECT vod_id,type_id,type_id_1,vod_name,vod_pic,vod_actor,vod_blurb,vod_remarks,vod_lang,vod_score,vod_year FROM mac_vod WHERE type_id=${id}` + val + ` LIMIT ${page * limit},${limit}`;
    const data = await db(sql);
    res.send({ status: 200, data })
  } catch (error) {
    next({ status: 400, msg: '分类查询失败' })
  }
}