import { PictureMap } from '../../PictureMap'
import { LangMap } from '../../LanguageMap'
import './SquareGridComponent.scss'

export default function SquareGridComponent (props) {

    let title = props.title
    let category = props.category

    return (
        <div className="each-component-container" onClick={() => props.getComponents(title)} style={{
            background: `url(${PictureMap[category].get(title)}) no-repeat center center`,
            backgroundPosition: 'center', backgroundSize: 'cover'
        }}>
            <h3>{LangMap[category].get(title).korean}</h3>
            <div className="background-gradient"/>
        </div>
    )
}