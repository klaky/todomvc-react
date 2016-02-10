import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import autobind from 'autobind-decorator'

@autobind
class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isEdit: false};
	}

	onChange(event) {
		this.props.markItem(parseInt(event.target.id), event.target.checked);
	}

	onEdit() {
		this.setState({isEdit: true});
	}

	componentDidUpdate() {
		if (this.state.isEdit) {
			this.refs.myInput.focus();
		}
	}

	onBlur(event) {
		this.props.onEdit(event.target.id, event.target.value);
		this.setState({isEdit: false});
	}

	onSave(event) {
		if (event.keyCode === 13 && event.target.value.length > 0) {
			this.props.onEdit(event.target.id, event.target.value);
			this.setState({isEdit: false});
		}
		if (event.keyCode === 27) {
			this.setState({isEdit: false});
		}

	}

	render() {
		var liClass = classNames({
			'completed': this.props.isDone,
			'destroy': !this.props.isDone,
			'editing': this.state.isEdit
		});

		return (
			<div>
				<li className={liClass}>
					<div className="view">
						<input
							type="checkbox"
							className="toggle"
							checked={this.props.isDone}
							id={this.props.id}
							onChange={this.onChange}
						/>
						<label
							onDoubleClick={this.onEdit}
						>
							{this.props.text}
						</label>
						<button
							className="destroy"
							onClick={this.props.onDestroy.bind(this.props.id)}
						/>
					</div>
					<input
						ref="myInput"
						className="	edit"
						id={this.props.id}
						onKeyDown={this.onSave}
						onBlur={this.onBlur}
						defaultValue={this.props.text}
					/>
				</li>
			</div>
		);
	}
}

export default Item
