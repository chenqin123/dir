import request from './baseService';

import Config from '../config';

//封装
//		var configUrl="http://114.55.249.153:8028";
		let configUrl = Config.serviceUrl;
		function makeUrl(url) {
		  return configUrl + url
		}
		
		
		export function getList(data) {
		  return request.get(makeUrl('/shopping/listByPage'),data)
		}
		
		export function login(url,data) {
		  return request.post(makeUrl('/login/LoginByName'),data)
		}

//export function getList(url,data){
//	return request.get(url,data)
//}
//export function getuserInfo(url,data){
//	return request.post(url,data)
//}
