import { React, Component } from 'react'
import { NavLink } from "react-router-dom";

import './Nav.scss'

class Navigation extends Component {
    render () {
        return (
            <section id="nav-container">
                <div id="logo-left">
                    <NavLink to="/"><img src="https://img.icons8.com/material-outlined/100/000000/nut.png" alt="logo"/></NavLink>
                </div>
                <div id="rightside-container">
                    <div className="profile-container">
                        <h4>Welcome, Newcomer!</h4>
                        <NavLink activeClassName="is-active" to="/login" className="login-button">Log In</NavLink>
                    </div>
                    <div className="navlink-container">
                        <NavLink activeClassName="is-active" to="/donations">
                            Donations
                        </NavLink>
                        <NavLink activeClassName="is-active" to="/gifts">
                            Gifts
                        </NavLink>
                        <NavLink activeClassName="is-active" to="/campaigns">Campaigns</NavLink>
                        <NavLink activeClassName="is-active" to="/community">Community</NavLink>
                    </div>
                </div>
            </section>
        )
    }
}

export default Navigation