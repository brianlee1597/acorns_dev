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
    const [typeOfData, setTypeOfData] = useState('') //this state will determine 3 element grid or 4 ele grid

    const setGridstoLoading = () => {
        //grey silhouette while loading
        const threeGridData = [...Array(5)].map((e, index) => <IndividualBubbleLoading key={index}/>)
        setAllThreeGridData(threeGridData)
        const fourGridData = [...Array(6)].map((e, index) => <SquareGridLoading key={index}/>)
        setAllFourGridData(fourGridData)
    }

    
    //do more cleanup later
    const getComponentsByArtist = artist => { //when user presses on 아티스트별
        const components = props.pageUrl
        setTypeOfData('componentsbyartist')
        setGridstoLoading()
        axios.get(`/api/get${components}by/artist?artist=${artist}`)
        .then(response => response.data)
        .then(datas => setAllThreeGridData(datas.map((data, index) => <IndividualBubble
            key={index}
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

    const getComponentsByType = type => {  //when user presses on 분야별
        const components = props.pageUrl
        setTypeOfData('giftsbytype')
        setGridstoLoading()
        axios.post(`/api/get${components}by/type`, {type: type})
        .then(response => response.data)
        .then(datas => setAllThreeGridData(datas.map((data, index) => <IndividualBubble
            key={index}
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

    const getAllBlocksOf = (category, pageUrl) => { //for artists / types 4 grid format
        setTypeOfData(category)
        setGridstoLoading()
        axios.get(`/api/getall${category}in/${pageUrl}`)
        .then(response => response.data)
        .then(artists => setAllFourGridData(artists.map(
            (artist, index) => <SquareGridComponent key={index} title={artist} category={category} 
            getComponents={category === 'artists'? getComponentsByArtist: getComponentsByType}
            />)
        ))
    }

    const getAll = (category, pageUrl) => { //for 3 grid components
        setTypeOfData(category)
        setGridstoLoading()              //gifts or donations by enddate/funding/goal           
        axios.get(`/api/getallby?collection=${pageUrl}&sortparam=${category}`)
        .then(response => response.data)
        .then(datas => setAllThreeGridData(datas.map((data, index) => <IndividualBubble
            key={index}
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

    useEffect(() => getAllBlocksOf('artists', props.pageUrl), ['onceOnLoad'])

    return (
        <main name="all-section" className="all-container" style={{ 
        marginTop: props.userBias !== 'nouser' && width <= 415? 
        '25px': width <= 900? '25px': '50px' 
        }}>
            <div name="section-nav" className="categories-container">
                <Title pinned={false} content="전체보기"/>
                <CategoryBar 
                getAll={getAll}
                getAllBlocksOf={getAllBlocksOf} 
                pageUrl={props.pageUrl}/>
            </div>
            <div name="components-grid">
            { typeOfData === 'artists' || typeOfData === 'types'? 
                <GridFour render={allFourGridData}/>:
                <GridThree render={allThreeGridData}/> }
            </div>
        </main>
    )
}