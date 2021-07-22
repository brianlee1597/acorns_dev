import { PictureMap } from '../../PictureMap'
import { LangMap } from '../../LanguageMap'
import './SquareGridComponent.scss'

export default function SquareGridComponent (props) {
    /* title of each square block, and the category it belongs to. 
       (ex: artist, or donation/gift type) */
    const [ title, category ] = [ props.title, props.category ]

    return (
        <div name="squareGrid" className="each-component-container" 
        onClick={() => props.getComponents(title)} 
        style={{
        background: `url(${PictureMap[category].get(title)}) no-repeat center center`,
        backgroundPosition: 'center', backgroundSize: 'cover'
        }}>
            <h3 name="title">{LangMap[category].get(title).english}</h3>
            <div name="backgroundCoverForTitle" className="background-gradient"/>
        </div>
    )
}