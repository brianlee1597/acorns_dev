import { NavLink } from "react-router-dom"
import { LangMap } from "../GlobalComponents/LanguageMap"
import { 
    IoHomeOutline, 
    IoFlagOutline, 
    IoGiftOutline,
    IoHeartOutline as IHeartOutline, 
    IoChatboxOutline as IoChatOutline
} from 'react-icons/io5'
         
import './BottomNavigation.scss'

export default function BottomNavigation () {

    const navSections = [
        { icon: <IoHomeOutline/>, link: "/"       , title: "Home" },
        { icon: <IHeartOutline/>, link: "/charity", title: LangMap.navigation.get("charity").korean },
        { icon: <IoGiftOutline/>, link: "/gifts"  , title: LangMap.navigation.get("gifts"  ).korean },
        { icon: <IoFlagOutline/>, link: "/promote", title: LangMap.navigation.get("promote").korean },
        { icon: <IoChatOutline/>, link: "/forum"  , title: LangMap.navigation.get("forum"  ).korean }  
    ]

    const base = { margin: '0', padding: '0', color: 'black' },
          icon = { ...base, fontSize: "7vw"  }, 
          name = { ...base, fontSize: "12px" }

    const links = navSections.map((each, index) => {
        
        return <NavLink key={index} to={each.link} 
                style={{ textDecoration: 'none' }}>
                    <div className="link-container">
                       <span style={icon}>{ each.icon  }</span>
                       <h5   style={name}>{ each.title }</h5>
                   </div>
                </NavLink>
    })

    return <nav>{ links }</nav>
}