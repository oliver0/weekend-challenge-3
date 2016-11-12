var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var index = require('./routes/index');
var operations = require('./routes/operations');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/operations', operations);
// Static Files
app.use('/', index);



app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Server is listening on port ' + app.get('port'));
});
