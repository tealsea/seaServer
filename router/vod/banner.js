const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    let { type = '' } = req.query;
    if (type) {
      type = `&&type_id=${type}`;
    }
    let sql = `SELECT vod_id,vod_pic_slide,vod_name,vod_actor,type_id,type_id_1 FROM mac_vod WHERE vod_level=9${type} LIMIT 6`;
    const data = await db(sql);
    res.send({
      status: 200,
      data
    })
  } catch (error) {
    next({ status: 200, msg: '获取banner失败' })
  }
}