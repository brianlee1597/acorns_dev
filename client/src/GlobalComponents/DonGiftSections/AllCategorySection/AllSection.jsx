/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios"

import Line from "../Line"
import Title from "../Title"
import IndividualBubble from "./IndividualBubble"
import IndividualBubbleLoading from './IndividualBubbleLoading'
import SquareGridComponent from './SquareGridComponent'
import SquareGridLoading from './SquareGridLoading'
import GridThree from './GridThree'
import GridFour from './GridFour'
import CategoryBar from './CategoryBar'
import WindowDimensions from '../../../Hooks/WindowDimension'

import './AllSection.scss'

export default function AllSection(props) {

    const {height, width} = WindowDimensions()
    const [allFourGridData, setAllFourGridData] = useState([]) //the fourgrid/three grid is separated for react loading
    const [allThreeGridData, setAllThreeGridData] = useState([]) //animation reasons
    const [typeOfData, setTypeOfData] = useState('artists')
    const [isFetchingAPI, setIsFetchingAPI] = useState(true)

    const resetAllComponentsAndSetStateToFetch = () => {
        setIsFetchingAPI(true)

        const threeGridData = [...Array(5)].map((index) => <IndividualBubbleLoading key={index}/>)
        setAllThreeGridData(threeGridData)

        const fourGridData = [...Array(6)].map((index) => <SquareGridLoading key={index}/>)
        setAllFourGridData(fourGridData)
    }

    
    //do more cleanup later
    const getComponentsByArtist = artist => {
        const components = props.pageUrl
        setTypeOfData('componentsbyartist')
        resetAllComponentsAndSetStateToFetch()
        setIsFetchingAPI(true)
        axios.get(`/api/get${components}by/artist?artist=${artist}`)
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
        resetAllComponentsAndSetStateToFetch()
        setIsFetchingAPI(true)
        axios.post(`/api/get${components}by/type`, {type: type})
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

    const getAllBlocksOf = (category, pageUrl) => { //for artists / types 4 grid format
        setTypeOfData(category)
        resetAllComponentsAndSetStateToFetch()
        setIsFetchingAPI(true)
        axios.get(`/api/getall${category}in/${pageUrl}`)
        .then(response => response.data)
        .then(artists => setAllFourGridData(artists.map(
            artist => <SquareGridComponent key={artist} title={artist} category={category} 
            getComponents={category === 'artists'? getComponentsByArtist: getComponentsByType}
            />)
        ))
        setIsFetchingAPI(false)
    }

    const getAll = (category, pageUrl) => {
        setTypeOfData(category)
        resetAllComponentsAndSetStateToFetch()
        setIsFetchingAPI(true)
        axios.get(`/api/getallby?collection=${pageUrl}&sortparam=${category}`)
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
    }

    useEffect(() =>{
        getAllBlocksOf('artists', props.pageUrl)
    }, [])

    return (
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
            {/* { isFetchingAPI? 
            <GridThree render={<IndividualBubbleLoading/>}/>: */}
              {typeOfData === 'artists' || typeOfData === 'types'? 
              <GridFour render={allFourGridData}/>:
              <GridThree render={allThreeGridData}/> }
        </div>
    )
}