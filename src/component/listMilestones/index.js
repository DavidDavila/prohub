import React from 'react';

export default class listProjects extends React.Component {
  render() {
    var milestonesArray = [];
    props.milestonesArray.map((milestone)=>{
      milestonesArray.push(<div>milestone.title</div>);
    });
    return (milestonesArray);
  }
};
