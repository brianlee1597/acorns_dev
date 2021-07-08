import './Chart.css'
import { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      BTS: 0,
      Aespa: 0,
      Blackpink: 0,
    },
    {
      name: 'Feb',
      BTS: 3000,
      Aespa: 1398,
      Blackpink: 2210,
    },
    {
      name: 'Mar',
      BTS: 2000,
      Aespa: 5000,
      Blackpink: 2290,
    },
    {
      name: 'Apr',
      BTS: 2780,
      Aespa: 3908,
      Blackpink: 2000,
    },
    {
      name: 'May',
      BTS: 1890,
      Aespa: 4800,
      Blackpink: 2181,
    },
    {
      name: 'Jun',
      BTS: 2390,
      Aespa: 3800,
      Blackpink: 2500,
    },
    {
      name: 'July',
      BTS: 3490,
      Aespa: 4300,
      Blackpink: 2100,
    },
];

export default class Example extends PureComponent {

    state = {
        opacity: {
          uv: 1,
          pv: 1,
        },
    };

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

    render() {
        const { opacity } = this.state;

        return (
            <div id="chart-container">
                <div id="chart">
                    <ResponsiveContainer width="90%" height="90%">
                        <LineChart
                          data={data}
                          margin={{
                            top: 30,
                            right: 30,
                            bottom: 10
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
                </div>
            </div>
        )
    }
}