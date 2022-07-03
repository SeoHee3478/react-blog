import React from 'react';

function PostView(props) {
    return (
        <div class="view">
            <div class="max-width">
                <section class="wrap-box">
                    <div class="inner">
                        {/* <!-- author --> */}
						<dl class="author-wrap">
                            <dt class="a11y-hidden">Author</dt>
                            <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                            <dt class="a11y-hidden">Created</dt>
                            <dd class="created">2022.05.25</dd>
                        </dl>
                        {/* <!-- //author --> */}

						{/* <!-- category --> */}
						<dl class="category">
                            <dt class="a11y-hidden">Category</dt>
                            <dd>Life</dd>
                            <dd>Style</dd>
                        </dl>
                        {/* <!-- //category --> */}
						<div class="title-wrap">
                            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <button class="btn-like">Like</button>
                        </div>
                        <hr />
                        <div class="view-contents">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                                dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                                nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                                amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                                cum incidunt repudiandae vel.
							</p>
                            <img src="./images/post-background6.jpg" alt="" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                                dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                                nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                                amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                                cum incidunt repudiandae vel.
							</p>
                        </div>
                        <div class="btn-group">
                            <a href="#" class="btn-modify">
                                <span class="a11y-hidden">modify</span>
                            </a>
                            <button type="button" class="btn-delete">
                                <span class="a11y-hidden">delete</span>
                            </button>
                        </div>
                        <a href="./" class="btn-back">
                            <span class="a11y-hidden">Back</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PostView;