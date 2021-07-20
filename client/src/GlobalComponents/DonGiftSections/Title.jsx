import WindowDimensions from "../../Hooks/WindowDimension"
import { FaMapPin } from "react-icons/fa"

export default function Title (props) {

    // eslint-disable-next-line no-unused-vars
    const {height, width} = WindowDimensions()

    return (
        <h1 style={{
            margin: width <= 415 && props.pinned === true?  '0 0 0 3%': width <= 415? '0 0 0 3%': '0 0 10px 0%',
            padding: '0',
            fontSize: width <= 415? '1.25rem': '1.5rem',
            fontWeight: '600'
        }}><span style={{
            display: props.pinned === true? 'inline': 'none',
            fontSize: '1.75rem',
            color: 'rgb(255, 0, 0)',
            borderRadius: '50px'
            }}><FaMapPin/></span>{props.content}
        </h1>
    )
}