export const GET_USERS  = "GET_USERS"

interface GetUsers {
	type: typeof GET_USERS
	users: string[]
	loading: boolean
}

export type GetUsersType = GetUsers