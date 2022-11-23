import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import { Feed } from './features/feed/Feed';
import HotTopic from './features/HotTopic/HotTopic';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from './features/feed/feedSlice';
import { ToTop } from './features/ToTop/ToTop';

function App() {

    const selectSub = useSelector(state => state.sub)

    const dispatch = useDispatch();
    const limit = 5;
    const baseUrl = 'https://www.reddit.com';

    useEffect(() => {
        const getApiData = async () => {
            const response = await fetch(
                `${baseUrl}/r/${selectSub.sub}.json?limit=${limit}`
            ).then((response) => response.json());

            dispatch(setPosts(response.data.children));
        };

        getApiData();
    }, [selectSub.sub, dispatch]);
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
            <ToTop />
        </div>
        
    );
}

export default App;
