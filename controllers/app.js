'use strict'

/**
 * 这是controller的入口，一些中间件都可以写在里面
 */

var robot = require('../service/robot.js');
var uuid = require('uuid');
var Promise = require('bluebird');
var URL = require('url');
var config = require('../config/config.js');

// gank数据
exports.listData = async (ctx, next) => {
    console.log('listData');

    var url = URL.parse(ctx.request.url,true);
    // console.log(url);
    // console.log(url.href); //取到的值是：http://localhost:8888/select?aa=001&bb=002
    // console.log(url.protocol); //取到的值是：http: 
    // console.log( url.hostname);//取到的值是：locahost
    // console.log(url.host);//取到的值是：localhost:8888
    // console.log(url.port);//取到的值是：8888
    // console.log(url.path);//取到的值是：/select?aa=001&bb=002
    // console.log(url.hash);//取到的值是：null 
    // console.log(url.query);// 取到的值是：aa=001
    var query = url.query;
    // console.log(query);
    var type = query.type;
    var count = query.count;
    var page = query.page;

    const data = await robot.getGankUrl(type,count,page);

    ctx.body = {
        success:true,
        data : data,
    }
}

// 获取图片下载地址 
// 暂时没有使用这个接口
exports.getImageDownUrl = async (ctx, next) => {
    console.log('getImageDownUrl');

    var data = robot.getQiniuDownImage()  
    ctx.body = {
        success:true,
        data: data
    }
}

// 获取用户Token
exports.userToken = async (ctx, next) => {
    console.log('userToken');
    var token = uuid.v4();
    // console.log(token);
    ctx.body = {
        success:true,
        token:token
    }

}

// 判断是否存在body
exports.hasBody = async (ctx, next) => {
    console.log('hasBody');
    
	// 通过request的获取body，如果request.body为空，那就将body赋空值
	let body = ctx.request.header.body || {}
    // console.log(ctx.request);
	// 判断body的长度是不是等于0
	if(!body || Object.keys(body).length === 0){
		ctx.body = {
			success:false,
			err : '没有body！'
		}
		return next;
	}
	
	await next()
}

// 获取上传图片Token
exports.upLoadToken = async (ctx, next) => {
    console.log('upLoadToken');
    // console.log(ctx.request);

    let data = robot.getQiniuToken();
    console.log('getQiniuToken');
    // console.log(data); 
    ctx.body = {
        success:true,
        data: data
    }
}

// 登录
exports.login = async (ctx, next) => {
    console.log('login');
    var body = ctx.request.header.body;

    console.log(body);


    ctx.body = {
        success:true,
        data: 'success'
    }

}

// webViewURL
exports.detailURL = async (ctx, next) => {
    console.log('detailURL');
    // console.log(ctx.request);

    var body = ctx.request.header.body;

    var token = JSON.parse(body).token;

    
    // 如果使用自己的七牛key,需要将下面的域名换成自己的

    var imageURL = 'http://'+config.qiniu.imageDomainName+'/'+token;

    // console.log(imageURL);    
 
    var webURL = 'http://image.baidu.com/wiseshitu?' +
   'guess=1&uptype=upload_wise&queryImageUrl=' +
    imageURL +'&querySign=&simid='

    // console.log(webViewURL);
    ctx.body = {
            success:true,
            data: {
                webURL:webURL,
                imageURL:imageURL,
            }
        }

}
