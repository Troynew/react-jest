import React from 'react';
import { shallow } from 'enzyme';
import ToDoList from './TodoList_3';
import axios from 'axios';
import './setupTests';

jest.mock('axios');

describe('ToDoList component', () => {
	describe('when the button is clicked with the input filled out', () => {
		it('a post request should be made', () => {
			const toDoListInstance = shallow(<ToDoList />);
			const postSpy = jest.spyOn(axios, 'post');

			const newTask = 'new task name';
			const taskInput = toDoListInstance.find('input');
			taskInput.simulate('change', { target: { value: newTask } });
			expect(toDoListInstance.state().newTask).toEqual(newTask);

			const button = toDoListInstance.find('button');
			button.simulate('click');

			expect(postSpy).toBeCalled();
		});
	});
});
