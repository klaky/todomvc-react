/**
 * Created by E540 on 2016-02-07.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

var items = [
		//{id: 1, isDone: false, text: 'item 1'},
		//{id: 2,isDone: true, text: 'item 2'},
		//{id: 3,isDone: false, text: 'item 3'},
		//{id: 4,isDone: true, text: 'item 4'},
		//{id: 5, isDone: false, text: 'item 5'},

];

var ItemsManager = {
	add(text) {
		items.push({isDone: false, text: text})
	}
}

export default ItemsManager;
ReactDOM.render(<App items={items}/>, document.body);
