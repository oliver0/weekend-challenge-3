var express = require('express');
var router = express.Router();

var result = {};

router.get('/', function(req, res){
  res.send(result);
});

router.post('/', function(req, res){
  var {x, y, type} = req.body;
  x = parseFloat(x);
  y = parseFloat(y);

  result['result'] = x / y;
  res.sendStatus(201);

});

module.exports = router;
