import './LandingPage.scss'
import InfoCarousel from './InfoCarousel'
import Dashboard from './Dashboard'
import Particles from 'react-particles-js'
import WindowDimensions from '../Hooks/WindowDimension'

const LandingPage = () => {

    const {height, width} = WindowDimensions()
    const value = width <= 910? 30: 50

    return (
        <div id="landing-page">
            <Particles 
                className="particle-background"
                params={{
	                "particles": {
	                    "number": {
	                        "value": value
	                    },
	                    "size": {
	                        "value": 3
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