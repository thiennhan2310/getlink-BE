var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const secret = "Getlink secrets";
router.post('/login', function(req, res, next) {
  const token = jwt.sign({ id: 1 }, secret, {
    expiresIn: 86400 // expires in 24 hours
  });

  res.json(
    {
      token
    }
  )
});
module.exports = router;
