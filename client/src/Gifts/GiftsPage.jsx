import PinnedSection from './PinnedSection/PinnedSection.jsx'
import AllGiftSection from './PinnedSection/AllGiftSection.jsx'
import './GiftsPage.scss'

const GiftsPage = props => {

    return (
        <>
        <PinnedSection userBias={props.userBias} gifts={props.gifts}/>
        <AllGiftSection/>
        </>
    )
}

export default GiftsPage