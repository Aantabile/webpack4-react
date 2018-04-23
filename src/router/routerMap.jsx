import React from 'react'
import {Rrouter, Route, IndexRoute} from 'react-router'

import App from '../pages'
import Home from '../pages/Home'
import City from '../pages/City'
import User from '../pages/User'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import NotFound from '../pages/404'

class RouterMap extends React.Component {
	render() {
		return (
			<Router history={this.props.history}>
        <Route path='/' component={App}>
          <indexRoute component={Home}/>
          <Route path='/city' component={City}/>
          <Route path='/user' component={User}/>
          <Route path='/search/:type(/:keyword)' component={Search}/>
          <Route path='/detail/:id' component={Detail}>
          <Route path='*' component={NotFound}>
        </Route>
			</Router>
		)
	}
}

export default RouterMap