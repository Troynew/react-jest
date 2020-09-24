import React from 'react';
import { shallow, mount } from 'enzyme';
import ToDoList from './TodoList_1';
import './setupTests';

//组件未完全挂载，可获取props
describe('ToDoList1 component', () => {
	describe('when provided with an array of tasks', () => {
		it('passes them to the Task components', () => {
			const tasks = [
				{
					id: 0,
					name: 'Wash the dishes',
				},
				{
					id: 1,
					name: 'Make the bed',
				},
			];

			const toDoListInstance = shallow(<ToDoList tasks={tasks} />);
			toDoListInstance.find('Task').forEach((taskInstance) => {
				const taskProps = taskInstance.props();
				const matchingTask = tasks.find((task) => task.id === taskProps.id);
				expect(taskProps.name).toBe(matchingTask.name);
			});
		});
		afterAll(() => console.log('over'));
		beforeAll(() => console.log('before'));
	});

	//组件完全挂载，可获取子组件元素
	describe('when provided with an array of tasks', () => {
		it('passes them to the Task components,test children element', () => {
			const tasks = [
				{
					id: 0,
					name: 'Wash the dishes',
				},
				{
					id: 1,
					name: 'Make the bed',
				},
			];
			const toDoListInstance = mount(<ToDoList tasks={tasks} />);
			toDoListInstance.find('Task').forEach((taskInstance) => {
				const taskProps = taskInstance.props();
				const matchingTask = tasks.find((task) => task.id === taskProps.id);
				const listItem = taskInstance.first('li');
				expect(listItem.text()).toBe(matchingTask.name);
			});
		});
	});
});
