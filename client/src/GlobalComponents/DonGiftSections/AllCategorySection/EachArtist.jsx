import { ArtistPictureMap } from './ArtistPictureMap'
import './EachArtist.scss'

export default function EachArtist (props) {

    return (
        <div className="each-artist-container" onClick={() => props.getComponents(props.name)} style={{
            background: `url(${ArtistPictureMap.get(props.name)}) no-repeat center center`,
            backgroundSize: 'cover', backgroundPosition: 'center'
        }}>
            <h3>{props.name}</h3>
            <div className="background-gradient"/>
        </div>
    )
}