import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from 'components/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';

import Product from 'service/product.jsx'
import MUtil from 'util/mm.jsx';


const _product = new Product();
const _mm = new MUtil();



class categoryList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			list    : [],
			parentCategoryId: this.props.match.params.categoryId || 0
		}
	}

	componentDidMount() {
		this.loadCategoryList();
	}

	componentDidUpdate(prevProps, prevState) {
		let oldPath = prevProps.location.pathname,
		    newPath = this.props.location.pathname,
		    newId = this.props.match.params.categoryid || 0;
	    if(oldPath !== newPath) {
	    	this.setState({
	    		parentCategoryId: newId
	    	}, () => {
	    		this.loadCategoryList();
	    	})
	    }
	}
	loadCategoryList() {
		_product.geCategoryList(this.state.parentCategoryId).then(res => {
			this.setState({
				list : res
			});
		}, errMsg => {
			this.setState({
				list: []
			})
			_mm.errorTips(errMsg);
		})
	}

	onPageNumChange(pageNum) {
		this.setState({
			pageNum : pageNum
		}, () => {
			this.loadUserList();
		})
	}

	onUpdateName(id, name) {
		let newName = window.prompt('请输入新的品类名称', name);
		if(newName) {
			_product.updateCategoryName({
				categoryId  : id,
				categoryName: newName
			}).then(res => {
				_mm.successTips(res);
				this.loadCategoryList();
			}, errMsg => {
				_mm.errorTips(errMsg);
			})
		}
	}

	render() {
		let listBody = this.state.list.map((item, index) => {
    		return (
    			<tr key={index}>
    				<td>{item.id}</td>
    				<td>{item.name}</td>
    				<td>
    				    <a className="opear" 
    				       onClick={(e) => this.onUpdateName(item.id, item.name)}>修改名称</a>
    				       {
    				       	item.parentId === 0 ?
    				       	<Link to={`/product-category/index/${item.id}`}>查看子品类</Link>
    				       	: null
    				       }
    				</td>
    			</tr>
    		)
    	})
		return (
			<div id="page-wrapper">
				<PageTitle title="品类列表" >
				  <div className="page-header-right">
				    <Link to="/product-category/add" className="btn btn-primary">
				      <i className="fa fa-plus"></i>
				      <span>添加品类</span>
				    </Link>
				  </div>
				</PageTitle>
				<div className="row">
				    <div className="col-md-12">
				        <p>父品类ID:{this.state.parentCategoryId}</p>
				    </div>
				</div>
				<TableList tableHeads={['品类ID', '品类名', '操作']}>
				    {listBody}
				</TableList>
			</div>
		);
	}
}

export default categoryList;