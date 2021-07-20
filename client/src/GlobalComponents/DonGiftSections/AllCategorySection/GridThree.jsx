/* eslint-disable react-hooks/exhaustive-deps */
import './Grid.scss'
import WindowDimensions from '../../../Hooks/WindowDimension'

export default function Grid (props) {

    // eslint-disable-next-line no-unused-vars
    const {height, width} = WindowDimensions()

    return (
        <div className="component-grid" style={{ display: 'grid',
        gridTemplateColumns: width <= 550? 'repeat(1, minmax(0, 1fr))':
        width <= 900? 'repeat(2, minmax(0, 1fr))':
        'repeat(3, minmax(0, 1fr))'
}}
        >
        {props.render}
        </div>
    )
}