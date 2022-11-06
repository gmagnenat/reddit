import React, { useState, useEffect } from 'react';
import './Feed.css';

const Feed = () => {
	const [posts, setPosts] = useState([]);

	const limit = 1;
	const baseUrl = 'https://www.reddit.com';

	useEffect(() => {
		const getApiData = async () => {
			const response = await fetch(
				`${baseUrl}/r/reactjs.json?limit=${limit}`
			).then((response) => response.json());

			setPosts(response.data.children);
		};

		getApiData();
	}, []);

	return (
		<div className='feed'>
			{posts.map(({ data }) => (
				<div key={data.id} className='feed__item'>
					<a
						target='_blank'
						rel='noreferrer'
						className='feed__item__link'
						href={`${baseUrl}/${data.permalink}`}
					>
						{data.title}
					</a>
				</div>
			))}
		</div>
	);
};

export default Feed;
