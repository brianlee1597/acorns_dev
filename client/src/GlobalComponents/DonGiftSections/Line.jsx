import WindowDimensions from "../../Hooks/WindowDimension"

export default function Line () {
    // eslint-disable-next-line no-unused-vars
    const {height, width} = WindowDimensions()
    
    return (
        <hr style={{
            display: width < 415? 'none': 'block',
            border: 'none',
            height: '1px',
            backgroundColor: 'rgb(200, 200, 200)',
            left: '0',
            right: '0',
            margin: 'auto',
            width: '97%'
        }}/>
    )
}