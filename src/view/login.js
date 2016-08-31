import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export default class Login extends Component {
 
  constructor(props, context) {
    super(props, context);
  }
  responseGoogle(response) {
    console.log(response);
  }

  render() {
    return (
        <div>


           <h1>Login</h1>
            <GoogleLogin
               clientId="28039930136-hu376pv4ia2ssmqnjabmhnpr1hf11s4g.apps.googleusercontent.com"
               buttonText="Login"
               cssClass="googleButton"
               callback={this.responseGoogle}
             />
        </div>
    );
  }
 
}
