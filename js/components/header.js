import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.add = this.add.bind(this);
	}

	add(event) {
		if (event.keyCode === 13 &&
			event.target.value &&
			event.target.value.length > 0) {

			this.props.addNewItem(event.target.value.trim());
			event.target.value = '';
		}
	}

	render() {
		return (
			<header className="header">
				<h1>todos</h1>
				<input
					onKeyDown={this.add}
					className="new-todo"
					placeholder="What needs to be done?"
					autofocus
				/>
			</header>
		);
	}
}

export default Header
