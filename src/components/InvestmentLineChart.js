import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for the first chart
const data1 = [
  { name: 'January', uv: 4000 },
  { name: 'February', uv: 3000 },
  { name: 'March', uv: 2000 },
  { name: 'April', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'June', uv: 2390 },
  { name: 'July', uv: 3490 },
];

// Mock data for the second chart
const data2 = [
  { name: 'January', pv: 2400 },
  { name: 'February', pv: 1398 },
  { name: 'March', pv: 9800 },
  { name: 'April', pv: 3908 },
  { name: 'May', pv: 4800 },
  { name: 'June', pv: 3800 },
  { name: 'July', pv: 4300 },
];

const ResponsiveLineChart = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 w-full">
      <ResponsiveContainer width="100%" height={300} className="md:w-1/2">
        <LineChart
          data={data1}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      
      <ResponsiveContainer width="100%" height={300} className="md:w-1/2">
        <LineChart
          data={data2}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponsiveLineChart;
