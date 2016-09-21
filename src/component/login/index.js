import React, { Component } from 'react';
import styler from 'react-styling';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginAction from './action/Login-action';

const style = styler`
  
`;

export class Login extends Component {

  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <h2> 
          El resultado es:
        </h2>
        <p style={style.p}>
          <button  type="button" onClick={this.props.login}>Login</button>
        </p>
      </div>
    );
  }
}

export default connect(state => ({
  Login: state.loginReducer
}), function (dispatch) {
  return bindActionCreators(loginAction, dispatch);
})(Login);

