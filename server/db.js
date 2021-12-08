const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname + '/db.sqlite');

db.query = function(sql, params) {
  if (params && !Array.isArray(params)) {
    throw new Error('second parameter must be an array');
  }

  return new Promise((resolve, reject) => {
    db.all(sql, params || [], function(err, rows) {
      if (err) {
        reject(err);
      } else {
        resolve({rows});
      }
    });
  });
};

module.exports = db;
