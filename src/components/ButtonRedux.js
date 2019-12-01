import React, { Component } from "react"
import { connect } from 'react-redux'
import Button from './Button'
//import { getUsers } from './../reducers'
import { getUserThunk } from './../actions'

export const ButtonRedux = connect (
	null,
	dispatch =>
		({
			getUsers(count) {
				dispatch(getUserThunk(5))
			}
		})
)(Button)

export default ButtonRedux