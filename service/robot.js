'use strict'

var qiniu = require('qiniu');
var config = require('../config/config.js')
var uuid = require('uuid');
var http = require('http');
var querystring = require('querystring');
// var Promise = require('bluebird');

// 这里需要导入七牛云的key, 可以改成自己的
// 在个人中心=>密钥管理=>AK/SK
qiniu.conf.ACCESS_KEY = config.qiniu.AK
qiniu.conf.SECRET_KEY = config.qiniu.SK

exports.getGankUrl = function(type,page){
	console.log('getGankUrl');
	console.log(type);
	console.log(page);
 	return new Promise(function (resolve,reject) {
		type = encodeURI(type);
		var url = 'http://gank.io/api/data/'+type+'/20/'+page;
		console.log(url);
		var str = '';

		var req = http.request(url,function(res){
			res.on('data', function (chunk) {
				str += chunk;
			});
			res.on('end',function(){
				var data ;
				try{
					data = JSON.parse(str)
				}catch(e){
					reject(e);
				}
				console.log(data);
				if(data.error === false){
					// console.log(data);
					resolve(data);
					
				}else {
					reject(new Error('请求错误,请稍后重试'));
				}
			});			
		})
		req.end();
	});
}


exports.getGankTypeData = function(url) {
	console.log('getGankTypeData');
	var resData = '';
	http.get(url, function(res){
		console.log(res);
        res.on('data',function(data){
            resData += data;
			// console.log(resData);
			// console.log(data);

			return {
				data : resData,
			};
        });
	});
	
}

exports.getQiniuDownImage = function(){
	console.log('getQiniuDownImage');
	
};

exports.getQiniuToken = function(){
    console.log('getQiniuToken');
	var putPolicy;
	var options = {
		persistentNotifyUrl:config.notify,	
	};
	var key = uuid.v4();
	key += '.jpeg';

	// 如果使用自己的七牛key,需要将下面的PutPolicy换成自己的创建的

	putPolicy = new qiniu.rs.PutPolicy(config.qiniu.imagePutPolicy + ":" + key);
	
    var token = putPolicy.token()
    // console.log(token);
    return {
		key : key,
		token:token,
	};
}