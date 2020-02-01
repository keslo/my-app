import { connect } from 'react-redux'
import Users from './Users'

const mapStateToProps = state => {
    return {
        users: state.users,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Users)