import React, { Component } from 'react';
import styler from 'react-styling';


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

export default class projectName extends Component {
  constructor(props) {
    super(props); 
   
  }
  render() {
    return (
      
          <div className="container">
            <div>
              <h2>About the Client</h2>
              <ul>
                <li>
                    Choose a client
                </li>
                {this.props.project.thisProject.map( (project, i) => {
                  return (<li key={project._id} onClick={this.props.setNameClient.bind(this)}>{project.name}</li>);
                })}
              </ul>
              <div>
                <span> + Add New Client </span>
                <div className="input">
                  <span>New Client</span>
                  <input type="text" onBlur={this.props.setNameClient.bind(this)} />
                </div>
              </div>
            </div>
            <div>
              <h2>About the Project</h2>
              <div className="input">
                <span>Project Title</span>
                <input type="text" onBlur={this.props.setNameProject.bind(this)}/>
              </div>
              <div className="input">
                <span>Project Description</span>
                <textArea type="text" onBlur={this.props.setDescriptionProject.bind(this)}/>
              </div>
            </div>
          </div>
    );
  }
}

