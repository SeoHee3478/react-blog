import React from 'react';
import './Main.css';
import './Posts/Posts.css';
import './Posts/Post.css';
import './Posts/Category.css';
import './Posts/Author.css';
import About from './About/About.jsx'

export default function Main(props) {
    return (
        <div>
            <main>
                {/* post */}
			<div class="max-width">
                    <h2 class="a11y-hidden">Post</h2>
                    <ul class="posts">
                        <li>
                            <a href="post-view.html" class="post">
                                <article>
                                    <img src="./images/post-img6.jpg" alt="" />
                                    <div class="contents-wrap">
                                        {/* category */}
									<dl class="category">
                                            <dt class="a11y-hidden">Category</dt>
                                            <dd>Life</dd>
                                            <dd>Style</dd>
                                        </dl>
                                        {/* category */}

									<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

                                        {/* author */}
									<dl class="author-wrap">
                                            <dt class="a11y-hidden">Author</dt>
                                            <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                            <dt class="a11y-hidden">Created</dt>
                                            <dd class="created">2022.05.25</dd>
                                        </dl>
                                        {/* author */}

									<p class="post-description">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                            dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                            dolor quas odio cum incidunt repudiandae vel."
									</p>
                                    </div>
                                </article>
                            </a>
                        </li>
                        <li>
                            <a href="post-view.html" class="post">
                                <article>
                                    <img src="./images/post-img5.jpg" alt="" />
                                    <div class="contents-wrap">
                                        {/* category */}
									<dl class="category">
                                            <dt class="a11y-hidden">Category</dt>
                                            <dd>Life</dd>
                                            <dd>Style</dd>
                                        </dl>
                                        {/* category */}

									<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

                                        <dl class="author-wrap">
                                            <dt class="a11y-hidden">Author</dt>
                                            <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                            <dt class="a11y-hidden">Created</dt>
                                            <dd class="created">2022.05.25</dd>
                                        </dl>
                                        <p class="post-description">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                            dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                            dolor quas odio cum incidunt repudiandae vel."
									</p>
                                    </div>
                                </article>
                            </a>
                        </li>
                        <li>
                            <a href="post-view.html" class="post">
                                <article>
                                    <img src="./images/post-img4.jpg" alt="" />
                                    <div class="contents-wrap">
                                        {/* category */}
									<dl class="category">
                                            <dt class="a11y-hidden">Category</dt>
                                            <dd>Life</dd>
                                            <dd>Style</dd>
                                        </dl>
                                        {/* category */}

									<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

                                        <dl class="author-wrap">
                                            <dt class="a11y-hidden">Author</dt>
                                            <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                            <dt class="a11y-hidden">Created</dt>
                                            <dd class="created">2022.05.25</dd>
                                        </dl>
                                        <p class="post-description">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                            dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                            dolor quas odio cum incidunt repudiandae vel."
									</p>
                                    </div>
                                </article>
                            </a>
                        </li>
                        <li>
                            <a href="post-view.html" class="post">
                                <article>
                                    <img src="./images/post-img3.jpg" alt="" />
                                    <div class="contents-wrap">
                                        {/* category */}
									<dl class="category">
                                            <dt class="a11y-hidden">Category</dt>
                                            <dd>Life</dd>
                                            <dd>Style</dd>
                                        </dl>
                                        {/* category */}

									<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

                                        <dl class="author-wrap">
                                            <dt class="a11y-hidden">Author</dt>
                                            <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                            <dt class="a11y-hidden">Created</dt>
                                            <dd class="created">2022.05.25</dd>
                                        </dl>
                                        <p class="post-description">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                            dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                            dolor quas odio cum incidunt repudiandae vel."
									</p>
                                    </div>
                                </article>
                            </a>
                        </li>
                        <li>
                            <a href="post-view.html" class="post">
                                <article>
                                    <img src="./images/post-img2.jpg" alt="" />
                                    <div class="contents-wrap">
                                        {/* category */}
									<dl class="category">
                                            <dt class="a11y-hidden">Category</dt>
                                            <dd>Life</dd>
                                            <dd>Style</dd>
                                        </dl>
                                        {/* category */}

									<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

                                        <dl class="author-wrap">
                                            <dt class="a11y-hidden">Author</dt>
                                            <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                            <dt class="a11y-hidden">Created</dt>
                                            <dd class="created">2022.05.25</dd>
                                        </dl>
                                        <p class="post-description">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                            dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                            dolor quas odio cum incidunt repudiandae vel."
									</p>
                                    </div>
                                </article>
                            </a>
                        </li>
                        <li>
                            <a href="post-view.html" class="post">
                                <article>
                                    <img src="./images/post-img1.jpg" alt="" />
                                    <div class="contents-wrap">
                                        {/* category */}
									<dl class="category">
                                            <dt class="a11y-hidden">Category</dt>
                                            <dd>Life</dd>
                                            <dd>Style</dd>
                                        </dl>
                                        {/* category */}

									<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

                                        <dl class="author-wrap">
                                            <dt class="a11y-hidden">Author</dt>
                                            <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                            <dt class="a11y-hidden">Created</dt>
                                            <dd class="created">2022.05.25</dd>
                                        </dl>
                                        <p class="post-description">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                            dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                            dolor quas odio cum incidunt repudiandae vel."
									</p>
                                    </div>
                                </article>
                            </a>
                        </li>
                    </ul>
                    {/* posts */}

				    {/* about */}
				        <About/>
                    {/* about */}
			</div>
            </main>
        </div>
    );
}

