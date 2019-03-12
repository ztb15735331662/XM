import originJSONP from 'jsonp'   //引入jsonp

//进行封装并export
export default function jsonp(url, data, option) {
	//  url = xxx.php?user=tom&age=18
	// data 对象   函数调用param(data) 转为字符串
	url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

	return new Promise((resolve, reject) => {
		// url 服务器地址 ,option 包含回调函数callback  data
		originJSONP(url, option, (err, data) => {
			if (!err) {
				resolve(data)
			} else {
				reject(err)
			}
		})
	})
}

//对data进行处理，并encodeURIComponent()进行转码。
//  对象转字符串函数
function param(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		//   encodeURIComponent 地址编码
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	//  &user=tom&age=18&pass=123
	//  slice(1) 等同 substring(1)
	return url ? url.substring(1) : ''
}
