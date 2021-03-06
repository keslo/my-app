import { connect } from 'react-redux'
import Users from './Users'

const mapStateToProps = state => {
    return {
        users: state.users,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps)(Users)