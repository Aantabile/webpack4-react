import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from 'components/page-title/index';


class ErrorPage extends React.Component{
	render() {
		return (
		<div id="page-wrapper">
			<PageTitle title="出错啦!" />
			<div className="row">
				<div className="col-md-12">
					<span>找不到该路径,</span>
					<Link to="/">点我返回该路径</Link>
				</div>
			</div>
		</div>
		);
	}
}

export default ErrorPage;