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
        background: `silver no-repeat center center`,
        backgroundPosition: 'center', backgroundSize: 'cover'
        }}>
            <h3 name="title">{specificcategory}</h3>
            <div name="backgroundCoverForTitle" className="background-gradient"/>
        </div>
    )
}

// url(${PictureMap[category].get(specificcategory)})
// LangMap[category].get(specificcategory).english