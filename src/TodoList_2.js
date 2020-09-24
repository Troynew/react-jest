import React, { Component } from 'react';
import axios from 'axios';
import Task from './Task';

class ToDoList extends Component {
	state = {
		tasks: [],
	};

	componentDidMount() {
		return axios
			.get()
			.then((tasksResponse) => {
				this.setState({ tasks: tasksResponse.data });
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<ul>
				{this.state.tasks.map((task) => (
					<Task key={task.id} id={task.id} name={task.name} />
				))}
			</ul>
		);
	}
}

export default ToDoList;
