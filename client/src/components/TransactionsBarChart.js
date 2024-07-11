import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TransactionsBarChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.range),
        datasets: [
            {
                label: 'Number of Items',
                data: data.map(item => item.count),
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Number of Items per Price Range'
            }
        }
    };

    return (
        <div>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default TransactionsBarChart;




// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const TransactionsBarChart = ({ data }) => {
//     const chartData = {
//         labels: data.map(item => item.range),
//         datasets: [
//             {
//                 label: 'Number of Items',
//                 data: data.map(item => item.count),
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)'
//             }
//         ]
//     };

//     return (
//         <div>
//             <Bar data={chartData} />
//         </div>
//     );
// };

// export default TransactionsBarChart;
