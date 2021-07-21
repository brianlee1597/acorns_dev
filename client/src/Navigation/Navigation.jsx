import { NavLink } from "react-router-dom";
import WindowDimensions from '../Hooks/WindowDimension'
import { LangMap } from "../GlobalComponents/LanguageMap";

import './Nav.scss'

const Navigation = props => { 

    // eslint-disable-next-line no-unused-vars
    const { height, width } = WindowDimensions()
    const linkArray = [
        {route: "/intro", text: LangMap.navigation.get("aboutus").korean},
        {route: "/charity", text: LangMap.navigation.get("charity").korean},
        {route: "/gifts", text: LangMap.navigation.get("gifts").korean},
        {route: "/promote", text: LangMap.navigation.get("promote").korean},
        {route: "/forum", text: LangMap.navigation.get("forum").korean}
    ]
    const links = linkArray.map(eachLink => 
        <NavLink key={eachLink.text}
        style={{ color: props.loggedIn? 'white': 'black' }} 
        activeClassName="is-active" to={eachLink.route}
        >
            {eachLink.text}
        </NavLink>
    )

    const background = props.loggedIn? props.user.backgroundcolor: 'white' //navigation bar background

    return (
        <section id="nav-container" style={{background: background}}>
            <div id="logo-left">
                <NavLink to="/" style={{color: props.loggedIn? 'white': 'black', 
                borderColor: props.loggedIn? 'white': 'black'}} 
                className="logo">Acorns</NavLink>
            </div>
            <div className="navlink-container">{links}</div>
            <div className="profile-container" style={{display: props.loggedIn? 'none': width <= 415? 'none': 'grid'}}>
                <NavLink activeClassName="is-active" to="/login" className="login-button">
                    {LangMap.navigation.get("login").korean}
                </NavLink>
            </div>
            <div className="profile-container" style={{display: props.loggedIn && width > 415? 'grid': 'none'}}>
                <button className="logout-button" onClick={props.logout}>
                    {LangMap.navigation.get("logout").korean}
                </button>
            </div>
        </section>
    )
}

export default Navigation