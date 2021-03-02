const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  try {
    const { page = 1 } = req.query;
    const sql = `SELECT art_id,art_name,art_pic,art_blurb,art_score_all,art_content FROM mac_art limit ${(page - 1) * 20},20`;
    const data = await db(sql);
    res.send({
      status: 200,
      data
    })
  } catch (error) {
    next({ status: 400, msg: '资讯获取失败' })
  }
}