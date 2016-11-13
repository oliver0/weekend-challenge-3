var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var index = require('./routes/index');
//var operations = require('./routes/operations');

var add = require('./routes/add');
var subtract = require('./routes/subtract');
var multiply = require('./routes/multiply');
var divide = require('./routes/divide');

app.use(bodyParser.urlencoded({extended: true}));

//app.use('/operations', operations);

app.use('/add', add);
app.use('/subtract', subtract);
app.use('/multiply', multiply);
app.use('/divide', divide);
// Static Files
app.use('/', index);



app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Server is listening on port ' + app.get('port'));
});
