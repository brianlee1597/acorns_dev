import PinnedSection from '../GlobalComponents/DonGiftSections/PinnedSection/PinnedSection.jsx'
import AllSection from '../GlobalComponents/DonGiftSections/AllCategorySection/AllSection.jsx'
import './GiftsPage.scss'

const GiftsPage = props => {

    return (
        <>
        <PinnedSection userBias={props.userBias} componentsByBias={props.componentsByBias} pageUrl={props.pageUrl}/>
        <AllSection userBias={props.userBias} pageUrl={props.pageUrl}/>
        </>
    )
}

export default GiftsPage