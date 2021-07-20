import { ArtistPictureMap } from './ArtistPictureMap'
import './EachArtist.scss'

export default function EachArtist (props) {

    console.log(props.name)

    return (
        <div className="each-artist-container" onClick={() => props.getGifts(props.name)} style={{
            background: `url(${ArtistPictureMap.get(props.name)}) no-repeat center center`,
            backgroundSize: 'cover', backgroundPosition: 'center'
        }}>
            <h3>{props.name}</h3>
            <div className="background-gradient"/>
        </div>
    )
}