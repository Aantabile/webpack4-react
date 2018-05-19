import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


import Layout from 'components/layout/index.jsx';
import Home from 'pages/home/index.jsx';
import ProductRouter from 'pages/product/router.jsx'
import Login from 'pages/login/index.jsx';
import UserList from 'pages/user/index.jsx'
import OrderList from 'pages/order/index.jsx'
import OrderDetail from 'pages/order/detail.jsx'
import ErrorPage from 'pages/error/index.jsx'



class App extends React.Component{

	render() {
		let LayoutRouter = (
	    <Layout>
			  <Switch>
			    <Route exact path='/' component={Home} />
			    <Route  path='/product' component={ProductRouter} />
			    <Route  path='/product-category' component={ProductRouter} />
			    <Route  path='/user' component={UserList} />
			    <Route  path='/order/index' component={OrderList} />
			    <Route  path='/order/detail/:orderNumber' component={OrderDetail} />
			    <Redirect exact from="/order" to="/order/index" />
			    <Redirect exact from="/user" to="/user/index" />
			    <Route  component={ErrorPage} />
			  </Switch>
	    </Layout>
		)

		return (
			<Router>
			  <Switch>
			    <Route path='/login' component={Login} />
			    <Route path='/' render={ props => LayoutRouter} />
		    </Switch>
			</Router>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)