import { NavLink } from "react-router-dom";
import { LangMap } from "../GlobalComponents/LanguageMap";
import biasStyle from "../GlobalComponents/BiasStyleMap";
import WindowDimensions from '../Hooks/WindowDimension'

import './Nav.scss'

const Navigation = props => { 

    /* ----- Component State ----- */
    // eslint-disable-next-line no-unused-vars
    const {height, width} = WindowDimensions()
    const [loggedIn, logOut] = [props.loggedIn, props.logout]
    /* ----- Component State ----- */

    /* ----- Objects/Settings for Render ----- */
    const linkArray = [
        { route: "/intro",   text: LangMap.navigation.get("aboutus").english },
        { route: "/charity", text: LangMap.navigation.get("charity").english },
        { route: "/gifts",   text: LangMap.navigation.get("gifts"  ).english },
        { route: "/promote", text: LangMap.navigation.get("promote").english },
        { route: "/forum",   text: LangMap.navigation.get("forum"  ).english }
    ]

    const color = loggedIn? biasStyle("nav", "Blackpink").linkcolor: 'black',
    links = linkArray.map((eachLink, index) => {
        return <NavLink key={index} activeClassName="is-active"
                to={eachLink.route} style={{ color: color }}>
                { eachLink.text }
              </NavLink>
    })

    const background = !loggedIn? 'white':
    biasStyle("nav", "Blackpink").backgroundcolor
    /* ----- Objects/Settings for Render ----- */

    return (
        <section id="nav-container" style={{background: background}}>
            <div id="logo-left">
                <NavLink className="logo" to="/"
                style={{
                    color:       !loggedIn? 'black': biasStyle("nav", "Blackpink").linkcolor, 
                    borderColor: !loggedIn? 'black': biasStyle("nav", "Blackpink").linkcolor
                }}>
                    Acorns
                </NavLink>
            </div>

            <div className="navlink-container">{links}</div>

            <div className="profile-container" 
            style={{ display: loggedIn? 'none': width <= 415? 'none': 'grid' }}>
                <NavLink className="login-button" to="/login" 
                activeClassName="is-active">
                    {LangMap.navigation.get("login").english}
                </NavLink>
            </div>

            <div className="profile-container" 
            style={{ display: loggedIn && width > 415? 'grid': 'none' }}>
                <button className="logout-button" onClick={logOut}>
                    {LangMap.navigation.get("logout").english}
                </button>
            </div>

            <div className="profile-container" 
            style={{ display: loggedIn && width > 400? 'none': 'grid' }}>
                <NavLink className="myprofile-button" to="/myprofile" 
                activeClassName="is-active">
                    {LangMap.navigation.get("myprofile").english}
                </NavLink>
            </div>
        </section>
    )
}

export default Navigation