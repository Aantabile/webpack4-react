import React from 'react';

import TopNav from 'components/top-nav/index';
import SideNav from 'components/side-nav/index';
import './theme.css';



class Layout extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="wrapper">
			  <TopNav />
			  <SideNav />
			  {this.props.children}
			</div>
		);
	}
}

export default Layout