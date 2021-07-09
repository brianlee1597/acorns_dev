// import { PureComponent } from 'react'

import './TopDonations.scss'
import Chart from './Chart'

const TopDonations = () => {
    return (
      <div id="top-donations">
          <div className="chart-title-container">
            <h3>Top 3 Most Donated Fandoms by Month</h3>
          </div>
          <Chart/>
          <div className="chart-button-container">
            <button className="see_chart_button">Detailed Chart</button>
            <button className="see_data_button">All Data</button>
          </div>
      </div>
    )
}

export default TopDonations