import React, { Component } from "react";
import { connect } from 'react-redux'
import Users from './Users'

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Users)