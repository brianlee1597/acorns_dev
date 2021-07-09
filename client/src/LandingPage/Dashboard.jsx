import './Dashboard.scss'
import TopDonations from './TopDonations/TopDonations'

const Dashboard = () => {

    return (
        <>
        <h1 id="dashboard-title">Community Hub</h1>
        <div id="dashboard-container">
            <TopDonations />
            <div className="Gifts">
                <div className="top-user">
                    <div>
                        <h1>O</h1>
                        <div className="description">
                            <p>Ghosts have just as good a right—In every way, to fear the light, as men to fear the dark.</p>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="whatever">
                    <h1>hewwo Wolrd</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard