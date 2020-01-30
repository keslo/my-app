import { connect } from 'react-redux'
import Button from './Button'
import { loadUsers } from './../actions'

export const ButtonContainer = connect(
	null,
	dispatch =>
		({
			loadUsers(count) {
				dispatch(loadUsers(count))
			}
		})
)(Button)

export default ButtonContainer