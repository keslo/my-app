import React, { Component } from "react"
import { connect } from 'react-redux'
import Button from './Button'
import { getUsers } from './../reducers'

export const ButtonRedux = connect (
	null,
	dispatch =>
		({
			getUsers(count) {
				dispatch(getUsers({type: 'GET_USERS', count: 30}, {}))
			}
		})
)(Button)

export default ButtonRedux