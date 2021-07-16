import React from 'react'
import Carousel from 'react-multi-carousel'
import GiftComponent from './GiftComponent';
import { FaMapPin } from 'react-icons/fa'

import "react-multi-carousel/lib/styles.css";
import './PinnedComponent.scss'

const PinnedComponent = props => {

    if (props.userBias === "nouser") 
        return null

    const title = props.userBias === "Aespa"? "가장 소중한 친구, MY":
                  props.userBias === "BTS"? "Army, One and Only":
                  "Blink, For You"

    const bias = props.userBias === "Aespa"? "카리나":
                 props.userBias === "BTS"? "정국이":
                 "리사"

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 3,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1000, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
    }

    const tempGiftInfo = {
        imageurl: 'https://images.pexels.com/photos/360624/pexels-photo-360624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: `홍대 2호선 9번출구쪽 ${bias} 생일축하해 광고`,
        type: "전장판 광고",
        user: `${bias}_팬심123`,
        amountpaidsofar: 744293,
        amountneeded: 1000000,
        datecreated: 10,
        dateending: 19
    }

    const templength = 4, pinnedgiftlist = []
    for(let i = 0; i < templength; i++)
        pinnedgiftlist.push(
            <GiftComponent 
                key={i} 
                imageurl={tempGiftInfo.imageurl}
                title={tempGiftInfo.title}
                type={tempGiftInfo.type}
                user={tempGiftInfo.user}
                amountpaid={tempGiftInfo.amountpaidsofar}
                amountneeded={tempGiftInfo.amountneeded}
                dateremaining={tempGiftInfo.dateending - tempGiftInfo.datecreated}
            />
        )

    const CustomDot = ({ onMove, index, onClick, active }) => {
        return (
            <div 
            className={active? "active": "inactive"}
            onClick={() => onClick()}>-</div>
        );
    };

    return (
        <div className="giftpinned-container">
            <h1><span><FaMapPin /></span>&nbsp;&nbsp;{title}</h1>
            <div className="carousel-background-container">
                <Carousel 
                responsive={responsive} 
                showDots={true}
                customDot={<CustomDot/>}
                containerClass={templength < 3? "carousel-without-dot" : "carousel-with-dot"}>
                    {pinnedgiftlist}
                </Carousel>
            </div>
        </div>
    )
}

export default PinnedComponent