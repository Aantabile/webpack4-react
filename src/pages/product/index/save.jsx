import React from 'react';
import PageTitle from 'components/page-title/index.jsx';
import Product from 'service/product.jsx'
import MUtil from 'util/mm.jsx';

class ProductSave extends React.Component{
	render() {
		return (
		<div id="page-wrapper">
		    <PageTitle title="添加商品" />
			<form className="form-horizontal">
				<div className="form-group">
					<label  className="col-md-2 control-label">商品名称</label>
					<div className="col-md-5">
					  <input type="text" className="form-control" placeholder="请输入商品名称" />
					</div>
			</div>

			<div className="form-group">
				<label  className="col-md-2 control-label">商品描述</label>
				<div className="col-md-5">
					<input type="text" className="form-control"  placeholder="请输入商品描述" />
				</div>
			</div>

			<div className="form-group">
				<label  className="col-md-2 control-label">所属分类</label>
				<div className="col-md-5">
					<select type="text" className="form-control  cate-select"  placeholder="请输入商品描述" >
					    <option value="">请选择一级分类</option>
					</select>
					<select type="text" className="form-control cate-select"  placeholder="请输入商品描述" >
					    <option value="">请选择二级分类</option>
					</select>
				</div>
			</div>

			<div className="form-group">
				<label  className="col-md-2 control-label">商品价格</label>
				<div className="col-md-3">
					<div class="input-group">
						<input type="number" className="form-control"  placeholder="请输入商品价格" />
						<span class="input-group-addon">元</span>
					</div>
				</div>
			</div>

			<div className="form-group">
				<label  className="col-md-2 control-label">商品库存</label>
				<div className="col-md-3">
				    <div class="input-group">
				    	<input type="number" className="form-control"  placeholder="请输入商品价格" />
				    	<span class="input-group-addon">件</span>
				    </div>
				</div>
			</div>

			<div className="form-group">
				<div className="col-md-offset-2 col-md-10">
				    <div type="submit" className="btn btn-primary">确定 </div>
				</div>
			</div>
			</form>
		</div>
		);
	}
}

export default ProductSave;