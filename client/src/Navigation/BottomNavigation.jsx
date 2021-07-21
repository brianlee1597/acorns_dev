import { NavLink } from "react-router-dom"
import { LangMap } from "../GlobalComponents/LanguageMap"
import { IoHomeOutline, IoFlagOutline, IoHeartOutline,
         IoGiftOutline, IoChatboxOutline } from 'react-icons/io5'
         
import './BottomNavigation.scss'

export default function BottomNavigation() {

    const navSections = [
        { icon: <IoHomeOutline/>,  link: "/", 
        title: "Home" },
        { icon: <IoHeartOutline/>, link: "/charity", 
        title: LangMap.navigation.get("charity").korean },
        { icon: <IoGiftOutline/>,  link: "/gifts", 
        title: LangMap.navigation.get("gifts").korean   },
        { icon: <IoFlagOutline/>,  link: "/promote", 
        title: LangMap.navigation.get("promote").korean },
        { icon: <IoChatboxOutline/>, link: "/forum", 
        title: LangMap.navigation.get("forum").korean   }  
    ]

    const links = navSections.map(eachSection =>
        <NavLink key={eachSection.title} 
        to={eachSection.link} style={{ textDecoration: 'none' }}>
            <div className="link-container">
                <span style={{
                margin: '0', padding: '0', 
                fontSize: "7vw", color: 'black'
                }}>
                    {eachSection.icon}
                </span>
                <h5 style={{
                margin: '0', padding: '0', 
                color: 'black', fontSize: '12px'
                }}>
                    {eachSection.title}
                </h5>
            </div>
        </NavLink>
    )

    return (
        <nav>{links}</nav>
    )
}