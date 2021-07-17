/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import PinnedComponent from './PinnedComponent';
import GiftComponent from './GiftComponent';
import CustomDot from './CustomDot';

import "react-multi-carousel/lib/styles.css";

const PinnedSection = props => { //The whole gift bias pinned section

    if (props.userBias === "nouser") //if user is not logged in, return nothing
        return null

    const [isPopulatingGiftsArray, setIsPopulatingGiftsArray] = useState(true)
    const [allGiftsByBias] = useState([])

    const getByArtist = () => { 
        if(props.gifts.length === 0) 
            return
        //if gift, then prop each gift settings to GiftComponent, then push that into AllGiftsByBias
        if(allGiftsByBias.length === 0) 
            for(let i = 0; i < props.gifts.length; i++)
                allGiftsByBias.push(
                    <GiftComponent
                        key={i}
                        imageurl={props.gifts[i].imageurl}
                        title={props.gifts[i].title}
                        type={props.gifts[i].type}
                        user={props.gifts[i].user}
                        amountpaid={props.gifts[i].amountpaidsofar}
                        amountneeded={props.gifts[i].amountneeded}
                        dateremaining={props.gifts[i].dateending} />
                )
    }

    useEffect(() => {
        getByArtist()
        setIsPopulatingGiftsArray(false)
    }, [])

    const responsive = { //Carousel settings
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

    if (isPopulatingGiftsArray) return null
    else return <PinnedComponent //Return PinnedComponent with conditional props for container and gifts
                    userBias={props.userBias} 
                    container={
                        allGiftsByBias.length === 0? "carousel-nogift-container":
                        "carousel-background-container"
                    }
                    gifts={
                        allGiftsByBias.length === 0? "No Gifts to Post Yet!":
                        <Carousel 
                        responsive={responsive} 
                        showDots={true}
                        customDot={<CustomDot/>}
                        containerClass={allGiftsByBias.length < 3? "carousel-without-dot" : "carousel-with-dot"}
                        >
                            {allGiftsByBias}
                        </Carousel>
                    }
                />
}

export default PinnedSection