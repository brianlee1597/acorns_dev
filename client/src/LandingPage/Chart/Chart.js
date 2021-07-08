import './Chart.scss'
import { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

export default class Example extends PureComponent {

    state = {
        opacity: {
          BTS: 1,
          Aespa: 1,
          Blackpink: 1
        },
        chartData: []
    };

    componentDidMount = () => {
      this.setChartData()
    }

    handleMouseEnter = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;
    
        this.setState({
          opacity: { ...opacity, [dataKey]: 0.5 },
        });
    };
    
    handleMouseLeave = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;
    
        this.setState({
          opacity: { ...opacity, [dataKey]: 1 },
        });
    };

    setChartData = () => {
      axios.get("/api/chartdata")
      .then(res => this.setState({chartData: res.data}))
      .catch(error => console.log(error))
    }

    render() {
        const opacity = this.state.opacity
        const chart_data = this.state.chartData

        return (
          <div id="chart">
              <div className="chart-title-container">
                <h3>Top 3 Most Donated Fandoms by Month</h3>
              </div>
              <ResponsiveContainer width="100%" height="90%">
                  <LineChart
                    data={chart_data}
                    margin={{
                      top: 15,
                      right: 50,
                      left: 0
                    }}
                    className="linechart"
                  >
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                    <Line type="monotone" r={0} strokeOpacity={opacity.BTS} legendType="diamond" dataKey="BTS" stroke="#8884d8"/>
                    <Line type="monotone" r={0} strokeOpacity={opacity.Aespa} legendType="diamond" dataKey="Aespa" stroke="#ADD8E6" />
                    <Line type="monotone" r={0} strokeOpacity={opacity.Blackpink} legendType="diamond" dataKey="Blackpink" stroke="pink" />
                  </LineChart>
              </ResponsiveContainer>
              <div className="chart-button-container">
                <button className="see_chart_button">Detailed Chart</button>
                <button className="see_data_button">All Data</button>
              </div>
          </div>
        )
    }
}