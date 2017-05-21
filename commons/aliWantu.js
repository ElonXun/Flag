'use strict';

import queryString from 'query-string';
import _ from 'lodash';
var aliWantu = {}
var config = {
   headr: {
      method: 'POST',
      headers: {
      	// 'Content-Length': '81582',
         'Content-Type': 'multipart/form-data; boundary=zcV4qZ1R8f7jaG7hzVlZ_RL9oOdIZWv9tUCoKq',
         //'Accept-Encoding': 'gzip,deflate',
         //'Connection': 'Keep-Alive',
         'User-Agent': 'ALIMEDIASDK_NODEJS_CLOUD',
      	 'Authorization': 'MjM4MjAyNjk6ZXlKcGJuTmxjblJQYm14NUlqb2lNQ0lzSW01aGJXVnpjR0ZqWlNJNkltWnNZV2RqYUdGMElpd2laWGh3YVhKaGRHbHZiaUk2SWkweEluMDo5NTZlZWNjNDI0ZGEwZWUwMDA0MzQ4MDczNjI3MzdjMTAwODU1N2I1',
      }
   },

   api: {
      base: 'http://upload.media.aliyun.com/',
      singleUpload: 'api/proxy/upload',
   },
   
}
//'{"dir": ${dir},"name": ${name},"size": ${filesize},"w": ${width},"h": ${height}}'

// config.headr.heades['Authorization'] = 





//单个文件上传
aliWantu.singleUpload = function(filePath,size) {
    console.log('0'+filePath)
    var fileSize = size
	//var fileName = filePath.split('/').pop()
    var dir = '/profile/avatar'
    var fileName =  'id'+'-'+ Date.now() + '.' + filePath.split('/').pop().split('.').pop()

    console.log(fileSize)

	var formData = new FormData()
	// formData.append('md5', md5)
	formData.append('size', fileSize)
	formData.append('dir', dir)
	formData.append('name', fileName)
	formData.append('content', {uri: filePath,type: 'application/octet-stream', name: fileName})


	// var options = _.extend(config.header,{
	// 	body: JSON.stringify(formData)
	// })
	var options = {}
	options.headers = {
	   'Content-Type': 'multipart/form-data; boundary=zcV4qZ1R8f7jaG7hzVlZ_RL9oOdIZWv9tUCoKq',
         //'Accept-Encoding': 'gzip,deflate',
         //'Connection': 'Keep-Alive',
         'User-Agent': 'ALIMEDIASDK_NODEJS_CLOUD',
      	 'Authorization': 'UPLOAD_AK_TOP MjM4MjAyNjk6ZXlKdVlXMWxjM0JoWTJVaU9pSm1iR0ZuWTJoaGRDSXNJbVY0Y0dseVlYUnBiMjRpT2pFME9UVTVPRGczT1RnNU16RXNJbWx1YzJWeWRFOXViSGtpT2pCOTpjZmUyOTYwMDZkNWQ3YmU5MzNkY2M2Njk4Y2ZiNzJmZmU1ZDI2ODMz',	 
	}
    options.body = formData;
    options.method = 'post';
	var uri = config.api.base + config.api.singleUpload 

	return fetch(uri,options).then((response)=> response.json())
      // .then((response)=> Mock.mock(response))
}

module.exports = aliWantu ;





