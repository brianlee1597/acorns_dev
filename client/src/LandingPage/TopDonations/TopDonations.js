// import { PureComponent } from 'react'

import './TopDonations.scss'
import Chart from './Chart'

const TopDonations = () => {
    return (
      <div id="top-donations">
          <div className="chart-title-container">
            <h3>가장 많이 기부한 팬덤 (달)</h3>
          </div>
          <Chart/>
          <div className="chart-button-container">
            <button className="see_chart_button">세부한 차트</button>
            <button className="see_data_button">모든 데이터</button>
          </div>
      </div>
    )
}

export default TopDonations