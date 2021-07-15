import axios from "axios";
import { useState } from 'react'
import { NavLink } from "react-router-dom";

import './Nav.scss'

const Navigation = props => { 

    const logout = () => {
        axios.post('/logout')
        .then(response => {
            console.log(response)
            window.location.href = '/'
        })
        .catch(error => console.log(error))
    }

    const background = props.loggedIn? 'transparent': 'black'

    return (
        <section id="nav-container" style={{background: background}}>
            <div id="logo-left">
                <NavLink to="/"><img src="https://img.icons8.com/material-outlined/100/000000/nut.png" alt="logo"/></NavLink>
            </div>
            <div id="rightside-container">
                <div className="profile-container" style={{display: props.loggedIn? 'none': 'block'}}>
                    <NavLink activeClassName="is-active" to="/login" className="login-button">로그인</NavLink>
                    <NavLink activeClassName="is-active" to="/register" className="reg-button">계정생성</NavLink>
                </div>
                <div className="profile-container" style={{display: props.loggedIn? 'block': 'none'}}>
                    <button className="login-button" onClick={logout}>로그아웃</button>
                </div>
                <div className="navlink-container">
                    <NavLink activeClassName="is-active" to="/donations">
                        기부하기
                    </NavLink>
                    <NavLink activeClassName="is-active" to="/gifts">
                        선물하기
                    </NavLink>
                    <NavLink activeClassName="is-active" to="/campaigns">캄페인</NavLink>
                    <NavLink activeClassName="is-active" to="/community">커뮤니티</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Navigation