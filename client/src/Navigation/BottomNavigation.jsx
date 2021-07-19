import { NavLink } from "react-router-dom";
import { FiHome } from 'react-icons/fi'
import { FiFlag } from 'react-icons/fi'
import { RiHandHeartLine } from 'react-icons/ri'
import { IoGiftOutline } from 'react-icons/io5'
import { IoChatboxOutline } from 'react-icons/io5'
import './BottomNavigation.scss'

export default function BottomNavigation() {

    return (
        <nav>
            <NavLink to="/" style={{textDecoration: 'none'}}>
                <div className="link-container">
                <span style={{
                    margin: '0', padding: '0', 
                    fontSize: "7vw", color: 'black'
                    }}><FiHome/></span>
                <h5 style={{
                margin: '0', padding: '0', color: 'black', fontSize: '12px'
                }}>Home</h5>
                </div>
            </NavLink>
            <NavLink to="/donations" style={{textDecoration: 'none'}}>
                <div className="link-container">
                <span style={{margin: '0', padding: '0', 
                fontSize: "7vw", color: 'black'
                }}><RiHandHeartLine/></span>
                <h5 style={{
                margin: '0', padding: '0', color: 'black', fontSize: '12px'
                }}>Charity</h5>
                </div>
            </NavLink>
            <NavLink to="/gifts" style={{textDecoration: 'none'}}>
                <div className="link-container">
                <span style={{margin: '0', padding: '0', 
                fontSize: "7vw", color: 'black'
                }}><IoGiftOutline/></span>
                <h5 style={{
                margin: '0', padding: '0', color: 'black', fontSize: '12px'
                }}>Gifts</h5>
                </div>
            </NavLink>
            <NavLink to="/campaigns" style={{textDecoration: 'none'}}>
                <div className="link-container">
                <span style={{margin: '0', padding: '0', 
                fontSize: "7vw", color: 'black'
                }}><FiFlag/></span>
                                <h5 style={{
                margin: '0', padding: '0', color: 'black', fontSize: '12px'
                }}>Promote</h5>
                </div>
            </NavLink>
            <NavLink to="/community" style={{textDecoration: 'none'}}>
                <div className="link-container">
                <span style={{margin: '0', padding: '0', 
                fontSize: "7vw", color: 'black'
                }}><IoChatboxOutline/></span>
                <h5 style={{
                margin: '0', padding: '0', color: 'black', fontSize: '12px'
                }}>Forum</h5>
                </div>
            </NavLink>
        </nav>
    )
}