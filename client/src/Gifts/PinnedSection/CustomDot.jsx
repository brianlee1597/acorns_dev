import './CustomDot.scss'

const CustomDot = ({ onClick, active }) => {
    return (
        <div 
        className={active? "dot-active": "dot-inactive"}
        onClick={() => onClick()}>-</div>
    )
}

export default CustomDot