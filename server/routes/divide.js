var express = require('express');
var router = express.Router();

var result = {};

router.get('/', function(req, res){
  res.send(result);
});

router.post('/', function(req, res){
  x = parseFloat(req.body.x);
  y = parseFloat(req.body.y);

  result['result'] = x / y;
  res.sendStatus(201);

});

module.exports = router;
