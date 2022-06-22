import React from 'react';

export default function Login(props) {
    return (
        <>
            <li class="profile-img">
                <a href="#">
                    <img src="../../assets/profile.jpg" alt="My Page" />
                </a>
            </li>
            <li>
                <a href="#" class="button">
                    <img src={require(`../../assets/icon-modify-white.svg`).default} alt="" />
                    <span>Write</span>
                </a>
            </li>
            <li>
                <button class="button white">
                    <img src={require(`../../assets/icon-logout.svg`).default} alt="" />
                    <span>Logout</span>
                </button>
            </li>
        </>
    );
}
