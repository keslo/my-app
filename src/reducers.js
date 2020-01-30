import C from './constants'

export const getUsers = (state = [], action) => {
	switch (action.type) {
		case C.GET_USERS:
			return {...state, users:action.users}
		default:
			return state
	}
}