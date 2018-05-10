import React from 'react';

class TableList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isFirstLoading: true
		}	
	}

	componentWillReceiveProps() {
		this.setState({
			isFirstLoading : false
		})
	}
	render() {
		let tableHeader = this.props.tableHeads.map(
			(item, index) => {
				if(typeof item === 'object') {
					return <th key={index} width={item.width}>{item.name}</th>
				}else if(typeof item === 'string') {
					return <th key={index}>{item}</th>
				}
		});

		let listBody = this.props.children;

		let listInfo = (
			<tr>
			  <td colSpan={this.props.tableHeads.length} className="text-center">
			  {this.state.isFirstLoading ? "正在加载..." : "没有找到相应的结果"}</td>
			</tr>
		);

		let tableBody = listBody.length > 0 ? listBody : listInfo;
		return (
			<div className="row">
				<div className="col-md-12">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
							    {tableHeader}
							</tr>
						</thead>
						<tbody>
						    {tableBody}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default TableList;