import React, { Component } from 'react';
import Login from 'component/login/';
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

export default class Page extends Component {
	render() {
  return (
			<section className="table" style={style.container}>
				<div className="table-cell">
					<div className="container">
						<Login/>
					</div>
				</div>
			</section>
		);
	}
}
