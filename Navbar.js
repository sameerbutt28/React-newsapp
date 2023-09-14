import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

// import PropTypes from 'prop-types'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <nav className='navbar'>
                    <ul className='nav_list'>
                        <li > <Link to="/news"> 28-News </Link>  </li>
                        <li > <Link to="/news"> Top-Headlines </Link> </li>
                        <li > <Link to="/about"> About </Link> </li>
                        <li > <Link to="/about"> Business </Link> </li>
                        <li > <Link to="/about"> Entertainment</Link> </li>
                        <li > <Link to="/about"> General</Link> </li>
                        <li > <Link to="/about"> Health</Link> </li>
                        <li > <Link to="/about"> Science</Link> </li>
                        <li > <Link to="/about"> Sports</Link> </li>
                        <li > <Link to="/about"> Technology</Link> </li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
