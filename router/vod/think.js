const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  const { wd } = req.query;
  if (wd) {
    try {
      const sql = `select vod_id,vod_name from mac_vod where vod_name REGEXP '${wd}' limit 10`;
      const data = await db(sql);
      res.send({ status: 200, data })
    } catch (error) {
      next({ status: 400, msg: '联想词出现未知错误' })
    }
    return
  }
  next({ status: 400, msg: '联想词不能为空' })
}