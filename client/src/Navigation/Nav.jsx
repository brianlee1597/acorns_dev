import { useState } from 'react'
import { Link } from "react-router-dom";

import DonationDropdown from './AllDropdowns/DonationDropdown'
import GiftDropdown from './AllDropdowns/GiftDropdown'

import './Nav.scss'

const Nav = () => {
    const [donationVisible, setDonationVisible] = useState({display: 'none'})
    const [giftVisible, setGiftVisible] = useState({display: 'none'})
    
    return (
        <section id="nav-container">
            <div id="logo-left">
                <Link to="/"><img src="https://img.icons8.com/material-outlined/100/000000/nut.png" alt="logo"/></Link>
            </div>
            <div id="rightside-container">
                <div className="profile-container">
                    <h4>Welcome, Newcomer!</h4>
                    <Link to="/login" className="login-button">Log In</Link>
                </div>
                <div className="navlink-container">
                    <Link to="/donations"
                    onMouseEnter = {e => setDonationVisible({display: 'block'})}
                    onMouseLeave = {e => setDonationVisible({display: 'none'})}>
                        Donations
                    </Link>
                    <Link to="/gifts"
                    onMouseEnter = {e => setGiftVisible({display: 'block'})}
                    onMouseLeave = {e => setGiftVisible({display: 'none'})}>
                        Gifts
                    </Link>
                    <Link to="/campaigns">Campaigns</Link>
                    <Link to="/community">Community</Link>
                </div>
                <div className="hover-container">
                    <DonationDropdown style={donationVisible}/>
                    <GiftDropdown style={giftVisible}/>
                </div>
            </div>
        </section>
    )
}

export default Nav