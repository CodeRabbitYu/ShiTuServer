var http = require('http');

const getUrl = function (host , path){
    var options = {
			'method' : 'GET',
			'hostname': 'gank.io',
			'path':'/api/data/iOS/2/1',
		}
    var str = ''
 	return new Promise(function (resolve,reject) {
        var req = http.request(options,function(res){
			res.on('data', function (chunk) {
				str += chunk;
				// console.log(JSON.parse(chunk));
			});
			res.on('end',function(){
				var data ;
				try{
					data = JSON.parse(str)
				}catch(e){
					reject(e);
				}
				if(data.error === false){
					console.log('123');
					console.log(data);
					resolve(data);
					
				}else {
					reject(new Error('请求错误,请稍后重试'));
				}
			});
        });
        req.end();
     });
}

module.exports = getUrl;