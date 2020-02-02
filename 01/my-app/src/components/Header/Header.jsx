import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className = {s.header}>
        <img src = 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png'></img>
      </header>
    );
}

export default Header;