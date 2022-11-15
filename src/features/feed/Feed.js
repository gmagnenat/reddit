import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import './Feed.css';

export const Feed = () => {
    const posts = useSelector((state) => state.feed.posts);
    return (
        <div className="feed">
            {posts.map((post) => (
                <Post key={post.data.id} post={post.data} />
            ))}
        </div>
    );
};
