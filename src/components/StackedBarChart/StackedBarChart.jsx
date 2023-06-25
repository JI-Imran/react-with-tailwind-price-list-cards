import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const studentMarks = [
    { studentId: 1, name: 'John', math: 85, physics: 92, chemistry: 78 },
    { studentId: 2, name: 'Emily', math: 76, physics: 85, chemistry: 90 },
    { studentId: 3, name: 'Michael', math: 92, physics: 88, chemistry: 86 },
    { studentId: 4, name: 'Sophia', math: 80, physics: 81, chemistry: 85 },
    { studentId: 5, name: 'Daniel', math: 78, physics: 86, chemistry: 90 },
    { studentId: 6, name: 'Olivia', math: 90, physics: 89, chemistry: 82 },
    { studentId: 7, name: 'William', math: 83, physics: 87, chemistry: 92 },
    { studentId: 8, name: 'Ava', math: 89, physics: 90, chemistry: 88 },
    { studentId: 9, name: 'Benjamin', math: 85, physics: 83, chemistry: 88 },
    { studentId: 10, name: 'Hayat', math: 90, physics: 92, chemistry: 86 }
  ];

const StackedBarChart = () => {
    return (
        <div className='ms-3'>
            <BarChart
            width={500}
            height={300}
            data={studentMarks}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            >
                <CartesianGrid/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
          <Bar dataKey="math" stackId="a" fill="#8884d8" />
          <Bar dataKey="physics" stackId="a" fill="#82ca9d" />
          <Bar dataKey="chemistry" stackId="a" fill="#000" />

            </BarChart>
        </div>
    );
};

export default StackedBarChart;