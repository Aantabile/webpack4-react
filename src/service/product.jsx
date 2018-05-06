import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Product{
	getProductList(pageNum) {
		return _mm.request({
			type: 'post',
			url: '/manage/product/list.do',
			data: {
				pageNum: pageNum
			}
		})
	}
}

export default Product;