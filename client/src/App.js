import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

import Navigation from './Navigation/Navigation'
import Login from './Auth/Login'
import Register from './Auth/Register'
import LandingPage from './LandingPage/LandingPage'
import DonationPage from './Donations/DonationPage';
import axios from "axios";

import './App.scss';

const App = () => {

    const [user, setUser] = useState({})
    const [appIsFetchingAPI, setIsFetching] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        axios.get('/userstatus')
        .then(response => {
            if(response.data !== 'nologin') {
                setUser(response.data)
                setLoggedIn(true)
            }
            setIsFetching(false)
        })
        .catch(error => console.log(error))
    }, [])

    if (appIsFetchingAPI) return null
    else return (
        <Router>
            <div className="App" style={{background: loggedIn? user.backgroundcolor: 'white'}}>
                <Navigation loggedIn={loggedIn}/>
                <div className="Content">
                    <Switch>
                        <Route exact path="/">
                            <LandingPage/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/register">
                            <Register/>
                        </Route>
                        <Route path="/donations">
                            <DonationPage/>
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
                />
            </div>
        </Router>   
    )
}

export default App