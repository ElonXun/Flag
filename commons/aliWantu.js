'use strict';

import queryString from 'query-string';
import _ from 'lodash';
import RNFS from 'react-native-fs';

let config = {
   headr: {
      method: 'POST',
      headers: {
      	// 'Content-Length': '81582',
         'Content-Type': 'multipart/form-data; boundary=zcV4qZ1R8f7jaG7hzVlZ_RL9oOdIZWv9tUCoKq',
         //'Accept-Encoding': 'gzip,deflate',
         //'Connection': 'Keep-Alive',
         'User-Agent': 'ALIMEDIASDK_NODEJS_CLOUD',
      	 'Authorization': '',
      }
   },

   api: {
      base: 'http://upload.media.aliyun.com/',
      singleUpload: 'api/proxy/upload',
   },
   
}


config.headr.heades['Authorization'] = 'UPLOAD_AK_TOP MjM4MjAyNjk6SW50Y0ltNWhiV1Z6Y0dGalpWd2lPbHdpWm14aFoyTm9ZWFJjSWl4Y0ltVjRjR2x5WVhScGIyNWNJanBjSWpFME9UVTVOell5TnpnM016QmNJaXhjSW5KbGRIVnlia0p2WkhsY0lqcGNJbnRjSW1ScGNsd2lPaVI3WkdseWZTeGNJbTVoYldWY0lqb2tlMjVoYldWOUxGd2ljMmw2WlZ3aU9pUjdabWxzWlhOcGVtVjlMRndpZDF3aU9pUjdkMmxrZEdoOUxGd2lhRndpT2lSN2FHVnBaMmgwZlNCOVhDSjlJZzpkZWU5ODE5NzFhZWRhMWI5OTY3ZWQyYjYyNWFlZjMyOTY2M2IzYTM3'





//单个文件上传
aliWantu.singleUpload = function() {
    var fileSize = fs.statSync(filePath).size
	var fileName = filePath.split('/').pop()
	// if (fileSize > MAXSIZE) {
	//     throw new Error("file is too large, use multi part upload please")
	//     return
	//  }

	let formData = new FormData()
	// formData.append('md5', md5)
	formData.append('size', fileSize)
	formData.append('dir', dir)
	formData.append('name', name)
	formData.append('content', {uri: filePath,type: 'application/octet-stream', name: 'image.jpg'})


	var options = _.extend(config.header,{
		body: JSON.stringify(formData)
	})
    



	var uri = config.api.base + config.api.singleUpload 

	return fetch(uri, options)
	   .then((response)=> response.json())
      // .then((response)=> Mock.mock(response))
}

module.exports = aliWantu ;





