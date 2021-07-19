/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios"

import Line from "./Line"
import Title from "./Title"
import GiftComponent from "./GiftComponent"

import './AllGiftSection.scss'

export default function AllGiftSection() {

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


    // for(let i = 0; i <20; i++) {
    //     bleh.push(                        
    //     <GiftComponent
    //     imageurl={'https://media2.giphy.com/media/5kq0GCjHA8Rwc/giphy.gif?cid=790b7611086411988cf1b18c0a113fafe714db9a405e0f8e&rid=giphy.gif&ct=g'}
    //     title={'Never Gonna Give You Up'}
    //     type={'Never Gonna'}
    //     user={'Let You Down'}
    //     amountpaid={'Never Gonna'}
    //     amountneeded={'Turn Around And'}
    //     percentagepaid={'40'}
    //     dateremaining={'Desert You'} />
    //     )
    // }

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
        <div className="allgifts-container">
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