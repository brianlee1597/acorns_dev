import ProgressBar from 'react-animated-progress-bar'
import { NavLink } from 'react-router-dom'

import './GiftComponent.scss'

const GiftComponent = props => {

    const [imageurl, title, type, user] = [props.imageurl, props.title, props.type, props.user]
    const [amountpaid, amountneeded, dateremaining] = [props.amountpaid, props.amountneeded, props.dateremaining]
    const percentage = (props.amountpaid/props.amountneeded*100).toString()

    return (
        <div className="each-pinned-gift-campaign">
            <div className="img-container" style={{backgroundImage: `url(${imageurl})`}}/>
            <div className="text-container">
                <h4>{title}</h4>
                <p>{type} | <NavLink className="posted-user" to="/">@{user}</NavLink></p>
            </div>
            <ProgressBar 
                width="85%"
                height="6px"
                rect
                fontColor="gray"
                percentage={percentage}
                rectBorderRadius="20px"
                trackPathColor="#f4f4f4"
                defColor={{
                    fair: '#F7E967',
                    good: '#A9CF54',
                    excellent: '#70B7BA',
                    poor: '#F1433F',
                }}
            />
            <div className="description-container">
                <p>{amountpaid} / {amountneeded} 원</p>
                <p>{dateremaining}일 남음</p>
            </div>
        </div>
    )    
}
export default GiftComponent