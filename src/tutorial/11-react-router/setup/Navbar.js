import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to='/' className='btn' >Home</Link>
        <Link to='/about' className='btn' >About</Link>
        <Link to='/people' className='btn' >People</Link>
      </ul>
    </nav>
  )
};

export default Navbar;
