import PinnedSection from './PinnedSection/PinnedSection.jsx'
import './GiftsPage.scss'

const GiftsPage = props => {

    return (
        <PinnedSection userBias={props.userBias} gifts={props.gifts}/>
    )
}

export default GiftsPage