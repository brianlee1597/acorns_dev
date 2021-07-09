import { useState } from 'react'
import './Nav.scss'
import DonationDropdown from './AllDropdowns/DonationDropdown'
import GiftDropdown from './AllDropdowns/GiftDropdown'

const Nav = () => {
    const [donationVisible, setDonationVisible] = useState({display: 'none'})
    const [giftVisible, setGiftVisible] = useState({display: 'none'})
    
    return (
        <section id="nav-container">
            <div id="logo-left">
                <a href="/"><img src="https://img.icons8.com/material-outlined/100/000000/nut.png" alt="logo"/></a>
            </div>
            <div id="rightside-container">
                <div className="profile-container">
                    <h4>Welcome, Engineer!</h4>
                    <div className="profile-bar"/>
                </div>
                <div className="navlink-container">
                    <a 
                    onMouseEnter = {e => setDonationVisible({display: 'block'})}
                    onMouseLeave = {e => setDonationVisible({display: 'none'})}
                    href="/">팬덤기부</a>
                    <a 
                    onMouseEnter = {e => setGiftVisible({display: 'block'})}
                    onMouseLeave = {e => setGiftVisible({display: 'none'})}
                    href="/">선물하기</a>
                    <a href="/">캄페인</a>
                    <a href="/">커뮤니티</a>
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