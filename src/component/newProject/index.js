import React, { Component } from 'react';
import styler from 'react-styling';
import { connect } from 'react-redux';
import ProjectName from './projectName/';
import { bindActionCreators } from 'redux';

import * as newProjectAction from './action/newProject-action';

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

export class newProject extends Component {
  constructor(props) {
    super(props); 
  }

  selectClient(component, name, eventDis) {
 
  }

  render() {
    return (
       <section className="table" style={style.container}>
        <div className="table-cell">
          
          <ProjectName 
            project={ this.props.project } 
            setNameClient={this.props.setNameClient} 
            setNameProject={this.props.setNameProject} 
            setDescriptionProject={this.props.setDescriptionProject}            
          />
          <button>Next</button>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return  state;
}
export default connect(state => ({
  newProject: state.newProjectReducer
}), function (dispatch) {
  return bindActionCreators(newProjectAction, dispatch);
})(newProject);

