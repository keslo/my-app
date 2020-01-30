import { connect } from 'react-redux'
import Button from './Button'
import { getUserThunk } from './../actions'

export const ButtonContainer = connect(
	null,
	dispatch =>
		({
			getUsers(count) {
				dispatch(getUserThunk(count))
			}
		})
)(Button)

export default ButtonContainer