import React, { Component } from 'react';

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
          
        </div>
    );
  }
 
}
