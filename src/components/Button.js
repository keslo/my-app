import React, { Component } from "react"

class Button extends Component {
	// constructor(props) {
	// 	super(props)
	// }
	render() {
		return (
			<button onClick={() => this.props.loadUsers(10)}>Push me!</button>
		)
	}
}

export default Button