import { PictureMap } from '../../PictureMap'
import { LangMap } from '../../LanguageMap'
import './SquareGridComponent.scss'

export default function SquareGridComponent (props) {
    /* title of each square block, and the category it belongs to. 
       (ex: artist, or donation/gift type) */
    const [ specificcategory, category ] = [ props.specificcategory, props.category ]
    const [ pageUrl, sortby ] = [props.pageUrl, props.sortby]

    return (
        <div name="squareGrid" className="each-component-container" 
        onClick={() => {
            props.setSpecificCategory(specificcategory)

            props.getComponents(pageUrl, "all", 
            category, specificcategory, sortby, "three")
        }} 
        style={{
        background: `url(${PictureMap[category].get(specificcategory)}) no-repeat center center`,
        backgroundPosition: 'center', backgroundSize: 'cover'
        }}>
            <h3 name="title">{LangMap[category].get(specificcategory).english}</h3>
            <div name="backgroundCoverForTitle" className="background-gradient"/>
        </div>
    )
}