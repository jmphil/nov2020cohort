import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {


    return(
        <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" href="#">Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></Link>
                <Link class="nav-item nav-link" href="#">Features</Link>
                <Link class="nav-item nav-link" href="#">Pricing</Link>
                <Link class="nav-item nav-link disabled" href="#">Disabled</Link>
            </div>
        </div>
    </nav>
        </>
    )
    
}



export default Header;