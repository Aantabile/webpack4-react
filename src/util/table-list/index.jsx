import React from 'react';

class TableList extends React.Component{
	constructor(props) {
		super(props);	
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th>ID</th>
								<th>用户名</th>
								<th>邮箱</th>
								<th>电话</th>
								<th>注册时间</th>
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