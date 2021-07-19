import { NavLink } from "react-router-dom";
import WindowDimensions from '../Hooks/WindowDimension'

import './Nav.scss'

const Navigation = props => { 

    // eslint-disable-next-line no-unused-vars
    const { height, width } = WindowDimensions()

    const background = props.loggedIn? props.user.backgroundcolor: 'white' //navigation bar background

    return (
        <section id="nav-container" style={{background: background}}>
            <div id="logo-left">
                <NavLink to="/" style={{color: props.loggedIn? 'white': 'black', 
                borderColor: props.loggedIn? 'white': 'black'}} 
                className="logo">Acorns</NavLink>
            </div>
            <div className="navlink-container">
                <NavLink style={{color: props.loggedIn? 'white': 'black'}} 
                activeClassName="is-active" to="/donations">기부하기</NavLink>
                <NavLink style={{color: props.loggedIn? 'white': 'black'}}
                activeClassName="is-active" to="/gifts">선물하기</NavLink>
                <NavLink style={{color: props.loggedIn? 'white': 'black'}} 
                activeClassName="is-active" to="/campaigns">캄페인</NavLink>
                <NavLink style={{color: props.loggedIn? 'white': 'black'}} 
                activeClassName="is-active" to="/community">커뮤니티</NavLink>
            </div>
            <div className="profile-container" style={{display: props.loggedIn? 'none': width <= 415? 'none': 'grid'}}>
                    <NavLink activeClassName="is-active" to="/login" className="login-button">로그인/계정생성</NavLink>
            </div>
            <div className="profile-container" style={{display: props.loggedIn && width > 415? 'grid': 'none'}}>
                    <button className="logout-button" onClick={props.logout}>로그아웃</button>
            </div>
        </section>
    )
}

export default Navigation