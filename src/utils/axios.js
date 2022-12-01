import axios from 'axios'
import { MessageBox,Loading} from 'element-ui'
import { ERRORMESS } from './utils.js'
// 取消未完成的请求列表
var CancelToken = axios.CancelToken;
// 初始化source
var source = CancelToken.source();
// 定义请求列表
var requestList = [];
// request
// 设置请求时间
axios.defaults.timeout =  1000;
axios.interceptors.request.use(config=>{
	// 拼接完整的请求信息
	let configdata = config.data ? JSON.stringify(config.data) : '';
	let requestMess = JSON.stringify(config.url) + configdata;
	// 获取最慢接口请求时间
	
	// 重复请求时，调用取消请求
	if (requestList.includes(requestMess)) {
		// catch 接收信息
		source.cancel('取消重复请求');
	} else {
		requestList.push(requestMess);
		// loading
		Loading.service({
			text: '数据准备中，请骚后'
		})
	}
	return config
},error=>{
	return Promise.reject(error);
})
// response
axios.interceptors.response.use(response=>{
	if (response.status === 200) {
		// 将当前的请求删除
		let configdata = response.config.data ? JSON.stringify(response.config.data) : '';
		let requestMess = JSON.stringify(response.config.url) + configdata;
		requestList.splice(requestList.findIndex(item=>item === requestMess),1);
		if (requestList.length === 0) {
			// 取消loading
			Loading.service().close();
		}
		return response;
	}
},error => {
	// 若响应超时确认是否重新请求
	if (error.message.includes('timeout')) {
		// 非正常code的错误提示
		errorTips('500');
	}
	if (error && error.response) {
		
		// if(error.response.status == 404) {
		// 	// 如果找不到请求的数据，则使用本地的Json数据去渲染
			
		// } else {
		// 	// 非正常code的错误提示
		// 	errorTips(error.response.status)
		// }
		//直接渲染默认页面
		console.log(jsondata)
	}
})
/**
 * 错误码提示
 * @param1 Number code 响应状态码
 */
function errorTips (code) {
	for ( var item of ERRORMESS) {
		if (code.toString() === item.code) {
			MessageBox.confirm(
				`<h4 style="color:red">`+item.msg+`</h4>`,
				{
					type: 'error',
					dangerouslyUseHTMLString:true,
					showCancelButton: false,
					closeOnClickModal: false
				}
			);
			// 取消loading
			Loading.service().close();
			break;
		}
	}
}

// 请求 post/get
 function ReqApi (method,url,params={}) {
	Object.assign(params,{
		method:method,
		url:url,
		timeout: 10000
	})
	return new Promise((resolve,reject)=>{
		axios(params)
		.then(res=>{
			// 成功的
			if (res.data.status == 200) {
				// return res.json();
			}
			resolve(res);

		}).catch((response)=>{
			// 失败的
			reject(response);
		})
	})
}
export default ReqApi