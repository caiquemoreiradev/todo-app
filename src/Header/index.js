import React from 'react';
import { FiSettings, FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';

import './styles.css';

function Header() {
    return (
        <div className="container">
            <h1>cmoreiradev's Workspace</h1>

            <div className="user-settings">
                <FiSearch className='icon' size={20} color='#fff' />
                <FiBell className='icon' size={20} color='#fff' />
                <FiSettings className='icon' size={20} color='#fff' />
                <img src="https://avatars0.githubusercontent.com/u/56305107?s=460&u=2240a7b9b5e8499f64fb1607b42c00f0af10096a&v=4" alt="Caique Moreira" />
                <FiChevronDown className='icon' size={20} color='#fff' />
            </div>
        </div>
    );
}

export default Header;