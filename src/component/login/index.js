import React, { Component } from 'react';
import styler from 'react-styling';
import { connect } from 'react-redux';
import * as loginAction from './action/login-action';

const style = styler`
  
`;

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(NextProps) {
    if (this.props.loginReducer) {
      this.props.goTo('/admin');
    }
  }


  render() {
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


