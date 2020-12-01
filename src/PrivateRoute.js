import { connect } from 'react-redux';
import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        const { isLoggedIn } = this.props

        if (!isLoggedIn) {
            return <Redirect to='/login'/>
        }

        return (
            <Route {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn : state.isLoggedIn
    }
}

export default connect(mapStateToProps)(PrivateRoute);