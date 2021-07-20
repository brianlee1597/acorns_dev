import { useState } from "react";
import './CategoryBar.scss'

export default function CategoryBar(props) {

    const [focus, setFocus] = useState({
        artist: true,  deadline: false,
        funding: false, goal: false,
        category: false
    })

    const focusOnArtist = () => {
        setFocus({artist: true, deadline: false,
        funding: false, goal: false, category: false})
    }
    const focusOnDeadline = () => {
        setFocus({deadline: true, artist: false,
        funding: false, goal: false, category: false})
    }
    const focusOnGoal = () => {
        setFocus({goal: true, artist: false,
        deadline: false, funding: false, category: false})
    }
    const focusOnFunding = () => {
        setFocus({funding: true, artist: false,
        deadline: false, goal: false, category: false})
    }
    const focusOnCategory = () => {
        setFocus({category: true, artist: false,
        deadline: false, funding: false, goal: false})
    }

    return (
        <div className="button-container">
            <button className={focus.artist? 'category-nav-active': 'category-nav-not-active'} 
            onClick={(e) => {props.getAllBlocksOf('artists', props.pageUrl); focusOnArtist()}}>아티스트별</button>

            <button className={focus.deadline? 'category-nav-active': 'category-nav-not-active'} 
            onClick={(e) => {props.getAll('deadline', props.pageUrl); focusOnDeadline()}}>마감일순</button>

            <button className={focus.funding? 'category-nav-active': 'category-nav-not-active'} 
            onClick={(e) => {props.getAll('funding', props.pageUrl); focusOnFunding()}}>펀딩액순</button>

            <button className={focus.goal? 'category-nav-active': 'category-nav-not-active'} 
            onClick={(e) => {props.getAll('goal', props.pageUrl); focusOnGoal()}}>목표금액순</button>

            <button className={focus.category? 'category-nav-active': 'category-nav-not-active'} 
            onClick={(e) => {props.getAllBlocksOf('types', props.pageUrl); focusOnCategory()}}>분야별</button>
        </div>
    )
}