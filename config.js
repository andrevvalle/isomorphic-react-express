var express      = require('express'),
    path         = require('path'),
    favicon      = require('serve-favicon'),
    logger       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser');

module.exports = function(app) {

  // JSX Transpiler
  require("node-jsx").install();

  // view engine setup
  app.set('views', path.join(__dirname, 'lib/_Shared/views'));
  app.set('view engine', 'ejs');

  //app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

};
