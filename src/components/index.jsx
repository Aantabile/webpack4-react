import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
		this.state = {
			initDone: false
		}
	}

	render() {
		return (
			<div>
			  <p>header</p>
			  {this.props.children}
			  <p>footer</p>
			</div
		)
	}
}

export default App