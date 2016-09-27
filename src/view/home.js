import React, { Component } from 'react';
import Login from 'component/login/';
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

export class Page extends Component {
	render() {
  return (
			<section className="table" style={style.container}>
				<div className="table-cell">
					<div className="container">

						<Login goTo={this.props.history.push} />
						
					</div>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
  return  state;
}
export default connect(mapStateToProps)(Page);

