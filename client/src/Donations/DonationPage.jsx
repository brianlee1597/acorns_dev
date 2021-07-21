import './DonationPage.scss'
import React from 'react';
import PinnedSection from '../GlobalComponents/DonGiftSections/PinnedSection/PinnedSection.jsx'
import AllSection from '../GlobalComponents/DonGiftSections/AllCategorySection/AllSection.jsx'

const DonationPage = (data) => {

    return (
        <>
            <PinnedSection userBias={data.userBias} componentsByBias={data.componentsByBias} 
            pageUrl={data.pageUrl}/>
            <AllSection userBias={data.userBias} 
            pageUrl={data.pageUrl}/>
        </>
    )

    // const donation_list = data.componentsByBias
    // const listItems = donation_list.map((d) => <li>{d.artist} {d.imageurl}</li>)
    // console.log("hello")
    // console.log(donation_list)
    // console.log(donation_list[0])

    // function handleClick() {
    //     console.log('in cardClick');
    // } 

    // return (
    //     <div id="donation-container">
    //         <div id="header-container">
    //             <h1>전체</h1>
    //             <div className="sort">
    //                 <div onClick={handleClick}>아티스트별</div>
    //             </div>
    //             <div className="sort">
    //                 <div onClick={handleClick}>마감일순</div>
    //             </div>
    //             <div className="sort">
    //                 <div onClick={handleClick}>목표금액순</div>
    //             </div>
    //             <div className="sort">
    //                 <div onClick={handleClick}>분야별</div>
    //             </div>
    //         </div>
    //         <div id="donation-entire-list">
    //             {listItems}
    //         </div>
    //     </div>

    // )
}

export default DonationPage