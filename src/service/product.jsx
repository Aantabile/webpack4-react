import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Product{
	getProductList(param) {
		let url  = '',
		    data = {};
		if(param.listType === 'list') {
			url = '/manage/product/list.do';
			data.pageNum = param.pageNum;
		}else if(param.listType === 'search') {
			url = '/manage/product/search.do';
			data.pageNum = param.pageNum;
			data[param.searchType] = param.keyword
		}
		return _mm.request({
			type: 'post',
			url: url,
			data: data
		})
	}

	setProductStatus(productInfo) {
		return _mm.request({
			type: 'post',
			url: '/manage/product/set_sale_status.do',
			data: productInfo
		})
	}
}

export default Product;