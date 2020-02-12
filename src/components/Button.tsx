import React, { Component } from "react"

type IProps = {
	loadUsers: (count: number) => void
}

class Button extends Component<IProps> {
	public render() {
		return (
			<button onClick={() => this.props.loadUsers(10)}>Push me!</button>
		)
	}
}

export default Button