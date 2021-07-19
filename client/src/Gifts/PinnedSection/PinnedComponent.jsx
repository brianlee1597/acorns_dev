import { FaMapPin } from 'react-icons/fa'
import './PinnedComponent.scss'

const PinnedComponent = props => {

    //the title above PinnedComponent changes based on bias
    const title = props.userBias === "Aespa"? "가장 소중한 친구, MY":
    props.userBias === "BTS"? "Army, One and Only":
    "Blink, For You"

    return ( //PinnedComponent renders its inner stuff based on the conditional props from PinnedSection
        <>
            <div className="giftpinned-container">
                <h1><span><FaMapPin /></span>&nbsp;{title}</h1>
                <hr/>
                <div className={props.container}>
                    {props.gifts}
                </div>
            </div>
        </>
    )
}

export default PinnedComponent