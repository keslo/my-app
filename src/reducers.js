import { GET_USERS } from './constants'

export const getUsers = (state = {}, action) => {
	switch (action.type) {
		case GET_USERS:
			return {...state, users:action.users, loading: action.loading}
		default:
			return state
	}
}