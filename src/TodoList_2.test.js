import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import './setupTests';

jest.mock('axios');

import ToDoList from './TodoList_2';

describe('ToDoList2 component', () => {
	// ...

	describe('when rendered', () => {
		it('should fetch a list of tasks', () => {
			const getSpy = jest.spyOn(axios, 'get');
			const toDoListInstance = shallow(<ToDoList />);
			expect(getSpy).toBeCalled();
		});
	});
});
