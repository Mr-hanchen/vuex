var express = require('express');
var router = express.Router();

// 导入mongodb数据库操作
const db = require('../modules/db.js');
// 实例
const MongoClient = db.MongoClient;
const uri = db.uri;
const dbName = db.dbName;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/insertUser', (req, res, next) => {

})

router.post('/login', (req, res, next) => {
  let account = req.body.account;
  let password = req.body.password;

  MongoClient.connect(uri, (error, client) => {
    if (error) {
      return res.json({ code: 201, message: error })
    }

    client.db(dbName).collection('users', (error, users) => {
      if (error) {
        return res.json({ code: 201, message: error })
      }
      users.find({ account, password })
        .toArray()
        .then(result => {
          console.log('result: ', result);
          if (result.length === 1) {
            res.json({ code: 200, message: '成功', user: result[0] });
          } else {
            if (result.length === 0) {
              return res.json({ code: 201, message: '账号或密码有误！' });
            } else {
              return res.json({ code: 201, message: '账号有重复，请联系数据库管理员！' });
            }
          }
        }).catch(err => {
          return res.json({ code: 201, message: err })
        })
    });

  })
})

module.exports = router;
