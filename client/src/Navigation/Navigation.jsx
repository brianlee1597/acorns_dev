import axios from "axios";
import { NavLink } from "react-router-dom";

import './Nav.scss'

const Navigation = props => { 

    const logout = () => { //logout function
        axios.post('/logout') //post to logout, which then logs out user in the backend
        .then(response => {
            console.log(response) //resolve promise
            window.location.href = '/' //then return to main page
        })
        .catch(error => console.log(error))
    }

    const background   = props.loggedIn? 'transparent': 'black', //navigation bar background
          borderBottom = props.loggedIn? '1px dashed rgba(255, 255, 255, .5)': 'none' //navigation border bottom line


    return (
        <section id="nav-container" style={{background: background, borderBottom: borderBottom}}>
            <div id="logo-left">
                <NavLink to="/">Acorns</NavLink>
            </div>
            <div className="navlink-container">
                <NavLink activeClassName="is-active" to="/donations">기부하기</NavLink>
                <NavLink activeClassName="is-active" to="/gifts">선물하기</NavLink>
                <NavLink activeClassName="is-active" to="/campaigns">캄페인</NavLink>
                <NavLink activeClassName="is-active" to="/community">커뮤니티</NavLink>
            </div>
            <div className="profile-container" style={{display: props.loggedIn? 'none': 'grid'}}>
                    <NavLink activeClassName="is-active" to="/login" className="login-button">로그인/계정생성</NavLink>
            </div>
            <div className="profile-container" style={{display: props.loggedIn? 'grid': 'none'}}>
                    <button className="login-button" onClick={logout}>로그아웃</button>
            </div>
        </section>
    )
}

export default Navigation