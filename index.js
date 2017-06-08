'use strict'

/**
 *  node程序的入口，初始化整个工程。
 */// 下面这些是初始化Koa和Koa相关的中间件。
var Koa = require('koa');
var logger = require('koa-logger');
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var app = new Koa();
var AV = require('leanengine');
var config = require('./config/config.js');



app.keys = ['Shitu_server'];
app.use(logger());
app.use(session(app));
app.use(bodyParser());



// app.listen(process.env.LEANCLOUD_APP_PORT);


var router = require('./config/routes.js')()

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
console.log('Listen : 3000');