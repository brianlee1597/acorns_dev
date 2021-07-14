import { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

export default class Example extends PureComponent {

    state = {
        chartData: []
    }

    componentDidMount = () => {
        this.setChartData()
    }

    setChartData = () => {
        axios.get("/api/chartdata")
        .then(res => this.setState({chartData: res.data}))
        .catch(error => console.log(error))
    }

    render() {
        const chart_data = this.state.chartData
        const chart__lr_margin = window.innerWidth <= 910? 30 : 50

        return (
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                  data={chart_data}
                  margin={{
                    top: 15,
                    right: chart__lr_margin,
                    left: chart__lr_margin
                  }}
                  className="linechart"
                >
                  <XAxis dataKey="month"/>
                  {/* <YAxis /> */}
                  <Tooltip />
                  {/* <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/> */}
                  <Line type="monotone" r={0} legendType="diamond" dataKey="BTS" stroke="#8884d8"/>
                  <Line type="monotone" r={0} legendType="diamond" dataKey="Aespa" stroke="#ADD8E6" />
                  <Line type="monotone" r={0} legendType="diamond" dataKey="Blackpink" stroke="pink" />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}