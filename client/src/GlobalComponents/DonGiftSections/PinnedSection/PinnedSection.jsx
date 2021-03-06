import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import WindowDimensions from '../../../Hooks/WindowDimension'
import IndividualBubble from '../AllCategorySection/IndividualBubble'
import Line from '../Line'
import Title from '../Title'

import './PinnedSection.scss'

SwiperCore.use([Navigation]);

const PinnedSection = props => { //The whole gift bias pinned section

    if (props.userBias === "nouser") //if user is not logged in, return nothing
        return null

    //the title above PinnedComponent changes based on bias
    const titleMap = new Map([
        ["Aespa", "가장 소중한 친구, MY"],
        ["Blackpink", "Blink, For You"],
        ["BTS", "Army, One and Only"],
        ["G-Dragon", "지드래곤 테스트"],
        ["Jessi", "제시누나"],
        ["SungSiKyung", "Hi Claire"]
    ])


    // eslint-disable-next-line no-unused-vars
    const {height, width} = WindowDimensions()

    return ( //PinnedComponent renders its inner stuff based on the conditional props from PinnedSection
        <>
            <div className="pinned-container">
                <Title pinned={true} content={"  " + titleMap.get(props.userBias)}/>
                <Line/>
                {props.componentsByBias.length === 0? <div className="nobias-exists">No {props.pageUrl} posted yet!</div>: 
                <Swiper 
                className="bias-exists"
                slidesPerView={width < 415? 'auto':width < 900? 2: 3}
                navigation
                speed={750}
                >
                    {props.componentsByBias.map(eachComponent => {
                        return <SwiperSlide style={{width: width < 415? "75%": "0%"}} key={eachComponent.title}>
                        <IndividualBubble
                        imageurl={eachComponent.imageurl}
                        title={eachComponent.title}
                        type={eachComponent.type}
                        user={eachComponent.user}
                        amountpaid={eachComponent.amountpaidsofar}
                        amountneeded={eachComponent.amountneeded}
                        percentagepaid={eachComponent.paidtoneededratio}
                        dateremaining={eachComponent.dateending}
                        artist={eachComponent.artist} />
                        </SwiperSlide>
                    })}
                </Swiper>
                }
            </div>
        </>
    )
}

export default PinnedSection