import React from 'react';
import './About.css';

export default function About(props) {
    return (
        <>
            <aside class="about">
                <h2>About Me</h2>
                <img src="../../../assets/profile.jpg" alt="" class="user-profile" />
                <p class="user-name">Chilli</p>
                <p class="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h3>Categories</h3>
                <ul class="categories">
                    <li><a href="#">Life</a></li>
                    <li><a href="#">Style</a></li>
                    <li><a href="#">Tech</a></li>
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">Photo</a></li>
                    <li><a href="#">Develop</a></li>
                    <li><a href="#">Music</a></li>
                </ul>
                <h3>Follow</h3>
                <ul class="sns">
                    <li>
                        <a href="#">
                            <img src={require(`../../../assets/Facebook.svg`).default} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={require(`../../../assets/Twitter.svg`).default} alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={require(`../../../assets/Instagram.svg`).default} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={require(`../../../assets/Github.svg`).default} alt="Github" />
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}

