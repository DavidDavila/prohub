import React, { Component } from 'react';
import styler from 'react-styling';
import { connect } from 'react-redux';
import * as loginAction from './action/login-action';

const style = styler`
  
`;

export class Login extends Component {

  componentDidMount() {
    
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
  
  return {
    project: state.list
  };
};

export default connect(mapStateToProps, loginAction )(Login);


