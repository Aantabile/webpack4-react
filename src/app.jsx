import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


import Layout from 'components/layout/index';
import Home from 'pages/home/index';


class App extends React.Component{
	render() {
		return (
			<Router>
		    <Layout>
				  <Switch>
				    <Route exact path='/' component={Home}/>
				    <Redirect from='*' to='/'/>
				  </Switch>
		    </Layout>
			</Router>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)