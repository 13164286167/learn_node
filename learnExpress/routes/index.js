var express = require('express');
var dbConfig = require('../utils/dbConfig')
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.cid)
  var sql = `SELECT * FROM user_info WHERE cid=${req.query.cid}`
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log("连接出错")
      return;
    }
    console.log(data.data)
    res.send({
      data:data[0]
    })  
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack)
  // res.render('index', { title: 'Express' });
});



module.exports = router;
