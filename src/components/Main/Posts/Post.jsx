import React from "react";
import { Link } from "react-router-dom";
import Category from "./Category.jsx";
import Author from "./Author.jsx";

export default function Post(props) {
  return (
    <>
      <li>
        <Link to="/post/1" class="post">
          <article>
            {/* <img src={"./assets/post-img1.jpg"} alt="" /> */}
            <img src={"props.thumbnail"} alt="" />
            <div class="contents-wrap">
              <Category />
              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
              <Author />
              <p class="post-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore illum nostrum perferendis voluptas, voluptate soluta
                corrupti dolore quidem. Placeat, eaque! Exercitationem est
                facilis dolor quas odio cum incidunt repudiandae vel. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                illum nostrum perferendis voluptas, voluptate soluta corrupti
                dolore quidem. Placeat, eaque! Exercitationem est facilis dolor
                quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel."
              </p>
            </div>
          </article>
        </Link>
      </li>
    </>
  );
}
