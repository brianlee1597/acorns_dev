/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios"

import Line from "./Line"
import Title from "./Title"
import GiftComponent from "./GiftComponent"
import WindowDimensions from '../../Hooks/WindowDimension'

import './AllGiftSection.scss'

export default function AllGiftSection(props) {

    const {height, width} = WindowDimensions()

    const [gifts] = useState([])
    const [isFetchingAPI, setIsFetchingAPI] = useState(true)

    const getAllGifts = () => {
        axios.get('/api/allgifts')
        .then(response => response.data)
        .then(gift => {
            for(let i = 0; i< gift.length; i++) {
                gifts.push(
                    <GiftComponent
                    key={i}
                    imageurl={gift[i].imageurl}
                    title={gift[i].title}
                    type={gift[i].type}
                    user={gift[i].user}
                    amountpaid={gift[i].amountpaidsofar}
                    amountneeded={gift[i].amountneeded}
                    percentagepaid={gift[i].paidtoneededratio.toString()}
                    dateremaining={gift[i].dateending} />
                )
            }
            setIsFetchingAPI(false)
        })
        .catch(error => console.log(error))
    }

    useEffect(() =>getAllGifts(), [])

    if (isFetchingAPI) return (
        <div className="allgifts-container">
        <Title pinned={false} content="전체보기"/>
        <Line/>
        <div className="giftcomponent-grid">
            loading...
        </div>
        </div>
    )
    else return (
        <div className="allgifts-container" style={
        {marginTop: props.userBias !== 'nouser' && 
        width <= 415? '25px': width <= 900? '50px': '75px' }}>
            <Title pinned={false} content="전체보기"/>
            <Line/>
            <div className="giftcomponent-grid">
                {gifts.map(ricky => {
                    return ricky
                })}
            </div>
        </div>
    )
}