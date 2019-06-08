import React from 'react';
import { dateGenerator } from '../../helpers/chartDataGenerator'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const Charter = (props) => {
  
  let date = dateGenerator(new Date());
    const data = [
        {
          name: date[0], uv: props.sourceDataRight[0][1],  amt: 1060,
        },
        {
          name: date[1], uv: props.sourceDataRight[1][1], amt: 150,
        },
        {
          name: date[2], uv: props.sourceDataRight[2][1],  amt: 140,
        },
        {
          name: date[3], uv: props.sourceDataRight[3][1], amt: 130,
        },
        {
          name: date[4], uv: props.sourceDataRight[4][1],  amt: 220,
        },
        {
          name: date[5], uv: props.sourceDataRight[5][1],  amt: 210,
        },
        {
          name: date[6], uv: props.sourceDataRight[6][1],  amt: 0,
        },
    
      ];
    return(
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis dataKey="amt" />
        </LineChart>
    )
}

export default Charter;