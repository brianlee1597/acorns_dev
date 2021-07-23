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
    const [isFourGrid, setIsFourGrid]   = useState(true)
    const [sortparam, setSortparam] = useState('deadline')
    const [category, setCategory] = useState('artist')
    const [specificCategory, setSpecificCategory] = useState("")

    const setGridstoLoading = () => {
        //grey silhouette while loading
        const threeGridData = [...Array(5)].map((e, index) => <IndividualBubbleLoading key={index}/>)
        setAllThreeGridData(threeGridData)
        const fourGridData = [...Array(6)].map((e, index) => <SquareGridLoading key={index}/>)
        setAllFourGridData(fourGridData)
    }

    const setFourGrid = (datas, category) => {
        setAllFourGridData(datas.map(
            (specificcategory, index) => <SquareGridComponent 
            key={index} category={category} specificcategory={specificcategory}
            pageUrl={props.pageUrl} sortby={sortparam}
            getComponents={getComponents} setSpecificCategory={setSpecificCategory}
            /> )
        )
    }

    const setThreeGrid = datas => {
        setAllThreeGridData(datas.map(
            (data, index) => <IndividualBubble
            key={index} title={data.title} type={data.type}
            user={data.user} imageurl={data.imageurl}
            amountpaid={data.amountpaidsofar}
            amountneeded={data.amountneeded}
            percentagepaid={data.paidtoneededratio.toString()}
            dateremaining={data.dateending}
            artist={data.artist}
            /> )
        )
    }

    const getComponents = (pageUrl, filter, category, specificcategory, sortby, gridview) => {
        setIsFourGrid(gridview === "three"? false: true)
        setGridstoLoading()
        axios.get(`/api/getcomponents?collection=${pageUrl}&filter=${filter}&category=${category}&sortby=${sortby}&specificcategory=${specificcategory}&gridview=${gridview}`)
        .then(response => response.data)
        .then(datas => gridview === "four"? setFourGrid(datas, category): 
                                            setThreeGrid(datas) 
        )
        .catch(error => console.log(error))
    }

    useEffect(() => {
        isFourGrid === true?
            getComponents(props.pageUrl, "all", category, "", sortparam, "four"):
            getComponents(props.pageUrl, "all", category, specificCategory, sortparam, "three")
    }, [sortparam])

    return (
        <main name="all-section" className="all-container" style={{ 
        marginTop: props.userBias !== 'nouser' && width <= 415? 
        '25px': width <= 900? '25px': '50px' 
        }}>
            <div name="section-nav" className="categories-container">
                <Title pinned={false} content="전체보기"/>
                <CategoryBar 
                getComponents={getComponents}
                setSortparam={setSortparam}
                setCategory={setCategory}
                pageUrl={props.pageUrl}/>
            </div>
            <div name="components-grid">
            { isFourGrid === true? <GridFour render={allFourGridData}/>:
                                 <GridThree render={allThreeGridData}/> }
            </div>
        </main>
    )
}