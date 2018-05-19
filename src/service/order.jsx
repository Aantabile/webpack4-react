import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Product{
	getOrderList(param) {
		let url  = '',
		    data = {};
		if(param.listType === 'list') {
			url = '/manage/order/list.do';
			data.pageNum = param.pageNum;
		}else if(param.listType === 'search') {
			url = '/manage/order/search.do';
			data.pageNum = param.pageNum;
			data.orderNo = param.orderNo
		}
		return _mm.request({
			type: 'post',
			url: url,
			data: data
		})
	}
	getOrderDetail(num) {
	    return _mm.request({
	        type: 'post',
	        url: '/manage/order/detail.do',
	        data: {
	            orderNo : num 
	        }
	    })
	}
   
}

export default Product;