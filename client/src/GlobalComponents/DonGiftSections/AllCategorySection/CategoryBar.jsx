import { useState } from "react";
import './CategoryBar.scss'

export default function CategoryBar(props) {

    const [activeArtist, setActiveArtist] = useState(true)
    const [activeDeadline, setActiveDeadline] = useState(false)
    const [activeFunding, setActiveFunding] = useState(false)
    const [activeGoal, setActiveGoal] = useState(false)
    const [activeCategory, setActiveType] = useState(false)

    const focusArtist = () => {
        if (activeArtist) return
        setActiveArtist(true); setActiveDeadline(false)
        setActiveFunding(false); setActiveGoal(false)
        setActiveType(false)
    }
    const focusDeadline = () => {
        if (activeDeadline) return
        setActiveDeadline(true); setActiveArtist(false)
        setActiveFunding(false); setActiveGoal(false)
        setActiveType(false)
    }
    const focusFunding = () => {
        if (activeFunding) return
        setActiveFunding(true); setActiveArtist(false)
        setActiveDeadline(false); setActiveGoal(false)
        setActiveType(false)
    }
    const focusGoal = () => {
        if (activeGoal) return 
        setActiveGoal(true); setActiveArtist(false)
        setActiveDeadline(false); setActiveFunding(false)
        setActiveType(false)
    }
    const focusType = () => {
        if (activeCategory) return 
        setActiveType(true); setActiveArtist(false)
        setActiveDeadline(false); setActiveFunding(false)
        setActiveGoal(false)
    }

    return (
        <div className="button-container">
            <button className={activeArtist? 'category-nav-active': 'category-nav-not-active'} 
            onClick={() => {props.getAllArtists(props.pageUrl); focusArtist()}}>아티스트별</button>
            <button className={activeDeadline? 'category-nav-active': 'category-nav-not-active'} 
            onClick={() => {props.getAllByDeadline(props.pageUrl); focusDeadline()}}>마감일순</button>
            <button className={activeFunding? 'category-nav-active': 'category-nav-not-active'} 
            onClick={() => {props.getAllByFunding(props.pageUrl); focusFunding()}}>펀딩액순</button>
            <button className={activeGoal? 'category-nav-active': 'category-nav-not-active'} 
            onClick={() => {props.getAllByGoal(props.pageUrl); focusGoal()}}>목표금액순</button>
            <button className={activeCategory? 'category-nav-active': 'category-nav-not-active'} 
            onClick={() => {props.getAllTypes(props.pageUrl); focusType()}}>분야별</button>
        </div>
    )
}