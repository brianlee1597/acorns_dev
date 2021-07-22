import ProgressBar from 'react-animated-progress-bar'
import { NavLink } from 'react-router-dom'
import { LangMap } from '../../LanguageMap'

import './IndividualBubble.scss'

const IndividualBubble = props => {

    const [imageurl, title, type, user, artist] = [props.imageurl, 
        props.title, props.type, props.user, props.artist]
    const [amountpaid, amountneeded, dateremaining] = [props.amountpaid, 
        props.amountneeded, props.dateremaining]
    const percentage = props.percentagepaid

    return (
        <div className="each-pinned-campaign">
            <div className="img-container" style={{backgroundImage: `url(${imageurl})`}}/>
            <div className="post-info-container">
                <h4>[{artist}] {title}</h4>
                <p>{type}&nbsp; | &nbsp;<NavLink className="user-who-posted" to="/">@{user}</NavLink></p>
            </div>
            <ProgressBar 
                rect width="90%" height="7px"
                percentage={percentage.toString()}
                fontColor="gray" trackPathColor="#f4f4f4"
                defColor={{
                    fair: '#F7E967',
                    good: '#70B7BA' ,
                    excellent: '#A9CF54',
                    poor: '#F1433F',
                }}
            />
            <div className="post-stats-container">
                <p>{amountpaid} / {amountneeded} {LangMap['individualPostStats'].get('acorns').korean}</p>
                <p>{dateremaining + " " + LangMap['individualPostStats'].get('remaining').korean}</p>
            </div>
        </div>
    )    
}
export default IndividualBubble