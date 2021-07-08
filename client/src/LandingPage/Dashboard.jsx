import './Dashboard.scss'
import Chart from './Chart/Chart'

const Dashboard = () => {
    return (
        <div id="dashboard-container">
            <h1>Community Statistics</h1>
            <Chart />
            {/* <div>
                Hello World
            </div> */}
        </div>
    )
}

export default Dashboard