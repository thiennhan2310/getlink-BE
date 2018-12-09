var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json(
    new Array(15).fill(1).map((item,idx)=>({id:idx,title:`Card ${idx}`,content:`Content ${idx}`,thumbnail:"https://phanquanghung.com/wp-content/uploads/2017/11/thumbnail-video-youtube.jpg"}))
  )
});

module.exports = router;
