import Users from './Users'
import { connect } from 'react-redux'
import { getUsers } from './../reducers'

const mapStateToProps = state => 
	({
		users: state.users
	})

const mapDispatchToProps = dispatch => 
	({
		getUsers(count) {
			dispatch(getUsers(count))
		}
	})

export const UserList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Users)