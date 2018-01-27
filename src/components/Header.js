import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <header className="header">
            Booking app
        </header>
        <div className="content">
            <nav className="sidebar">
                <NavLink className="content" to="/" activeClassName="is-active" exact={true}>Hotel</NavLink>
                <NavLink className="content" to="/portfolio" activeClassName="is-active" exact={true}>Flight</NavLink>
                <NavLink className="content" to="/contact" activeClassName="is-active">Tours</NavLink>
            </nav>
        </div>
    </div>
);

export default Header;