import { NavLink } from "react-router-dom";
import WindowDimensions from '../Hooks/WindowDimension'

export default function MobileTopBtns(props) {

    // eslint-disable-next-line no-unused-vars
    const { height, width } = WindowDimensions()

    return (
        <div style={{
			width: '100vw', height: '40px', display: width > 415? 'none': 'grid', placeItems: 'center',
			marginTop: '25px'
			}}>
				<div style={{
					margin: '0', padding: '0',
					width: '85vw', height: '100%',
					display: 'flex', flexDirection: 'row', 
					justifyContent: 'space-between', alignItems: 'center'
				}}>
				<h3 style={{margin: '0', padding: '0'}}>Acorns</h3>
				<NavLink to="/login" 
				style={{
				margin: '0', padding: '10px 20px',
				display: props.loggedIn? 'none': width > 415? 'none': 'block',
				textTransform: 'none', textDecoration: 'none',
				backgroundColor: 'black', color: 'white',
			    borderRadius: '5px'
				}}>
					Login
				</NavLink>
				<button style={{
				margin: '0', padding: '10px 20px',
				display: props.loggedIn && width < 415? 'block': 'none',
				textTransform: 'none', textDecoration: 'none',
				backgroundColor: 'black', color: 'white',
			    borderRadius: '5px'}} onClick={props.logout}>
					Logout
				</button>
				</div>
			</div>
    )
}