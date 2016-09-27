import React from 'react';

export default class listProjects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var milestonesArray = [];
    this.props.milestonesArray.map((milestone)=>{
      milestonesArray.push(<div key={milestone._id}><span className="title">milestone.title</span><span className="description">{milestone.description}</span><span className="state">{milestone.state}</span><span className="date">{milestone.date}</span><span className="links">{milestone.links}</span></div>);
    });
    return (<div>{ milestonesArray }</div>);
  }
};
