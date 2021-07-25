/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from 'rc-footer'
import axios from "axios"

import Navigation from './Navigation/Navigation'
import BottomNavigation from './Navigation/BottomNavigation'
import Login from './Auth/Login'
import Register from './Auth/Register'
import MyProfile from './Auth/MyProfile'
import LandingPage from './LandingPage/LandingPage'
import DonationPage from './Donations/DonationPage'
import GiftsPage from './Gifts/GiftsPage.jsx'
import PromotePage from './Promote/PromotePage'
import WindowDimensions from './Hooks/WindowDimension'

import 'rc-footer/assets/index.css'
import './App.scss'

export default function App() {

    /* ----- Component States -----*/
    const { height, width } = WindowDimensions()
    
    const [donations, setDonations] = useState([])
    const [gifts, setGifts] = useState([])
    
    const [appState, setAppState] = useState({ 
        isLoadingUser: true, loggedIn: false, user: {} 
    })
    /* ----- Component States -----*/

    /* ----- Component Functions -----*/
    const logout = () => axios.post('/logout').then(window.location.href = "/"),

    biasedDonsAndGifts = async (user) => [ 
        await axios.post('/api/getbiased?collection=donations', {artist: user.bias}),
        await axios.post("/api/getbiased?collection=gifts"    , {artist: user.bias}) 
    ],

    saveLoginStatAndReturnBiasData = user => {
        setAppState({ user: user, loggedIn: true })
        return biasedDonsAndGifts(user)
    }
    /* ----- Component Functions -----*/
    
    useEffect(() => {
        const noDonasAndGifts = [{data: "nodonas"}, {data: "nogifts"}]

        axios.get('/api/getloginstatus') 
        .then(response => response.data)
        .then(userdata => userdata === 'nologin'? noDonasAndGifts:
                          saveLoginStatAndReturnBiasData(userdata))
        .then(dons_gifts => {
            const [donas, gifts] = [dons_gifts[0].data, dons_gifts[1].data]
            setDonations(donas === "nodonas"? []: donas)
            setGifts(gifts === "nogifts"? []: gifts)
        })
        .then(setAppState({ isLoadingUser: false }))
        .catch(error => console.log(error))
    }, ['onceOnLoad'])

    return appState.isLoadingUser? null: (
        <section className="App">
            <Router>
                <Navigation user={appState.user} loggedIn={appState.loggedIn} logout={logout}/>
                <div className="navigation-margin" style={{display: width < 415? 'none': 'block'}}/>
                <main className="Content">
                    <Switch>
                        <Route exact path="/">
                            <LandingPage loggedIn={appState.loggedIn} logout={logout}/>
                        </Route>

                        <Route exact path="/login"> <Login/> </Route>

                        <Route exact path="/register"> <Register/> </Route>

                        <Route exact path="/myprofile"> <MyProfile/> </Route>

                        <Route exact path="/charity">
                            <DonationPage userBias={appState.loggedIn? appState.user.bias: "nouser"} 
                            componentsByBias={donations} pageUrl="donations"/>
                        </Route>

                        <Route exact path="/gifts">
                            <GiftsPage userBias={appState.loggedIn? appState.user.bias: "nouser"} 
                            componentsByBias={gifts} pageUrl="gifts"/>
                        </Route>
                        
                        <Route exact path="/promote">
                            <PromotePage/>
                        </Route>
                    </Switch>
                </main>
                <Footer
                  columns={[
                    {
                      icon: (
                        <img src="https://img.icons8.com/material-outlined/100/000000/nut.png" alt="footericon"/>
                      ),
                      title: 'Acorns'
                    },
                    {
                        title: 'Donations'
                    },
                    {
                        title: 'Gifts'
                    },
                    {
                        title: 'Campaigns'
                    },
                    {
                        title: 'Community'
                    }
                  ]}
                  bottom="Copyright 2021 Acorns"
                  backgroundColor="#333333"
                  style={{display: width <= 415? 'none': 'block'}}
                />
                <BottomNavigation logout={logout}/>
            </Router>
        </section>
    )
}