/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios"

import Line from "../Line"
import Title from "../Title"
import IndividualBubble from "../IndividualBubble"
import WindowDimensions from '../../../Hooks/WindowDimension'

import './AllSection.scss'

export default function AllSection(props) {

    const {height, width} = WindowDimensions()

    const [components, setComponents] = useState([])
    const [isFetchingAPI, setIsFetchingAPI] = useState(true)

    const getAllGifts = () => {
        axios.get('/api/allgifts')
        .then(response => response.data)
        .then(component => {
            setComponents(component.map((eachComponent) => <IndividualBubble
                    key={eachComponent.id}
                    imageurl={eachComponent.imageurl}
                    title={eachComponent.title}
                    type={eachComponent.type}
                    user={eachComponent.user}
                    amountpaid={eachComponent.amountpaidsofar}
                    amountneeded={eachComponent.amountneeded}
                    percentagepaid={eachComponent.paidtoneededratio.toString()}
                    dateremaining={eachComponent.dateending}
                    artist={eachComponent.artist} />)
            )
            setIsFetchingAPI(false)
        })
        .catch(error => console.log(error))
    }

    const getAllDonations = () => {
        axios.get('/api/getalldonations')
        .then(response => response.data)
        .then(donation => {
            console.log(donation)
            setIsFetchingAPI(false)
        })
        .catch(error => console.log(error))
    }

    useEffect(() =>{
        props.pageUrl === 'gifts'? getAllGifts():
        getAllDonations()
    }, [])

    if (isFetchingAPI) return (
        <div className="all-container">
        <Title pinned={false} content="전체보기"/>
        <Line/>
        <div className="component-grid">
            loading...
        </div>
        </div>
    )
    else return (
        <div className="all-container" style={
        {marginTop: props.userBias !== 'nouser' && 
        width <= 415? '25px': width <= 900? '50px': '75px' }}>
            <Title pinned={false} content="전체보기"/>
            <Line/>
            <div className="component-grid">
                {components}
            </div>
        </div>
    )
}