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

    getProduct(id) {
        return _mm.request({
            type: 'post',
            url: '/manage/product/detail.do',
            data: {
                productId: id || 0
            }
        })
    }
	setProductStatus(productInfo) {
		return _mm.request({
			type: 'post',
			url: '/manage/product/set_sale_status.do',
			data: productInfo
		})
	}

    //检查表单数据
    checkProduct(product) {
    	console.log(product)
    	let result = {
    		status: true,
    		msg: '验证通过'
    	}

    	if(typeof product.name !== 'string' || product.name.length === 0){
    		return {
    			status: false,
    			msg: '商品名称不能为空!'
    		}
    	}

    	if(typeof product.subtitle !== 'string' || product.subtitle.length === 0){
    		return {
    			status: false,
    			msg: '商品描述不能为空!'
    		}
    	}

    	if(typeof product.price !== 'number' || product.price.length < 0){
    		return {
    			status: false,
    			msg: '请输入正确的商品价格！'
    		}
    	}

    	if(typeof product.stock !== 'number' || product.stock.length < 0){
    		return {
    			status: false,
    			msg: '请输入正确的商品库存！'
    		}
    	}

    	if(typeof product.categoryId !== 'number' || product.categoryId.length < 0){
    		return {
    			status: false,
    			msg: '请选择商品类！'
    		}
    	}

    	return result;
    }

    saveProduct(product) {
    	return _mm.request({
    		type: 'post',
    		url: '/manage/product/save.do',
    		data: product
    	})
    }

    saveCategory(category) {
        return _mm.request({
            type: 'post',
            url: '/manage/category/add_category.do',
            data: category
        })
    }

	//品类相关
	geCategoryList(parentCategoryId) {
        console.log(parentCategoryId)
		return _mm.request({
			type: 'post',
			url: '/manage/category/get_category.do',
			data: {
				categoryId: parentCategoryId || 0
			}
		})
	}
}

export default Product;