var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var cards = require('./routes/cards');
var lists = require('./routes/lists');
var projects = require('./routes/projects');
var checklists = require('./routes/checklists');
var contexts = require('./routes/contexts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/cards', cards);
app.use('/lists', lists);
app.use('/projects', projects);
app.use('/checklists', checklists);
app.use('/contexts', contexts);

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})

module.exports = app;
