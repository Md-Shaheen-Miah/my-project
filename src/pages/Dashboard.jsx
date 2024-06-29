import React from 'react';

import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const cardStyle = {
    backgroundColor:'#efdfbb',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    boxShadow: '0 8px 10px rgba(0, 0, 0, 0.1)',
  };

  const chartContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  };

  const card = (title, value) => (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const barData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{marginTop:'50px',minHeight: '100vh',backgroundColor:'#ffffff'}}>
    
      <h1 style={{ textAlign: 'center' }}>Admin Dashboard</h1>
      <div style={{backgroundColor:'#f9d9da',borderRadius:'5px', boxShadow: '0 12px 10px rgba(0, 0, 0, 0.1)', border: '1px solid #ddd'}}>
      <div style={cardContainerStyle}>
        {card('Total Sales', '$5,000')}
        {card('Total Orders', '300')}
        {card('Total Customers', '200')}
        {card('Total Products', '150')}
      </div>
      </div>
      <div style={chartContainerStyle}>
        <div style={{ width: '45%', marginBottom: '20px' }}>
          <h3>Sales Over Time</h3>
          <Line data={lineData} />
        </div>
        <div style={{ width: '45%', marginBottom: '20px' }}>
          <h3>Product Votes</h3>
          <Bar data={barData} />
        </div>
        <div style={{ width: '45%', marginBottom: '20px' }}>
          <h3>Category Distribution</h3>
          <Pie style={{boxShadow:'0 12px 10px rgba(0, 0, 0, 0.1)'}} data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
