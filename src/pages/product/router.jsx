import React from 'react';
import {  BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import ProductList from 'pages/product/index/index.jsx';
import ProductSave from 'pages/product/index/save.jsx'

class ProductRouter extends React.Component{
	render() {
		return (
		    <Switch>
		    	<Route path="/product/index" component={ProductList} />
		    	<Route path="/product/save" component={ProductSave} />
		    	<Redirect exact from="/product" to="product/index" />
		    </Switch>
		);
	}
}

export default ProductRouter;