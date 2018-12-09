var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/',passport.authenticate('bearer', { session: false }),function(req, res, next) {
  res.json(
    new Array(15).fill(1).map((item,idx)=>({id:idx,title:`Card ${idx}`,content:`Content ${idx}`,thumbnail:"https://phanquanghung.com/wp-content/uploads/2017/11/thumbnail-video-youtube.jpg"}))
  )
});
router.get('/:id',passport.authenticate('bearer', { session: false }), function(req, res, next) {
  const id = req.params.id;
  res.json(
    {id,title:`Card ${id}`,content:`Content ${id}`,thumbnail:"https://phanquanghung.com/wp-content/uploads/2017/11/thumbnail-video-youtube.jpg"}
  )
});

module.exports = router;
