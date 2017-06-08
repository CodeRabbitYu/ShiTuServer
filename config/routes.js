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

	router.get('/userToken',App.userToken);

	router.get('/qiniu/upLoadToken',App.upLoadToken);

    router.post('/shitu/detailURL',App.hasBody,App.detailURL);

	router.get('/gank/listData',App.listData);

	router.post('/user/login',App.hasBody,App.login);


	// 获取图片下载地址  暂时没用到，以后可能将历史记录用接口返回
	router.get('/shitu/getImageDownUrl',App.getImageDownUrl);
	return router;
}