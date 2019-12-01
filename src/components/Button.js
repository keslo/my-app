import React, { Component } from "react"

class Button extends Component {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}
	submit(e) {
		this.props.getUsers(50);
	}
	render() {
		return (
			<button onClick={this.submit}>Push me!</button>
		)
	}
}

export default Button