const db = require('../../database/connect');
module.exports = async (req, res, next) => {
  const { name, content } = req.body;
  let date = new Date().getTime().toString().slice(0, 10) - 0;
   const sql = `insert into mac_gbook (gbook_name,gbook_time,gbook_content,user_id) values ('${name}',${date},'${content}',${0})`;
  try {
    const data = await db(sql);
    res.send({ status: 200, data: '留言成功' })
  } catch (error) {
    next({ status: 400, msg: '留言失败' })
  }
}