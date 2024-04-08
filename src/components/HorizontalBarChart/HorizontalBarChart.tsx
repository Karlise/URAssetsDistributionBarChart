
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { ChartDataType, ChartOptionsType } from './models';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface HorizontalBarChartProps {
    data: ChartDataType;
    options: ChartOptionsType;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({data, options}) => {
    return (
        <div style={{backgroundColor: '#fff', borderRadius: 20, padding: 20}}>
            <Bar data={data} options={options}></Bar>
        </div>
    )
}
export default HorizontalBarChart;