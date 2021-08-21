import './DonationPage.scss'
import React from 'react';
import PinnedSection from '../GlobalComponents/DonGiftSections/PinnedSection/PinnedSection.jsx'
import AllSection from '../GlobalComponents/DonGiftSections/AllCategorySection/AllSection.jsx'

const DonationPage = (props) => {

    return (
        <>
            <PinnedSection userBias={props.userBias} componentsByBias={props.componentsByBias} 
            pageUrl={props.pageUrl}/>
            <AllSection userBias={props.userBias} 
            pageUrl={props.pageUrl}/>
        </>
    )
}

export default DonationPage