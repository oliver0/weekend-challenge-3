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

  switch(type){
    case 'add':
      result['result'] = x + y;
      break;
    case 'subtract':
      result['result'] = x - y;
      break;
    case 'multiply':
      result['result'] = x * y;
      break;
    case 'divide':
      result['result'] = x / y;
      break;
    default:
      result['result'] = 0;
  }
  res.sendStatus(201);
});

module.exports = router;
