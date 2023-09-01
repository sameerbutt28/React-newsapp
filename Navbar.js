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
                        <li > <Link to="/news"> News </Link> </li>
                        <li > <Link to="/about"> About </Link> </li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
