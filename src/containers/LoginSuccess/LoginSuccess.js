import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as authActions from 'redux/modules/auth';

@connect(
    state => ({user: state.auth.user}),
    authActions)
export default
class LoginSuccess extends Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
  }

  render() {
    const {user, logout} = this.props;
    return (user &&
      <div className="container">
        <h1>Login Success</h1>

        <div>
          <p>Hi, {user.name}. You have just successfully logged in.
          </p>

          <p>
            The same function will forward you to <code>/</code> should you chose to log out.
          </p>

          <div>
            <button className="btn btn-danger" onClick={logout}><i className="fa fa-sign-out"/>{' '}Log Out</button>
          </div>
        </div>
      </div>
    );
  }
}
