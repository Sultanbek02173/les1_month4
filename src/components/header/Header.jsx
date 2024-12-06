import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className='imgCont'><img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1733486914~exp=1733490514~hmac=3290102a8ca7ddacc90a59a64c20c3e49e0c996440067b64612f38206ca57702&w=740" alt="" /></div>
            <div className='links'>
                <li>Home</li>
                <li>Detail</li>
                <li>Cart</li>
            </div>
        </header>
    );
}

export default Header;
