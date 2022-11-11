import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Feed from './Feed';
import HotTopic from './HotTopic';

function App() {
	return (
		<div className='App'>
			<Header />

			{/* App Body */}

			{/* Reddit Feed */}

			{/* Feed */}
			<div className="app_body">
			<Feed />
			<HotTopic />

			</div>
		</div>
	);
}

export default App;
