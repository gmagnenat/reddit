import React, { useState, useEffect } from 'react';

const Feed = () => {
	const [posts, setPosts] = useState([]);

	const limit = 1;
	const baseUrl = 'https://www.reddit.com';

	useEffect(() => {
		const getApiData = async () => {
			const response = await fetch(
				`${baseUrl}reactjs.json?limit=${limit}`
			).then((response) => response.json());

			setPosts(response.data.children);
		};

		getApiData();
	}, []);

	return (
		<div>
			{posts.map(({ data }) => (
				<div key={data.id}>
					<a href={`${baseUrl}`}>{data.title}</a>
				</div>
			))}
		</div>
	);
};

export default Feed;
