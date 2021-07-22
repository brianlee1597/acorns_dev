import { ArtistPictureMap } from './ArtistPictureMap'
import './EachArtist.scss'

const EachArtist = (props) => (
    <div className="each-artist-container" onClick={() => props.getComponents(props.name)} style={{
        background: `url(${ArtistPictureMap.get(props.name)}) no-repeat center center`,
        backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
        <h3>{props.name}</h3>
        <div className="background-gradient"/>
    </div>
)

export default EachArtist