import React from 'react';
import { chartDataGenerator } from '../../helpers/chartDataGenerator'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const Charter = (props) => {

  let data = chartDataGenerator(new Date(), props.sourceDataRight);
  
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