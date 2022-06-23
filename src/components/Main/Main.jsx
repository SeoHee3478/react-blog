import React from 'react';
import './Main.css';
import './Posts/Posts.css';
import './Posts/Post.css';
import './Posts/Category.css';
import './Posts/Author.css';
import './About/About.css';
import Posts from './Posts/Posts.jsx';
import About from './About/About.jsx';


export default function Main(props) {
    return (
        <div>
            <main>
                <div class="max-width">
                <Posts/>
                <About/>
                </div>
            </main>
        </div>
    );
}

