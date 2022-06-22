import React from 'react';


export default function Logout(props) {
    return (
        <>
            <li>
                <a href="#" class="button gray">
                    <img src={require(`../../assets/icon-login.svg`).default} alt="" />
                    <span>Login</span>
                </a>
            </li>
            <li class="only-pc">
                <a href="#" class="button gray">
                    <img src={require(`../../assets/icon-register.svg`).default} alt="" />
                    <span>Register</span>
                </a>
            </li>
        </>
    );
}