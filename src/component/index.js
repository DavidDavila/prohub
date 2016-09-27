import React, { Component } from 'react';
import styler from 'react-styling';
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

export class newProject extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      newProject : {}
    };
  }

  selectClient(component, name, eventDis) {
    debugger;
    let aux = {};
    aux.name = name;
    component.setState({
      newProject : aux
    }, () => {
      console.log(component.state);
    });
  }

  render() {
    return (
       <section className="table" style={style.container}>
        <div className="table-cell">
          <div className="container">
            <div>
              <h2>About the Client</h2>
              <ul>
                <li>
                    Choose a client
                </li>
                {this.props.project.thisProject.map( (project, i) => {
                  return (<li key={project._id} onClick={ this.selectClient.bind(null, this, project.name) }> {project.name} </li>);
                })}
              </ul>
              <div>
                <span> + Add New Client </span>
                <div className="input">
                  <span>New Client</span>
                  <input type="text" />
                </div>
              </div>
            </div>
          
            <div>
              <h2>About the Project</h2>
              <div className="input">
                <span>Project Title</span>
                <input type="text" />
              </div>
              <div className="input">
                <span>Project Description</span>
                <textArea type="text" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return  state;
}
export default connect(mapStateToProps)(newProject);
