import React from 'react';
import './category-selector.css';

import Product from 'service/product.jsx';
import MUtil from 'util/mm.jsx';

const _mm  = new MUtil();
const _product = new Product();


class CategorySelector extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			firstCategoryList: [],
			firstCategoryId: 0,
			secondCategoryList: [],
			secondCategoryId: 0
		}
	}

	componentDidMount() {
		this.loadFirstCategory();
	}

	componentWillReceiveProps(nextProps) {
		let categoryIdChange      = this.props.categoryId !==nextProps.categoryId;
		let prentCategoryIdChange = this.props.parentCategoryId !== nextProps.parentCategoryId;
	    //数据未发生变化
	    if(!categoryIdChange && !prentCategoryIdChange) {
	    	return;
	    }
	    //一级品类
	    if(nextProps.parentCategoryId === 0) {
	    	this.setState({
	    		firstCategoryId : nextProps.categoryId,
	    		secondCategoryId: 0
	    	})
	    }else{
	    	this.setState({
	    		firstCategoryId : nextProps.prentCategoryIdChange,
	    		secondCategoryId: nextProps.categoryId
	    	}, ()=> {
	    		prentCategoryIdChange && this.loadSecondCategory()
	    	})
	    }
	}


	loadFirstCategory() {
		_product.geCategoryList().then(res => {
			this.setState({
				firstCategoryList: res
			})
		}, errMsg => {
			_mm.errorTips();
		})
	}

	loadSecondCategory() {
		_product.geCategoryList(this.state.firstCategoryId).then(res => {
			this.setState({
				secondCategoryList: res
			})
		}, errMsg => {
			_mm.errorTips();
		})
	}

	onFirstCategoryChange(e) {
		if(this.props.readOnly) {
			return;
		}
		let newValue  = e.target.value || 0;
		this.setState({
			firstCategoryId: newValue,
			secondCategoryList: [],
			secondCategoryId: 0
		}, () => {
			this.loadSecondCategory();
			this.onPropsCategoryChange();
		})
	}

	onSecondCategoryChange(e) {
		if(this.props.readOnly) {
			return;
		}
		let newValue  = e.target.value || 0;
		this.setState({
			secondCategoryId: newValue
		}, () => {
			this.loadSecondCategory();
			this.onPropsCategoryChange();
		}) 
	}

    //传给父组件选择的结果
    onPropsCategoryChange() {
    	let categoryChangable = typeof this.props.onCategoryChange === 'function';
    	if(this.state.secondCategoryId) {
    		categoryChangable && this.props.onCategoryChange(this.state.secondCategoryId, this.state.firstCategoryId);
    	}else{
    		categoryChangable && this.props.onCategoryChange(this.state.firstCategoryId, 0)
    	}
    }

	render() {
		return (
			<div className="col-md-10">
				<select className="form-control  cate-select" 
				    value={this.state.firstCategoryId} 
				    placeholder="请输入商品描述"
				    readOnly={this.props.readOnly}
				    onChange={(e) => {this.onFirstCategoryChange(e)}} >
				    <option value="">请选择一级分类</option>
				    {
				    	this.state.firstCategoryList.map((item, index) => 
				    		<option value={item.id} key={index}>{item.name}</option>
				    	)
				    }
				</select>
				{
					this.state.secondCategoryList.length ? (
						<select readOnly={this.props.readOnly}
						    className="form-control cate-select"  
						    placeholder="请输入商品描述"
						    value={this.state.secondCategoryId}
						    onChange={(e) => {this.onSecondCategoryChange(e)}}  >
						    <option value="">请选择二级分类</option>
						    {
						    	this.state.secondCategoryList.map((item, index) => 
						    		<option value={item.id} key={index}>{item.name}</option>
						    	)
						    }
						</select>
					) : null
				}
			</div>
		);
	}
}

export default CategorySelector;