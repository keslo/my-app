import React, { Component } from "react";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

class UsersThunk extends Component {
    render() {
        return <ul>
			{
				(this.props.users.length) ?
					this.props.users.map((user,i) => {
						return <li key={i}>{user.cell}</li>
					})
					:
					<span>0 users loaded</span>
			}
			</ul>
    }
}

export default connect(mapStateToProps)(UsersThunk)