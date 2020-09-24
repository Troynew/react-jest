let currentId = 2;
module.exports = {
	get: () => {
		return Promise.resolve({
			data: [
				{
					id: 0,
					name: 'Wash the dishes',
				},
				{
					id: 1,
					name: 'Make the bed',
				},
			],
		});
	},
	get1: () => {
		return Promise.resolve({
			data: [
				{
					id: 0,
					name: 'Wash the dishes1',
				},
				{
					id: 1,
					name: 'Make the bed1',
				},
			],
		});
	},
	post: (url, data) => {
		return Promise.resolve({
			data: {
				task: {
					name: data.task,
					id: currentId++,
				},
			},
		});
	},
};
