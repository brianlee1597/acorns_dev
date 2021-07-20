import { NavLink } from "react-router-dom";
import { IoHomeOutline } from 'react-icons/io5'
import { IoFlagOutline } from 'react-icons/io5'
import { IoHeartOutline } from 'react-icons/io5'
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
                    }}><IoHomeOutline/></span>
                <h5 style={{
                margin: '0', padding: '0', color: 'black', fontSize: '12px'
                }}>Home</h5>
                </div>
            </NavLink>
            <NavLink to="/donations" style={{textDecoration: 'none'}}>
                <div className="link-container">
                <span style={{margin: '0', padding: '0', 
                fontSize: "7vw", color: 'black'
                }}><IoHeartOutline/></span>
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
                }}><IoFlagOutline/></span>
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