import { GET_USERS } from './constants'
import initialStore from './store'
import { GetUsersType } from './constants'

export const getUsers = (state = initialStore, action: GetUsersType): typeof initialStore => {
	switch (action.type) {
		case GET_USERS:
			return {...state, users:action.users, loading: action.loading}
		default:
			return state
	}
}