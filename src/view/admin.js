import React, { Component } from 'react';
import Menu from 'component/menu/';
import styler from 'react-styling';
import * as loginAction from './../component/login/action/login-action';
import { connect } from 'react-redux';

const style = styler
`
  container
    position:absolute;
    top:0;
    left:0;
    height:100vh;

  header
    text-align: center;
    font-weight:bold;

  marginBottom
    margin-bottom: 50px;

  image
    display: block;
    margin-left  : auto;
    margin-right : auto;


`;

export class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <Menu/>
        {React.cloneElement(this.props.children, { project: this.props.loginReducer })}
      </main>
    );
  }
};

function mapStateToProps(state) {
  return  state;
}
export default connect(mapStateToProps, loginAction )(Admin);

