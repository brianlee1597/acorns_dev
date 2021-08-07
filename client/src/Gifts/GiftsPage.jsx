import { useEffect } from 'react'
import axios from 'axios'

import PinnedSection from '../GlobalComponents/DonGiftSections/PinnedSection/PinnedSection.jsx'
import AllSection from '../GlobalComponents/DonGiftSections/AllCategorySection/AllSection.jsx'
import './GiftsPage.scss'

const GiftsPage = props => {

    const json = {
        "cid":"TC0ONETIME",
        "partner_order_id":"partner_order_id",
        "partner_user_id":"partner_user_id",
        "item_name":"초코파이",    		  
        "quantity":"1",
        "total_amount":"2200",
        "vat_amount":"200",
        "tax_free_amount":"0",
        "approval_url":"https://developers.kakao.com/success",
        "fail_url":"https://developers.kakao.com/fail",
        "cancel_url":"https://developers.kakao.com/cancel"
    }
      

    useEffect(() => {
        axios({
            url: 'https://kapi.kakao.com/v1/payment/ready',
            method: 'POST',
            headers: {
              'Authorization': 'KakaoAK 3ebed518b0136a6bd50560b0e1e87bbb'
            },
            // This will urlencode the data correctly:
            data: new URLSearchParams(json)
        })
        .then(data => console.log(data.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        <PinnedSection userBias={props.userBias} componentsByBias={props.componentsByBias} pageUrl={props.pageUrl}/>
        <AllSection userBias={props.userBias} pageUrl={props.pageUrl}/>
        </>
    )
}

export default GiftsPage