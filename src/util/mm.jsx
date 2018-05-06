class MUtil{
	request(param) {
		let that = this;
		return new Promise((resolve, reject) => {
			$.ajax({
				type: param.type || 'get',
				url:  param.url || '',
				dataType: param.dataType || 'json',
				data: param.data || null,
				success(res){
					if(res.status === 0) {
						typeof resolve === 'function' && resolve(res.data, res.msg);
					}else if(res.status === 10) {
						//没有的登陆状态，强制登陆页面
						that.doLogin();
					}else{
						typeof reject === 'function' && reject(res.msg || res.data);
					}

				},
				error(err){
					typeof reject === 'function' && reject(err.statusText);
				}
			})
		});
	}

	//跳转登陆
	doLogin() {
		window.location.href = '/login?redirect =' + encodeURIComponent(window.location.pathname);
	}
	//获取URL参数
	getUrlParam(name) {
		//XXX.com?param=123&param1=456，利用正则取出来
		let queryString = window.location.search.split('?')[1] || '',
		    reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
		    result = queryString.match(reg);
		    return result ? decodeURIComponent(result[2]) : null;


	}
	//错误提示
	errorTips(msg) {
		alert(msg || '好像哪里不对');
	}

	setStorage(name, data) {
		let dataType = typeof data;
		//json对象
		if(dataType === 'object') {
			window.localStorage.setItem(name,JSON.stringify(data));
		//基础类型
		}else if(['number', 'string', 'boolean'].indexof(dataType) >= 0){
			window.localStorage.setItem(name, data);

		//其他如函数之类不支持的类型	
		}else{
			alert('该类型不支持本地存储')
		}
	}

	getStorage(name) {
		let data = window.localStorage.getItem(name);
		if(data) {
			return JSON.parse(data);
		}else{
			return '';
		}
	}

	removeStorage(name) {
		window.localStorage.removeItem(name);
	}
} 


export default MUtil;