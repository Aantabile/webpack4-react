import React from 'react';
import PageTitle from 'components/page-title/index.jsx';

import Product from 'service/product.jsx'
import MUtil from 'util/mm.jsx';


const _product = new Product();
const _mm = new MUtil();



class categoryAdd extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			categoryList : [],
			parentId     : 0,
			categoryName : ''
		}
	}

	componentDidMount() {
		this.loadCategoryList();
	}

	loadCategoryList() {
		_product.geCategoryList().then(res => {
			this.setState({
				categoryList : res
			});
		}, errMsg => {
			_mm.errorTips(errMsg);
		})
	}

	onValueChange(e) {
		let name = e.target.name,
		    value = e.target.value;
		this.setState({
			[name] : value
		})
	}

	onSubmit(e) {
		let categoryName = this.state.categoryName.trim();
		if(categoryName) {
			_product.saveCategory({
				parentId    : this.state.parentId,
				categoryName: categoryName
			}).then((res) => {
				_mm.successTips(res)
				this.props.history.push('product-category/index')
			},(errMsg) => {
				_mm.errorTips(errMsg)
			})
		}else{
			_mm.errorTips('请输入品类名称')
		}
	}


	render() {
		return (
			<div id="page-wrapper">
				<PageTitle title="增添品类" />
				<div className="row">
				    <div className="col-md-12">
				      <div className="form-horizontal">
				                <div className="form-group">
				        	       	<label  className="col-md-2 control-label">所属品类</label>
				        	       	<div className="col-md-5">
				        	       	    <select name="parentId" 
				        	       	      className="form-control"
				        	       	      onChange={(e) => {
				        	       	      	this.onValueChange(e)
				        	       	      }}>
			        	       	        <option value="0">根品类/</option>
			        	       	        {
			        	       	        	this.state.categoryList.map((item, index) => {
			        	       	        		return <option value={item.id} 
			        	       	        		  key={index}>根品类/{item.name}</option>
			        	       	        	})
			        	       	        }
				        	       	    </select>
				        	       	</div>
				        	      </div>
				               	<div className="form-group">
				               		<label  className="col-md-2 control-label">品类名称</label>
				               		<div className="col-md-5">
				               		    <input type="text" className="form-control" 
				               		           placeholder="请输入品类名称"
				               		           name="categoryName" 
				               		           value={this.state.name}
				               		           onChange={(e) => this.onValueChange(e)} />
				               		</div>
				               	</div>
				               	<div className="form-group">
				               		<div className="col-md-offset-2 col-md-10">
				               		    <div type="submit" 
				               		         className="btn btn-primary"
				               		         onClick ={(e) => {this.onSubmit(e)}}>提交 </div>
				               		</div>
				               	</div>
				      </div>
				    </div>
				</div>
			</div>
		);
	}
}

export default categoryAdd;