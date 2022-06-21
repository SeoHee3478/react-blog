import React from 'react';
import Post from './Post.jsx';
import './Author.css';
import './Category.css';
import './Post.css';
import './Posts.css';

export default function Posts(props) {
    return (
        <>
            <div class="max-width">
                <h2 class="a11y-hidden">Post</h2>
                <ul class="posts">     
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                </ul>
            </div>
        </>
    );
}
