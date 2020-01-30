import React, { Component } from "react";

class Users extends Component {
	constructor (props) {
		super(props)
	}
	render() {
		let { loading,users,error } = this.props
		return (
			<ul>
			{(loading) ? 
				<span>Loading Users</span> :
				(users.length) ? users.map((user,i) => <li key={i}>{user.cell}</li>) : <span>0 users loaded</span>
			}
			{(error) ? <p>Error loading</p> : ''}
			</ul>
		)
	}
}

export default Users