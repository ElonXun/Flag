'use strict';

import queryString from 'query-string';
import _ from 'lodash';
var aliWantu = {}
var config = {
   api: {
      base: 'http://upload.media.aliyun.com/',
      singleUpload: 'api/proxy/upload',
   },
   
}

aliWantu.getBody = function(filePath,size,dir,fileName) {
   var body = new FormData()
   // formData.append('md5', md5)
   body.append('size', size)
   body.append('dir', dir)
   body.append('name', fileName)
   body.append('content', {uri: filePath,type: 'application/octet-stream', name: fileName})

   return body
}


//单个文件上传
aliWantu.singleUpload = function(token,filePath,size,dir,fileName) {
   // var dir = '/profile/avatar'
  // fileName =  'id'+'-'+ Date.now() + '.' + filePath.split('.').pop()


	var formData = new FormData()
	// formData.append('md5', md5)
	formData.append('size', size)
	formData.append('dir', dir)
	formData.append('name', fileName)
	formData.append('content', {uri: filePath,type: 'application/octet-stream', name: fileName})

	var options = {}

	options.headers = {
	     'Content-Type': 'multipart/form-data; boundary=zcV4qZ1R8f7jaG7hzVlZ_RL9oOdIZWv9tUCoKq',
         'User-Agent': 'ALIMEDIASDK_NODEJS_CLOUD',
      	 'Authorization': token,	 
	}
    options.body = formData;
    options.method = 'post';
	var uri = config.api.base + config.api.singleUpload 
    console.log('开始 fetch')
	return fetch(uri,options).then((response)=> response.json())
	//return options
}

module.exports = aliWantu ;





