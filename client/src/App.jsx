import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from 'rc-footer'
import axios from "axios"

import Navigation from './Navigation/Navigation'
import BottomNavigation from './Navigation/BottomNavigation'
import Login from './Auth/Login'
import Register from './Auth/Register'
import LandingPage from './LandingPage/LandingPage'
import DonationPage from './Donations/DonationPage'
import GiftsPage from './Gifts/GiftsPage.jsx'
import PromotePage from './Promote/PromotePage'
import WindowDimensions from './Hooks/WindowDimension'

import 'rc-footer/assets/index.css';
import './App.scss';

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const { height, width } = WindowDimensions()

    const [user, setUser] = useState({}) //initialize user state and settings
    const [appIsFetchingAPI, setIsFetchingAPI] = useState(true) //state boolean to make sure app returns after fetch is done
    const [loggedIn, setLoggedIn] = useState(false) //login state
    const [donationsByBias, setDonationsByBias] = useState([]) //initialize donations array
    const [giftsByBias, setGiftsByBias] = useState([])

    const logout = () => { //logout function
        axios.post('/logout') //post to logout, which then logs out user in the backend
        .then(response => {
            console.log(response) //resolve promise
            window.location.href = '/' //then return to main page
        })
        .catch(error => console.log(error))
    }
    
    useEffect(() => { //run when component mounts
        axios.get('/api/getuser') //get login status from backend
        .then(async user => {
            if(user.data !== 'nouser') {
                setUser(user.data)
                setLoggedIn(true)
                const biasedGifts = await axios.post("/api/getbiased?collection=gifts", {artist: user.data.bias}),
                biasedDonations   = await axios.post('/api/getbiased?collection=donations', {artist: user.data.bias})
                return [ biasedGifts, biasedDonations ]
            }
            else return [{data: "nogiftstothatartist"}, {data: "nodonationstothatartist"}]
        })
        .then(response => {
            if(response[0].data !== "nogiftstothatartist")
                setGiftsByBias(response[0].data)
            if(response[1].data !== "nodonationstothatartist")
                setDonationsByBias(response[1].data)
        })
        .catch(error => console.log(error))

        setIsFetchingAPI(false) //set api call to done
    }, [])

    if (appIsFetchingAPI) return null
    else return (
        <Router>
            <div className="App">
                <Navigation user={user} loggedIn={loggedIn} logout={logout}/>
                <div className="navigation-margin" style={{display: width < 415? 'none': 'block'}}></div>
                <div className="Content">
                    <Switch>
                        <Route exact path="/">
                            <LandingPage loggedIn={loggedIn} logout={logout}/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/register">
                            <Register/>
                        </Route>
                        <Route exact path="/charity">
                            <DonationPage userBias={loggedIn? user.bias: "nouser"} 
                            componentsByBias={donationsByBias} pageUrl="donations"/>
                        </Route>
                        <Route exact path="/gifts">
                            <GiftsPage userBias={loggedIn? user.bias: "nouser"} 
                            componentsByBias={giftsByBias} pageUrl="gifts"/>
                        </Route>
                        <Route exact path="/promote">
                            <PromotePage/>
                        </Route>
                    </Switch>
                </div>
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
            </div>
        </Router>
    )
}

export default App