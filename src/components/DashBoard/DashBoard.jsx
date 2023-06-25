import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashBoard = () => {
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
    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={studentMarks}
            >
                <Line dataKey="physics"/>
                <Line stroke='green' dataKey="math"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
            </LineChart>
        </div>
    );
};

export default DashBoard;