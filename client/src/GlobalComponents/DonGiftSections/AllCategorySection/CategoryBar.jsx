import { useState } from "react";
import { LangMap } from "../../LanguageMap";
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
            onClick={() => {props.getAllBlocksOf('artists', props.pageUrl); focusOnArtist()}}>
                {LangMap["categorynav"].get("artist").english}
            </button>

            <button className={focus.deadline? 'category-nav-active': 'category-nav-not-active'} 
            onClick={() => {props.getAll('deadline', props.pageUrl); focusOnDeadline()}}>
                {LangMap["categorynav"].get("deadline").english}
            </button>

            <button className={focus.funding? 'category-nav-active': 'category-nav-not-active'} 
            onClick={() => {props.getAll('funding', props.pageUrl); focusOnFunding()}}>
                {LangMap["categorynav"].get("funding").english}
            </button>

            <button className={focus.goal? 'category-nav-active': 'category-nav-not-active'} 
            onClick={() => {props.getAll('goal', props.pageUrl); focusOnGoal()}}>
                {LangMap["categorynav"].get("goal").english}
            </button>

            <button className={focus.category? 'category-nav-active': 'category-nav-not-active'} 
            onClick={() => {props.getAllBlocksOf('types', props.pageUrl); focusOnCategory()}} 
            style={{background: 'grey', border: '1px solid transparent'}} disabled>
                {LangMap["categorynav"].get("type").english}
            </button>
        </div>
    )
}