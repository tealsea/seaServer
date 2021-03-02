const mysql = require('mysql');
const db = require('./db');
const con = mysql.createConnection(db);
module.exports = function sql(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })

  })
}