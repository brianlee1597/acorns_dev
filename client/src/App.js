import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

import Nav from './Navigation/Nav'
import Login from './Auth/Login'
import LandingPage from './LandingPage/LandingPage'
import DonationPage from './Donations/DonationPage';

import './App.scss';

const App = () => {
    // const [backgroundColor, setBackgroundColor] = useState('black')
    // const url = useReactPath()

    // useEffect(() => {
    //     if(url === '/'){
    //         setBackgroundColor('linear-gradient(to top, #fffcdc, #d9a7c7)');
    //     }else{
    //         setBackgroundColor('green');
    //     }
    // },[url]);

    return (
        <Router>
            <div className="App">
                <Nav />
                <div className="Content">
                    <Switch>
                        <Route exact path="/">
                            <LandingPage/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
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
                      title: 'Acorns',
                      url: 'https://yuque.com',
                      description: '知识创作与分享工具',
                      openExternal: true,
                    },
                  ]}
                  bottom="Copyright 2021 Acorns"
                  backgroundColor="#333333"
                />
            </div>
        </Router>
        
    )
}

export default App