import PinnedSection from './PinnedSection/PinnedSection.jsx'
import './GiftsPage.scss'

const GiftsPage = props => {

    return (
        <PinnedSection userBias={props.userBias}/>
    )
}

export default GiftsPage