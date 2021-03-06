import React, { Component } from "react";

class Users extends Component {
	render() {
		let { loading,users,error } = this.props
		return (
			<ul>
			{(loading) ? 
				<span>Loading Users...</span> :
			(users.length) ? users.map((user,i) => <li key={i}>{user.name.first} {user.name.last}</li>) : <span>0 users loaded</span>
			}
			{(error) ? <p>Error loading</p> : ''}
			</ul>
		)
	}
}

export default Users