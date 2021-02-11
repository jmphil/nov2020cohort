import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return 
        <>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contactUs">Contact Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/comment">Comments</Link>

        </>;
    
}

export default Header






