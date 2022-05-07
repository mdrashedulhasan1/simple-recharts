import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'A Company',
          phone: 4000,
          tv: 2400,
          laptop: 2400,
        },
        {
          name: 'B Company',
          phone: 3000,
          tv: 1398,
          laptop: 2210,
        },
        {
          name: 'C Company',
          phone: 2000,
          tv: 9800,
          laptop: 2290,
        },
        {
          name: 'D Company',
          phone: 2780,
          tv: 3908,
          laptop: 2000,
        },
        {
          name: 'E Company',
          phone: 1890,
          tv: 4800,
          laptop: 2181,
        },
        {
          name: 'F Company',
          phone: 2390,
          tv: 3800,
          laptop: 2500,
        },
        {
          name: 'G Company',
          phone: 3490,
          tv: 4300,
          laptop: 2100,
        },
      ];
    return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="tv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="phone" stroke="#82ca9d" />
          <Line type="monotone" dataKey="laptop" stroke="red" />
        </LineChart>
    );
};

export default MyLineChart;