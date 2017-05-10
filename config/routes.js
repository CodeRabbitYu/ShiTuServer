'use strict'

/**
 * router路由，请求网址初始化
 */
 
var Router = require('koa-router');
var App = require('../controllers/app.js');
var getUrl = require('../service/gank.js');
module.exports = function () {
	var router = new Router({
		prefix : '/api'
	})

	router.get('/shitu/getUserToken',App.getUserToken);
	router.get('/shitu/getUpLoadToken',App.getUpLoadToken);
    router.post('/shitu/postWebUrl',App.hasBody,App.postWebUrl);
	router.get('/shitu/getImageDownUrl',App.getImageDownUrl);

	router.get('/shitu/getGankData',App.getGankData);


	return router;
}