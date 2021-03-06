import Particles from 'react-particles-js'
import WindowDimensions from '../Hooks/WindowDimension'

import InfoCarousel from './InfoCarousel'
import Dashboard from './Dashboard'
import MobileTopBtns from './MobileTopBtns'

import './LandingPage.scss'

const LandingPage = props => {

    // eslint-disable-next-line no-unused-vars
    const { height, width } = WindowDimensions()
    const value = width <= 910? 30: 50

    return (
        <div id="landing-page">
			<MobileTopBtns loggedIn={props.loggedIn} logout={props.logout}/>
            <Particles 
                className="particle-background"
                params={{
	                "particles": {
	                    "number": {
	                        "value": value
	                    },
	                    "size": {
	                        "value": 3
	                    },
						"color": {
							"value": "black"
						}
	                },
	                "interactivity": {
	                    "events": {
	                        "onhover": {
	                            "enable": true,
	                            "mode": "repulse"
	                        }
	                    }
	                }
	            }}
            />
            <InfoCarousel />
            <Dashboard/>
        </div>
    )
}

export default LandingPage