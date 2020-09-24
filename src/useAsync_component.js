import { useState } from 'react';
import axios from 'axios';
function useCommentsManagement() {
	const [comments, setComments] = useState([]);

	function fetchComments() {
		return (
			axios
				.get('https://jsonplaceholder.typicode.com/comments')
				// .then((response) => response.json())
				.then(
					(data) => {
						console.log('data', data);
						setComments(data);
					},
					(res) => {
						console.log('res', res);
					}
				)
		);
	}

	return {
		comments,
		fetchComments,
	};
}

export default useCommentsManagement;
