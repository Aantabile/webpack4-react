import React from 'react';
import PageTitle from 'components/page-title/index.jsx';
import Product from 'service/product.jsx'
import CategorySelector from '../category-selector.jsx';


import './save.css';

import MUtil from 'util/mm.jsx';

const _mm = new  MUtil();
const _product = new Product();

class ProductDetail extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.pid,
			name: '',
			subtitle: '',
			price: '',
			stock: '',
			detail: '',
			categoryId: 0,
			parentCategoryId: 0,
			subImages: [],
			status: 1 //1商品状态在售未售
		}
	}

	componentDidMount() {
		this.loadProduct();
	}


	//加载商品详情
	loadProduct() {
		if(this.state.id) {
			_product.getProduct(this.state.id).then(
				(res) => {
					let images = res.subImages.split(',');
					res.subImages = images.map((imgUri) => {
						return {
							uri: imgUri,
							url: res.imageHost + imgUri
						}
					});
					this.setState(res);
				}, (errMsg) => {
					_mm.errorTips(errMsg);
				});
		}
	}

	
	render() {
		return (
		<div id="page-wrapper">
		    <PageTitle title="添加商品" />
			<div className="form-horizontal">
				<div className="form-group">
					<label  className="col-md-2 control-label">商品名称</label>
					<div className="col-md-5">
					    <p className="form-control-static">{this.state.name}</p>
					</div>
			    </div>

				<div className="form-group">
					<label  className="col-md-2 control-label">商品描述</label>
					<div className="col-md-5">
					    <p className="form-control-static">{this.state.subtitle}</p>
					</div>
				</div>

				<div className="form-group">
					<label  className="col-md-2 control-label">所属分类</label>
					<CategorySelector 
					        readOnly
					        categoryId={this.state.categoryId}
					        parentCategoryId={this.state.parentCategoryId} />
				</div>

				<div className="form-group">
					<label  className="col-md-2 control-label">商品价格</label>
					<div className="col-md-3">
						<div className="input-group">
							<input type="number" 
							       readOnly
							       className="form-control"
							       value={this.state.price} />
							<span className="input-group-addon">元</span>
						</div>
					</div>
				</div>

				<div className="form-group">
					<label  className="col-md-2 control-label">商品库存</label>
					<div className="col-md-3">
					    <div className="input-group">
					    	<input type="number" className="form-control"
					    	       readOnly  
					    	       value={this.state.stock} />
					    	<span className="input-group-addon">件</span>
					    </div>
					</div>
				</div>

				<div className="form-group">
					<label  className="col-md-2 control-label">商品图片</label>
					<div className="col-md-10">
					     {
					     	this.state.subImages.length ? this.state.subImages.map(
					     		(item, index) => (
					     			<div className="img-icon" key={index}>
					     			    <img src={item.url} />
					     			</div>
					     		)
					     	) : (<div>暂无图片</div>)
					     }
					</div>
				</div>

				<div className="form-group">
					<label  className="col-md-2 control-label">商品详情</label>
					<div className="col-md-10" dangerouslySetInnerHTML={{__html: this.state.detail}}>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default ProductDetail;