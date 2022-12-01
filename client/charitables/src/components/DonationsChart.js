import React from 'react';

import Chart from '../components/charts/Chart';

const DonationsChart = (props) => {
  const chartData = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const donation of props.donations) {
    const donationMonth = donation.date.getMonth(); 
    chartData[donationMonth].value += donation.hours;
  }

  return <Chart dataPoints={chartData} />;
};

export default DonationsChart;