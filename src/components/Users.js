import React, { Component } from "react";

class Users extends Component {
	constructor (props) {
		super(props)
		this.state = {
			users: [],
			loading: false,
			error: null
		}
	}
	async getFakeMembers(count) {
		var res = await fetch('https://api.randomuser.me/?nat=US&results=10');
		let users = await res.json();
		return users.results;

	}
	componentWillMount() {
		this.setState({loading: true})
		this.getFakeMembers(this.props.count).then(
			users => {
				this.setState({users, loading: false});
				console.log(users);
			},
			error => {
				this.setState({error,loading: false})
			}
		)
	}
	render() {
		let {loading,users,error} = this.state
		return (
			<ul>
			{(loading) ? 
				<span>Loading Users</span> :
				(users.length) ?
					users.map((user,i) => {
						return <li key={i}>{user.cell}</li>
					})
					:
					<span>0 users loaded</span>
			}
			{(error) ? <p>Error loading</p> : ''}
			</ul>
		)
	}
}

export default Users