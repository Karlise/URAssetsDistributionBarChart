import React from 'react';
import Chart from 'react-apexcharts';
import { ChartDataType, ChartOptionsType } from './models';

interface HorizontalBarChartProps {
    data: ChartDataType;
    options: ChartOptionsType;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ data, options }) => {
    const series = data.datasets.map(dataset => ({
        name: dataset.label,
        data: dataset.data
    }));

    const paddingLeft = typeof options.layout?.padding === 'object' ? options.layout.padding.left || '' : '';

    const chartOptions = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: data.labels,
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            title: {
                text: options.indexAxis === 'y' ? paddingLeft : ''
            }
        },
        plotOptions: {
            bar: {
                horizontal: options.indexAxis === 'y'
            }
        },
        legend: {
            show: true
        }
    } as ApexCharts.ApexOptions;

    return (
        <div style={{ backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>
            <Chart options={chartOptions} series={series} type="bar" height={350} />
        </div>
    );
}

export default HorizontalBarChart;