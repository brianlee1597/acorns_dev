import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import WindowDimensions from '../../Hooks/WindowDimension'
import GiftComponent from './GiftComponent'
import Line from './Line'
import Title from './Title'

import "react-multi-carousel/lib/styles.css";
import './PinnedSection.scss'

SwiperCore.use([Navigation]);

const PinnedSection = props => { //The whole gift bias pinned section

    if (props.userBias === "nouser") //if user is not logged in, return nothing
        return null

    //the title above PinnedComponent changes based on bias
    const title = props.userBias === "Aespa"? "가장 소중한 친구, MY":
    props.userBias === "BTS"? "Army, One and Only":
    "Blink, For You"

    // eslint-disable-next-line no-unused-vars
    const {height, width} = WindowDimensions()

    return ( //PinnedComponent renders its inner stuff based on the conditional props from PinnedSection
        <>
            <div className="giftpinned-container">
                <Title pinned={true} content={"  " + title}/>
                <Line/>
                {props.gifts.length === 0? <div className="nogift-exists">No Gifts to Post Yet!</div>: 
                <Swiper 
                className="gift-exists"
                slidesPerView={width < 415? 'auto':width < 900? 2: 3}
                navigation
                speed={750}
                >
                    {props.gifts.map(eachGift => {
                        return <SwiperSlide style={{width: width < 415? "75%": "0%"}} key={eachGift.title}>
                        <GiftComponent
                        imageurl={eachGift.imageurl}
                        title={eachGift.title}
                        type={eachGift.type}
                        user={eachGift.user}
                        amountpaid={eachGift.amountpaidsofar}
                        amountneeded={eachGift.amountneeded}
                        percentagepaid={eachGift.paidtoneededratio}
                        dateremaining={eachGift.dateending} />
                        </SwiperSlide>
                    })}
                </Swiper>
                }
            </div>
        </>
    )
}

export default PinnedSection