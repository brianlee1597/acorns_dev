import { LangMap } from "../../LanguageMap";
import './CategoryBar.scss'

export default function CategoryBar(props) {

    return (
        <div className="button-container">
            <select className="select select-category"
            onChange={e => {
                props.setCategory(e.target.value)
                props.getComponents(props.pageUrl, "all", e.target.value, "", "", "four")
            }}>
                <option value="artist">Artist</option>
                <option value="type">Type</option>
            </select>

            <select className="select select-sortby"
            onChange={e => props.setSortparam(e.target.value)}>
                <option value="deadline">Deadline</option>
                <option value="funding">Funding</option>
                <option value="goal">Goal</option>
            </select>
        </div>
    )
}