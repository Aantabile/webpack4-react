import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'components/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx'
import Pagination from 'util/pagination/index.jsx'
import ListSearch from './index-list-search.jsx'

import Order from 'service/order.jsx'
import MUtil from 'util/mm.jsx';




const _order = new Order();
const _mm = new MUtil();



class OrderList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			pageNum : 1,
			list: [],
			listType: 'list' //list or search
		}
	}

	componentDidMount() {
		this.loadOrderList();
	}

	loadOrderList() {
		let listParam =  {};
		listParam.listType = this.state.listType;
		listParam.pageNum = this.state.pageNum;

		if(this.state.listType === 'search') {
			listParam.orderNo = this.state.orderNumber;
		}

		_order.getOrderList(listParam).then(res => {
			this.setState(res);
		}, errMsg => {
			this.setState({
				list: []
			})

			_mm.errorTips(errMsg);
		})
	}

	onSearch(orderNumber) {
		let listType = orderNumber === '' ? 'list' : 'search';
		this.setState({
			listType: listType,
			pageNum : 1,
			orderNumber : orderNumber
		}, () => {
			this.loadOrderList();
		})
	}

	onPageNumChange(pageNum) {
		this.setState({
			pageNum : pageNum
		}, () => {
			this.loadOrderList();
		})
	}

	render() {
		let tableHeads = ['订单号','收件人','订单状态','订单总价','创建时间','操作']
		console.log(this.state.list)
		return (
			<div id="page-wrapper">
				<PageTitle title="商品列表" />
				<ListSearch onSearch={(orderNumber) => {this.onSearch(orderNumber)}} />
				<TableList tableHeads={tableHeads}>
				    {
				        this.state.list.map((item, index) => {
				        	return(
				        		<tr key={index}>
				        			<td><Link to={`/order/detail/${item.orderNo}`}>{item.orderNo}</Link></td>
				        			<td>{item.reveiverName}</td>
				        			<td>{item.statusDesc}</td>
				        			<td>{item.payment}</td>
				        			<td>{item.createTime}</td>
				        			<td>
				        			    <Link to={`/order/detail/${item.orderNo}`}>详情</Link>
				        			</td>
				        		</tr>
				        	)
				    	})
			        }
				</TableList>
				<Pagination 
				    current={this.state.pageNum} 
		            total={this.state.total} 
		            onChange={(pageNum) =>this.onPageNumChange(pageNum)}/>
			</div>
		);
	}
}

export default OrderList;