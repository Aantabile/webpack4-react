import React from 'react';
import {  BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import ProductList from 'pages/product/index/index.jsx';

class ProductRouter extends React.Component{
	render() {
		return (
		    <Switch>
		    	<Route path="/product" component={ProductList} />
		    </Switch>
		);
	}
}

export default ProductRouter;