'use strict'

/**
 *  node程序的入口，初始化整个工程。
 */// 下面这些是初始化Koa和Koa相关的中间件。
var Koa = require('koa');
var logger = require('koa-logger');
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var app = new Koa();

app.keys = ['Shitu_server'];
app.use(logger());
app.use(session(app));
app.use(bodyParser());



var router = require('./config/routes.js')()

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(1234);
console.log('Listen : 1234');