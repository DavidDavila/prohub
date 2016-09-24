import React, { Component } from 'react';
import ListMilestones from 'component/listMilestones/';
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

export default class Admin extends Component {
	render() {
  return (
			<section className="table" style={style.container}>
				<div className="table-cell">
					<div className="container">
                    {this._reactInternalInstance._context.store.getState().loginReducer.thisProject.map((project, i) => {
                      return <div  key={project._id + '-' + i }><span>{project.name}</span><ListMilestones /></div>;

                    })}
					</div>
				</div>
			</section>
		);
	}
}
