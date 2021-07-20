import { ArtistPictureMap } from './ArtistPictureMap'
import './SquareGridComponent.scss'

export default function SquareGridComponent (props) {

    return (
        <div className="each-component-container" onClick={() => props.getComponents(props.name)} style={{
            background: `url(${ArtistPictureMap.get(props.name)}) no-repeat center center`,
            backgroundPosition: 'center', backgroundSize: 'cover'
        }}>
            <h3>{props.name}</h3>
            <div className="background-gradient"/>
        </div>
    )
}