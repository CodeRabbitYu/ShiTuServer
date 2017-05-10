'use strict'

/**
 * 这是controller的入口，一些中间件都可以写在里面
 */

var robot = require('../service/robot.js');
var uuid = require('uuid');
var Promise = require('bluebird');
var URL = require('url');


exports.getGankData = async (ctx, next) => {
    console.log('getGankData');

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
    var type = query.type;

    var page = query.page;

    const data = await robot.getGankUrl(type,page);

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
exports.getUserToken = async (ctx, next) => {
    console.log('getUserToken');
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
			err : '是不是漏掉什么了？'
		}
		return next;
	}
	
	await next()
}

// 获取上传图片Token
exports.getUpLoadToken = async (ctx, next) => {
    console.log('getUpLoadToken');
    // console.log(ctx.request);

    let data = robot.getQiniuToken()    
    ctx.body = {
        success:true,
        data: data
    }
}

exports.postWebUrl = async (ctx, next) => {
    var body = ctx.request.header.body;

    console.log('getWebUrl');

    var token = JSON.parse(body).token;

    
    // 如果使用自己的七牛key,需要将下面的域名换成自己的

    var imageURL = 'http://oppuvsot2.bkt.clouddn.com/' + token;
    // var webViewURL = 'http:image.baidu.com/n/pc_search?rn=10&appid=0&tag=1&isMobile=1&queryImageUrl='
 // + uri + '&querySign=&fromProduct=&productBackUrl=&fm=&uptype=plug_in'

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
