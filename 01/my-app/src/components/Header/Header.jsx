import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className = {s.header}>
        <img src = 'https://www.freeiconspng.com/uploads/flame-logo-png-30.png'></img>
      </header>
    );
}

export default Header;