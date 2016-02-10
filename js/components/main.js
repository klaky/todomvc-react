import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item'

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.markAll = this.markAll.bind(this);
	}

	markAll(event) {
		this.props.markAll(event.target.checked);
	}

	render() {
		console.log('render onDestory', this.props);
		var self = this;
		var items = this.props.items.map(function (item) {
			return <Item
				isDone={item.isDone}
				text={item.text}
				id={item.id}
				markItem={self.props.markItem}
				onEdit={self.props.onEdit}
				onDestroy={self.props.onDestroy}
			/>
		});

		return (
			<section className="main">
				<input className="toggle-all"
					   type="checkbox"
					   checked={this.props.checkboxIsChecked}
					   onChange={this.markAll}
				/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{items}
				</ul>
			</section>
		);
	}
}

export default Main
