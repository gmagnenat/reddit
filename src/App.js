import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import { Feed } from './features/feed/Feed';
import HotTopic from './HotTopic';
import { useDispatch } from 'react-redux';
import { setPosts } from './features/feed/feedSlice';

function App() {
    const dispatch = useDispatch();
    const limit = 5;
    const baseUrl = 'https://www.reddit.com';

    useEffect(() => {
        const getApiData = async () => {
            const response = await fetch(
                `${baseUrl}/r/popular.json?limit=${limit}`
            ).then((response) => response.json());

            dispatch(setPosts(response.data.children));
        };

        getApiData();
    }, []);
    return (
        <div className="App">
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
