import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from './LandingPage/Navigation/Nav'
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
                        <Route path="/donations">
                            <DonationPage/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App