var express = require('express');
var router = express.Router();

var numberObject;
var result = {};

router.get('/', function(req, res){
  console.log('get success');

  res.send(result);
});

router.post('/', function(req, res){
  numberObject = req.body;
  var x = parseFloat(numberObject.x);
  var y = parseFloat(numberObject.y);

  console.log(typeof numberObject.x)
  switch(numberObject.type){
    case 'Add':
      result['result'] = x + y;
      break;
    case 'Subtract':
      result['result'] = x - y;
      break;
    case 'Multiply':
      result['result'] = x * y;
      break;
    case 'Divide':
      result['result'] = x / y;
      break;
    default:
      result['result'] = -1;
  }
  res.sendStatus(201);
});





module.exports = router;
