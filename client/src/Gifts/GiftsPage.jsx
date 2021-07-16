import PinnedComponent from './PinnedComponent.jsx'
import './GiftsPage.scss'

const GiftsPage = props => {

    return (
        <PinnedComponent userBias={props.userBias}/>
    )
}

export default GiftsPage