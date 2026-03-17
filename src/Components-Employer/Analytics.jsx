import React from "react";
import "./Analytics.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip } from "chart.js";
import {XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,BarChart, Bar, AreaChart, Area, LabelList} from "recharts";

ChartJS.register(ArcElement, ChartTooltip);

const TriangleDot = (props) => {
  const { cx, cy, stroke } = props;
  return (
    <svg x={cx - 6} y={cy - 6} width={12} height={12} viewBox="0 0 12 12">
      <path
        d="M 6 1 L 11 10 L 1 10 Z" fill="white" stroke={stroke} strokeWidth={2} />
    </svg>
  );
};

export const Analytics = () => {
  const lineData = [
    { stage: "Total applicants", January: 1000, February: 880, March: 650 },
    { stage: "Application reviewed", January: 480, February: 400, March: 320 },
    { stage: "Shortlisted", January: 220, February: 180, March: 150 },
    { stage: "Interview called", January: 60, February: 50, March: 40 }
  ];

  const doughnutData = {
    labels: ["Hiring in progress", "Reviewing application", "Hiring done"],
    datasets: [
      {
        data: [45, 20, 35],
        backgroundColor: ["#f4c542", "#7b61ff", "#22c55e"],
        borderWidth: 0,
      },
    ],
  };

  const barData = [
    { name: "15-20+", Jan: 15.72, Feb: 24.85, Mar: 31.38 },
    { name: "10-15", Jan: 76.42, Feb: 59.3, Mar: 40.67 },
    { name: "5-10", Jan: 49.1, Feb: 55.52, Mar: 82.31 },
    { name: "1-5", Jan: 65.44, Feb: 84.35, Mar: 73.87 },
    { name: "Fresher", Jan: 31.11, Feb: 84.48, Mar: 54.15 }
  ];

  const doughnutOptions = {
    cutout: "75%",
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  };

  return (
    <div className="analytics-page">
      <div className="title-banner">
        <h1 className="page-title">Analytics</h1>
      </div>

      <div className="analytics-content">

        {/* Line Chart */}
        <div className="card line-card">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorJan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7b61ff" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#7b61ff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorFeb" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorMar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00bcd4" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#00bcd4" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
              <XAxis dataKey="stage" tick={{ fontSize: 11, fill: "#888" }} axisLine={{ stroke: '#e0e0e0' }} />
              <YAxis tick={{ fontSize: 11, fill: "#888" }} axisLine={{ stroke: '#e0e0e0' }} />
              <Tooltip />
              <Area type="linear" dataKey="January" stroke="#7b61ff" fill="url(#colorJan)" strokeWidth={2} dot={<TriangleDot stroke="#7b61ff" />} />
              <Area type="linear" dataKey="February" stroke="#ff6b6b" fill="url(#colorFeb)" strokeWidth={2} dot={<TriangleDot stroke="#ff6b6b" />} />
              <Area type="linear" dataKey="March" stroke="#00bcd4" fill="url(#colorMar)" strokeWidth={2} dot={<TriangleDot stroke="#00bcd4" />} />
            </AreaChart>
          </ResponsiveContainer>
          
          <div className="custom-legend-horizontal">
             <div className="legend-item"><span className="triangle-legend jan"></span> January</div>
             <div className="legend-item"><span className="triangle-legend feb"></span> February</div>
             <div className="legend-item"><span className="triangle-legend mar"></span> March</div>
          </div>
          <p className="chart-label">Applicants overview</p>
        </div>

        <div className="bottom-row">
            
        {/* Doughnut Chart */}
          <div className="card doughnut-card">
            <div className="doughnut-wrapper">
              <Doughnut data={doughnutData} options={doughnutOptions} />
              <div className="doughnut-center-text">March</div>
            </div>
            <div className="doughnut-legend-container">
              <div className="legend-row">
                <span className="square yellow"></span>
                <span className="legend-text">Hiring in progress</span>
              </div>
              <div className="legend-row">
                <span className="square purple"></span>
                <span className="legend-text">Reviewing application</span>
              </div>
              <div className="legend-row">
                <span className="square green"></span>
                <span className="legend-text">Hiring done</span>
              </div>
            </div>
            <p className="chart-label">Posted job status</p>
          </div>

            {/* Bar Chart */}
          <div className="card bar-card">
            <ResponsiveContainer width="110%" height={400}>
              <BarChart layout="vertical" data={barData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e0e0e0" />
                <XAxis type="number" domain={[0, 100]} orientation="top" tick={{ fontSize: 10 }} axisLine={{ stroke: '#e0e0e0' }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} axisLine={{ stroke: '#e0e0e0' }} />
                <Tooltip />
                <Bar dataKey="Jan" fill="#7b61ff" radius={[0, 4, 4, 0]} barSize={8}>
                    <LabelList dataKey="Jan" position="right" style={{ fontSize: '10px', fill: '#666' }} offset={10} />
                </Bar>
                <Bar dataKey="Feb" fill="#ff6b6b" radius={[0, 4, 4, 0]} barSize={8}>
                    <LabelList dataKey="Feb" position="right" style={{ fontSize: '10px', fill: '#666' }} offset={10} />
                </Bar>
                <Bar dataKey="Mar" fill="#00bcd4" radius={[0, 4, 4, 0]} barSize={8}>
                    <LabelList dataKey="Mar" position="right" style={{ fontSize: '10px', fill: '#666' }} offset={10} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="custom-legend-horizontal">
               <div className="legend-item"><span className="square jan"></span> January</div>
               <div className="legend-item"><span className="square feb"></span> February</div>
               <div className="legend-item"><span className="square mar"></span> March</div>
            </div>
            <p className="chart-label">Experience levels</p>
          </div>
        </div>
      </div>
    </div>
  );
};