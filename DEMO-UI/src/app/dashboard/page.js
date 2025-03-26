"use client"; // Ensures Client-Side Rendering to fix hydration issues

import React, { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, 
  LineChart, Line 
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/dashboard-data");
      const jsonData = await response.json();
      setData(jsonData.finaloutput);
      setLastUpdated(new Date().toLocaleString());
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
    setLoading(false);
  };

  // 📌 Compute Request Type Distribution
  const requestTypeCounts = data.reduce((acc, record) => {
    const requestType = record.classification[0]?.Request_Type || "Unknown";
    acc[requestType] = (acc[requestType] || 0) + 1;
    return acc;
  }, {});

  const barChartData = Object.keys(requestTypeCounts).map((key) => ({
    name: key,
    count: requestTypeCounts[key],
  }));

  // 📌 Compute Stacked Bar Chart Data (Request Type → SubRequest Type)
  const stackedBarChartData = Object.values(
    data.reduce((acc, record) => {
      const requestType = record.classification[0]?.Request_Type || "Unknown";
      const subRequestType = record.classification[0]?.SubRequest_Type || "Unknown";

      if (!acc[requestType]) {
        acc[requestType] = { name: requestType };
      }
      acc[requestType][subRequestType] = (acc[requestType][subRequestType] || 0) + 1;

      return acc;
    }, {})
  );

  const uniqueSubRequestTypes = [
    ...new Set(data.map((item) => item.classification[0]?.SubRequest_Type || "Unknown")),
  ];

  // 📌 Confidence Score Distribution (Frequency Histogram)
  const confidenceBins = [0, 0.2, 0.4, 0.6, 0.8, 1];
  const confidenceDistribution = confidenceBins.map((bin, index) => ({
    bin: `${bin}-${confidenceBins[index + 1] || 1}`,
    count: data.filter(
      (record) =>
        record.classification[0]?.["Confidence Score"] >= bin &&
        record.classification[0]?.["Confidence Score"] < (confidenceBins[index + 1] || 1)
    ).length,
  }));

  // 📌 Compute Requests Over Time for Line Graph
  const requestsOverTime = data.reduce((acc, record) => {
    const timestamp = new Date(record.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    acc[timestamp] = (acc[timestamp] || 0) + 1;
    return acc;
  }, {});

  const lineChartData = Object.keys(requestsOverTime).map((time) => ({
    time,
    count: requestsOverTime[time],
  }));

  // 🎨 Colors for Charts
  const COLORS = ["#899fd8","#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c", "#d0ed57"];

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
          <Button onClick={fetchData} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh Data"}
          </Button>
        </div>
      </div>

      {/* Grid Layout for Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 📊 Stacked Bar Chart - Request Type & SubRequest Type */}
        <Card className="col-span-2">
          <CardContent>
            <h2 className="text-lg font-semibold">Request Type & SubRequest Type</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <BarChart width={1100} height={300} data={stackedBarChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {uniqueSubRequestTypes.map((type, index) => (
                  <Bar key={type} dataKey={type} stackId="a" fill={COLORS[index % COLORS.length]} />
                ))}
              </BarChart>
            )}
          </CardContent>
        </Card>

        {/* 📊 Pie Chart - Request Type Distribution */}
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">Request Type Distribution</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <PieChart width={400} height={300}>
                <Pie
                  data={Object.keys(requestTypeCounts).map((key, index) => ({
                    name: key,
                    value: requestTypeCounts[key],
                  }))}
                  cx={200}
                  cy={150}
                  outerRadius={100}
                  label
                >
                  {Object.keys(requestTypeCounts).map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            )}
          </CardContent>
        </Card>

        {/* 📊 Bar Chart - Confidence Score Frequency Distribution */}
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold">Confidence Score Distribution</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <BarChart width={500} height={300} data={confidenceDistribution}>
                <XAxis dataKey="bin" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#ff8042" />
              </BarChart>
            )}
          </CardContent>
        </Card>

        {/* 📈 Line Chart - Requests Over Time */}
        <Card className="col-span-2">
          <CardContent>
            <h2 className="text-lg font-semibold">Requests Processed Over Time</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <LineChart width={1100} height={300} data={lineChartData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
