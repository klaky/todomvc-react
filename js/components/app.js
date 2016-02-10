import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'
import Main from './main'
import Footer from './footer'
import Info from './info'
import ItemsManager from '../start'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: this.props.items};
		this.addNewItem = this.addNewItem.bind(this);
		this.markAll = this.markAll.bind(this);
		this.markItem = this.markItem.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onDestroy = this.onDestroy.bind(this);
		this.clearAll = this.clearAll.bind(this);
	}

	onDestroy(itemId) {
		var index = this.state.items.indexOf(parseInt(itemId))
		this.state.items.splice(index, 1);
		this.setState({items: this.state.items});
	}

	onEdit (itemId, text) {
		var items = [];

		this.state.items.forEach(function (item) {
			if (item.id === parseInt(itemId)) {
				item.text = text
			}
			items.push(item);

		})
		this.setState({items: items});
	}

	clearAll(){
		var items = this.state.items.filter(function(item){
			return item.isDone === false;
		})

		this.setState({items: items});
	}

	markItem (itemId, isDone) {
		var items = [];

		this.state.items.forEach(function (item) {
			if (item.id === itemId) {
				item.isDone = isDone
			}
			items.push(item);
		})
		this.setState({items: items});
	}

	addNewItem(text) {
		this.state.items.push({isDone: false, text: text, id: new Date().getTime()});
		this.setState({items: this.state.items});
	}

	markAll(areDone) {
		var items = [];

		this.state.items.forEach(function (item, index, arr) {
			item.isDone = areDone;
			items.push(item);
		})

		this.setState({items: items});
	}

	render() {
		var displayStyleMainAndFooter = this.state.items.length > 0;
		var notCompletedItemNumber = this.state.items.filter(function (item) {
			return item.isDone === false;
		}).length;

		var checkboxIsChecked = notCompletedItemNumber === 0;

		return (
			<section className="todoapp">
				<Header
					addNewItem={this.addNewItem}
				/>
				{ this.state.items.length > 0?
					<Main
						checkboxIsChecked={checkboxIsChecked}
						items={this.state.items}
						markAll={this.markAll}
						markItem={this.markItem}
						onEdit={this.onEdit}
						onDestroy={this.onDestroy}

					/>
					: null}

				{ displayStyleMainAndFooter ?
					<Footer
					notCompletedItemNumber={notCompletedItemNumber}
					clearAll={this.clearAll}
					/>
				: null}

				<Info></Info>
			</section>
		);
	}
}

export default App;
