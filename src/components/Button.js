import React, { Component } from "react"

class Button extends Component {
	// constructor(props) {
	// 	super(props)
	// }
	render() {
		return (
			<button onClick={() => this.props.getUsers(50)}>Push me!</button>
		)
	}
}

export default Button