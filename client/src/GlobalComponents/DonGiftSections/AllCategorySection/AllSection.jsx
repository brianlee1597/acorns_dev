/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios"

import Line from "../Line"
import Title from "../Title"
import IndividualBubble from "../IndividualBubble"
import GridThree from './GridThree'
import GridFour from './GridFour'
import SquareGridComponent from './SquareGridComponent'
import CategoryBar from './CategoryBar'
import WindowDimensions from '../../../Hooks/WindowDimension'

import './AllSection.scss'

export default function AllSection(props) {

    const {height, width} = WindowDimensions()
    const [allFourGridData, setAllFourGridData] = useState([]) //the fourgrid/three grid is separated for react loading
    const [allThreeGridData, setAllThreeGridData] = useState([]) //animation reasons
    const [typeOfData, setTypeOfData] = useState('artists')
    const [isFetchingAPI, setIsFetchingAPI] = useState(true)

    
    //do more cleanup later
   
    const getComponentsByArtist = artist => {
        const components = props.pageUrl
        setTypeOfData('componentsbyartist')
        setAllFourGridData([]) //resets the other grid so that animations don't look weird
        setIsFetchingAPI(true)
        axios.post(`/api/get${components}by/artist`, {artist: artist})
        .then(response => response.data)
        .then(datas => setAllThreeGridData(datas.map(data => <IndividualBubble
            key={data.id}
            imageurl={data.imageurl}
            title={data.title}
            type={data.type}
            user={data.user}
            amountpaid={data.amountpaidsofar}
            amountneeded={data.amountneeded}
            percentagepaid={data.paidtoneededratio.toString()}
            dateremaining={data.dateending}
            artist={data.artist} />)
        ))
        setIsFetchingAPI(false)
    }

    const getComponentsByType = type => {
        const components = props.pageUrl
        setTypeOfData('giftsbytype')
        setAllFourGridData([])
        setIsFetchingAPI(true)
        axios.post(`/api/get${components}by/type`, {type: type})
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

    const getAllBlocksOf = (category, pageUrl) => {
        setTypeOfData(category)
        setAllThreeGridData([])
        setIsFetchingAPI(true)
        axios.get(`/api/getall${category}in/${pageUrl}`)
        .then(response => response.data)
        .then(artists => setAllFourGridData(artists.map(
            artist => <SquareGridComponent key={artist} name={artist} getComponents={
                category === 'artists'? getComponentsByArtist: getComponentsByType
            }/>
            )
        ))
        setIsFetchingAPI(false)
    }

    const getAll = (category, pageUrl) => {
        setTypeOfData(category)
        setAllFourGridData([])
        setIsFetchingAPI(true)
        axios.get(`/api/all${pageUrl}by${category}`)
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

    useEffect(() =>{
        getAllBlocksOf('artists', props.pageUrl)
    }, [])

    if (isFetchingAPI) return null
    else if (typeOfData === 'artists' || typeOfData === 'types') return (
        <div className="all-container" style={
        {marginTop: props.userBias !== 'nouser' && 
        width <= 415? '25px': width <= 900? '25px': '50px'}}>
            <div className="categories-container">
                <Title pinned={false} content="전체보기"/>
                <CategoryBar 
                getAll={getAll}
                getAllBlocksOf={getAllBlocksOf} 
                pageUrl={props.pageUrl}/>
            </div>
            <GridFour render={allFourGridData}/>
        </div>
    )
    else return (
        <div className="all-container" style={
            {marginTop: props.userBias !== 'nouser' && 
            width <= 415? '25px': width <= 900? '25px': '50px' }}>
            <div className="categories-container">
                <Title pinned={false} content="전체보기"/>
                <CategoryBar 
                getAll={getAll}
                getAllBlocksOf={getAllBlocksOf} 
                pageUrl={props.pageUrl}/>
            </div>
            <GridThree render={allThreeGridData}/>
        </div>
    )
}