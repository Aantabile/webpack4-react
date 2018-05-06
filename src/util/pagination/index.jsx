import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css' 

class PaginationComponent extends React.Component{
	constructor(props) {
		super(props);	
	}
	render() {
		return (
			<div className="row">
			    <div className="col-md-12">
			        <Pagination {...this.props} 
			        hideOnSinglePage
			        showQuickJumper />
			    </div>
			</div>	
		)
	}
}

export default PaginationComponent;