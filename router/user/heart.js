const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  const { id, vod_id, operate = 'add' } = req.body;
  if (id && vod_id) {
    let msg = '添加失败';
    let sql = `insert into mac_ulog (user_id,ulog_rid,ulog_type,ulog_mid) values(${id},${vod_id},2,1)`;
    if (operate === 'remove') {
      msg = "删除失败";
      sql = `delete from mac_ulog where user_id='${id}' && ulog_rid='${vod_id}'`;
    }
    try {
      const data = await db(sql);
      res.send(data)
    } catch (error) {
      console.log(error)
      next({ status: 400, msg })
    }
  } else {
    next({ status: 400, msg: '缺少必要参数' })
  }
}