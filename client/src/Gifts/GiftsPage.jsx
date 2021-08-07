import { useEffect } from 'react'
import axios from 'axios'

import PinnedSection from '../GlobalComponents/DonGiftSections/PinnedSection/PinnedSection.jsx'
import AllSection from '../GlobalComponents/DonGiftSections/AllCategorySection/AllSection.jsx'
import './GiftsPage.scss'

const GiftsPage = props => {
    
  useEffect(() => {
    axios.get('/test').then(data => console.log(data))
  }, [])

    return (
        <>
        <PinnedSection userBias={props.userBias} componentsByBias={props.componentsByBias} pageUrl={props.pageUrl}/>
        <AllSection userBias={props.userBias} pageUrl={props.pageUrl}/>
        </>
    )
}

export default GiftsPage