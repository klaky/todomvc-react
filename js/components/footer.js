import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
	constructor (props) {
		super(props);
	}

	render (){

		var displayStyleItemLeft = this.props.notCompletedItemNumber > 0 ? {display: 'block'} : {display: 'none'};
		var nr = this.props.notCompletedItemNumber > 1 ?  'items left' :'item left';
		return (
			<footer className="footer">
				{/* This should be `0 items left` by default */}
				<span className="todo-count" style={displayStyleItemLeft}><strong>{this.props.notCompletedItemNumber}</strong> {nr}</span>
				{/* Remove this if you don't implement routing */}
				<ul className="filters" >
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				{/*  Hidden if no completed items are left ↓ */}
				<button className="clear-completed" onClick={this.props.clearAll}>Clear completed</button>
			</footer>
		);
	}
}

export default Footer
