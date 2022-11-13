import React from 'react';
import './Post.css';
import { dataAge } from './features/dataAge';

const Post = ({ post, baseUrl }) => {
    return (
        <div key={post.id} className="post">
            <div className="post__main">
                <div className="post__top__info">
                    <p className="post__sub">{post?.subreddit_name_prefixed}</p>
                    <p className="post__info">
                        Posted by {post?.author}, {dataAge(post?.created)}
                    </p>
                </div>
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="post__link"
                    href={`${baseUrl}/${post.permalink}`}
                >
                    {post.title}
                </a>
                {post?.thumbnail &&
                post.thumbnail !== 'self' &&
                post.thumbnail !== 'nsfw' &&
                post.thumbnail !== 'default' ? (
                    <img className="" src={post?.thumbnail} alt="kitten" />
                ) : (
                    ''
                )}

                <div className="post__bottom">
                    <div className="post__votes">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 post__votes__arrows"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                            />
                        </svg>
                        <p>{post?.ups}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                            />
                        </svg>
                        <p>{post?.downs}</p>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 post__bottom__icon"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                    </svg>
                    <p>{`${post?.num_comments} comments`}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
