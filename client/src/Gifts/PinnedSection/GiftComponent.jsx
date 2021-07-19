import ProgressBar from 'react-animated-progress-bar'
import { NavLink } from 'react-router-dom'
import WindowDimensions from '../../Hooks/WindowDimension'

import './GiftComponent.scss'

const GiftComponent = props => {

    const [imageurl, title, type, user] = [props.imageurl, props.title, props.type, props.user]
    const [amountpaid, amountneeded, dateremaining] = [props.amountpaid, props.amountneeded, props.dateremaining]
    const percentage = props.percentagepaid
    // eslint-disable-next-line no-unused-vars
    const {height, width} = WindowDimensions()

    return (
        <div className="each-pinned-gift-campaign">
            <div className="img-container" style={{backgroundImage: `url(${imageurl})`}}/>
            <div className="text-container">
                <h4>{title}</h4>
                <p>{type}&nbsp; | &nbsp;<NavLink className="posted-user" to="/">@{user}</NavLink></p>
            </div>
            <ProgressBar 
                width={width <= 415? "85%": "90%"}
                height="7px"
                rect
                fontColor="gray"
                percentage={percentage.toString()}
                trackPathColor="#f4f4f4"
                defColor={{
                    fair: '#F7E967',
                    good: '#70B7BA' ,
                    excellent: '#A9CF54',
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