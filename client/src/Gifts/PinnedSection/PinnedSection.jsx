/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import axios from 'axios';
import PinnedComponent from './PinnedComponent';
import GiftComponent from './GiftComponent';
import CustomDot from './CustomDot';
import loading from '../../images/loading.gif'

import "react-multi-carousel/lib/styles.css";

const PinnedSection = props => { //The whole gift bias pinned section

    if (props.userBias === "nouser") //if user is not logged in, return nothing
        return null

    //fetching api state, initialized to make sure components load after fetch is done
    const [appIsFetchingAPI, setIsFetchingAPI] = useState(true)
    //array to keep all the retrived gift components for rendering
    const [allGiftsByBias] = useState([])

    //POST method to backend to get gift components by artist (bias)
    const getByArtist = () => { 
        axios.post("/api/getgiftsby/bias", {artist: props.userBias}) //the POST method
        .then(response => {
            //this constant should be a nogift text or an array of gift objects
            const allGifts = response.data

            //if no gift, let fetch be done and do nothing to allGiftsByBias array
            if(allGifts === "nogiftstothatartist") {
                setIsFetchingAPI(false)
                return 
            }

            //if gift, then prop each gift settings to GiftComponent, then push that into AllGiftsByBias
            for(let i = 0; i < allGifts.length; i++) {
                const eachGift = allGifts[i]
                allGiftsByBias.push(
                    <GiftComponent 
                        key={i} 
                        imageurl={eachGift.imageurl}
                        title={eachGift.title}
                        type={eachGift.type}
                        user={eachGift.user}
                        amountpaid={eachGift.amountpaidsofar}
                        amountneeded={eachGift.amountneeded}
                        dateremaining={eachGift.dateending}
                    />
                )
            }

            //set the fetch to done
            setIsFetchingAPI(false)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => getByArtist(), []) //call getByArtist function (POST method) on mount

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

    return <PinnedComponent //Return PinnedComponent with conditional props for container and gifts
                userBias={props.userBias} 
                container={
                    appIsFetchingAPI? "carousel-loading-container":
                    allGiftsByBias.length === 0? "carousel-nogift-container":
                    "carousel-background-container"
                }
                gifts={
                    appIsFetchingAPI? <img src={loading} alt="loading" style={{height: "150px"}}/>:
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