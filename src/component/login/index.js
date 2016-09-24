import React, { Component } from 'react';
import styler from 'react-styling';
import { connect } from 'react-redux';
import * as loginAction from './action/login-action';

const style = styler`
  
`;

export class Login extends Component {

  componentDidUpdate(NextProps) {
    if (this.props.loginReducer) {
      this._reactInternalInstance._context.history.push('/admin');
    }
  }


  render() {
    console.log(this._reactInternalInstance._context.store.getState());
    return (
      <div>
        <h2> 
        </h2>

        <p style={style.p}>
          <button  type="button" onClick={this.props.login}>Login</button>
        </p>
      </div>
    );
  };
}
function mapStateToProps(state) {
  return  state;
};

export default connect(mapStateToProps, loginAction )(Login);


