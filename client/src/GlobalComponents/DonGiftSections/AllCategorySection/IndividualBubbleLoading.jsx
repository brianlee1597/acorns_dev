import ProgressBar from 'react-animated-progress-bar'
import './IndividualBubble.scss'

export default function IndividualBubbleLoading() {
    return (
        <div className="each-pinned-campaign">
            <div className="img-container" style={{background: '#f0f0f0'}}/>
            <div className="text-container">
                <div style={{margin: "10px 0px", width: '90%', height: "10px", background: '#f0f0f0'}}></div>
                <div style={{margin: "10px 0px", width: '60%', height: "10px", background: '#f0f0f0'}}></div>
            </div>
            <ProgressBar 
                width={"90%"}
                height="7px"
                rect
                fontColor="gray"
                percentage={"0"}
                trackPathColor="#f0f0f0"
            />
            <div className="description-container">
                <div style={{margin: "10px 0px", width: '90%', height: "10px", background: '#f0f0f0'}}></div>
                <div style={{margin: "10px 0px", width: '60%', height: "10px", background: '#f0f0f0'}}></div>
            </div>
        </div>
    )    
}