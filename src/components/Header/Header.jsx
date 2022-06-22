import React from 'react';
import Login from './Login.jsx'
import Logout from './Logout.jsx'
import './Header.css';
import '../Profile.css';
import '../Button.css';

export default function Header(props) {
    return (
        <div>
            <header>
                <div class="max-width" >
                    <h1>
                        <a href="./">
                            <img src={require(`../../assets/Logo.svg`).default} alt="My Blog"/>
                        </a>
                    </h1>
                    <ul>
                        <Login/>
                        {/* <Logout/> */}
                    </ul>
                </div>
            </header>
        </div>
    );
}


