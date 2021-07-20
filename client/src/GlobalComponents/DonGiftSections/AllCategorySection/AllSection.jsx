/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios"

import Line from "../Line"
import Title from "../Title"
import IndividualBubble from "../IndividualBubble"
import GridThree from './GridThree'
import GridFour from './GridFour'
import EachArtist from './EachArtist'
import WindowDimensions from '../../../Hooks/WindowDimension'

import './AllSection.scss'

export default function AllSection(props) {

    const {height, width} = WindowDimensions()

    const [components, setComponents] = useState([])
    const [allFourGridData, setAllFourGridData] = useState([]) //the fourgrid/three grid is separated for react loading
    const [allThreeGridData, setAllThreeGridData] = useState([]) //animation reasons
    const [typeOfData, setTypeOfData] = useState('artists')
    const [isFetchingAPI, setIsFetchingAPI] = useState(true)

    // const getAllGifts = () => {
    //     axios.get('/api/allgifts')
    //     .then(response => response.data)
    //     .then(component => {
    //         setComponents(component.map((eachComponent) => <IndividualBubble
    //                 key={eachComponent.id}
    //                 imageurl={eachComponent.imageurl}
    //                 title={eachComponent.title}
    //                 type={eachComponent.type}
    //                 user={eachComponent.user}
    //                 amountpaid={eachComponent.amountpaidsofar}
    //                 amountneeded={eachComponent.amountneeded}
    //                 percentagepaid={eachComponent.paidtoneededratio.toString()}
    //                 dateremaining={eachComponent.dateending}
    //                 artist={eachComponent.artist} />)
    //         )
    //         setIsFetchingAPI(false)
    //     })
    //     .catch(error => console.log(error))
    // }

    const getAllDonations = () => {
        axios.get('/api/getalldonations')
        .then(response => response.data)
        .then(component => {
            // setComponents(component.map((eachComponent) => <IndividualBubble
            // key={eachComponent.id}
            // imageurl={eachComponent.imageurl}
            // title={eachComponent.title}
            // type={eachComponent.type}
            // user={eachComponent.user}
            // amountpaid={eachComponent.amountpaidsofar}
            // amountneeded={eachComponent.amountneeded}
            // percentagepaid={eachComponent.paidtoneededratio.toString()}
            // dateremaining={eachComponent.dateending}
            // artist={eachComponent.artist} />)
            // )
            setIsFetchingAPI(false)
        })
        .catch(error => console.log(error))
    }

    const getGiftsByArtist = artist => {
        setTypeOfData('gifts')
        setIsFetchingAPI(true)
        axios.post("/api/getgiftsby/artist", {artist: artist})
        .then(response => response.data)
        .then(gifts => setAllThreeGridData(gifts.map(gift => <IndividualBubble
            key={gift.id}
            imageurl={gift.imageurl}
            title={gift.title}
            type={gift.type}
            user={gift.user}
            amountpaid={gift.amountpaidsofar}
            amountneeded={gift.amountneeded}
            percentagepaid={gift.paidtoneededratio.toString()}
            dateremaining={gift.dateending}
            artist={gift.artist} />)
        ))
        setIsFetchingAPI(false)
    }

    const getAllArtists = pageUrl => {
        axios.get(`/api/getallartistsin/${pageUrl}`)
        .then(response => response.data)
        .then(artists => setAllFourGridData(artists.map(
            artist => <EachArtist key={artist} name={artist} getGifts={getGiftsByArtist}/>
            )
        ))
        setIsFetchingAPI(false)
    }

    useEffect(() =>{
        getAllArtists(props.pageUrl)
    }, [])

    if (isFetchingAPI) return null
    else if (typeOfData === 'artists') return (
        <div className="all-container" style={
        {marginTop: props.userBias !== 'nouser' && 
        width <= 415? '25px': width <= 900? '25px': '35px' }}>
            <Title pinned={false} content="전체보기"/>
            <Line/>
            <GridFour render={allFourGridData}/>
        </div>
    )
    else return (
        <div className="all-container" style={
            {marginTop: props.userBias !== 'nouser' && 
            width <= 415? '25px': width <= 900? '25px': '35px' }}>
            <Title pinned={false} content="전체보기"/>
            <Line/>
            <GridThree render={allThreeGridData}/>
        </div>
    )
}