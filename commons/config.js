'use strict';

module.exports = {
	header: {
		method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
	},
	
	api: {
		base: 'http://192.168.0.104:3000/',
		test: 'http://rapapi.org/mockjs/15841/',
		signUpCode: 'api/v1/u/signUpCode',
		verifyCode: 'api/v1/u/verifyCode',
		setPassword: 'api/v1/u/setPassword',
		verifyLogin: 'api/v1/u/verifyLogin',

	}
}