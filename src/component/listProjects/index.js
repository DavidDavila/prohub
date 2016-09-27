import React, { Component } from 'react';
import ListMilestones from './../listMilestones/';
import styler from 'react-styling';

import { connect } from 'react-redux';
// import { bindActionCreators as bind_action_creators } from 'redux';

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

export default class ListProjects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects : []
    };
    this.shortChronological = this.shortChronological.bind(this);
    this.shortByClient = this.shortByClient.bind(this);
  }

  shortChronological() {
    this.state.projects.sort(function (a, b) {
      return (a.UpdatedDate) - (b.UpdatedDate);
    });
  }
  shortByClient() {
    this.state.projects.sort(function (a, b) {
      var clientA = a.name.toLowerCase(), clientB = b.name.toLowerCase();
      if (clientA < clientB) { 
        return -1;
      }
      if (clientA > clientB) {
        return 1;
      }
      return 0;
    });
  }
  componentDidMount() {
    this.setState({
      projects : this.props.project.thisProject
    }, () => {
      console.log(this.state.projects);
    });
  }
  render() {
    return (
      <section className="table" style={style.container}>
        <div className="table-cell">
          <div className="container">
          <span onClick={this.shortChronological}>Chronological</span>
          <span onClick={this.shortByClient}>By Project</span>
                    {this.state.projects.map((project, i) => {
                      return <div  key={project._id + '-' + i }><span>{project.name}</span><ListMilestones milestonesArray={project.milestone}/></div>;
                    })}
          </div>
        </div>
      </section>
    );
  }
}
