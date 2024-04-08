import './App.css'
import HorizontalBarChart from './components/HorizontalBarChart/HorizontalBarChart'
import { ChartDataType, ChartOptionsType } from './components/HorizontalBarChart/models'

function App() {
  
  const data: ChartDataType = {
    labels: ['Muhabura', 'Agaciro Block', 'Einstein'],
    datasets: [
        {
            label: 'Active',
            data: [200, 100, 350],
            backgroundColor: '#001cff',
        },
        {
            label: 'Inactive',
            data: [40, 70, 200],
            backgroundColor: '#b6681aaa',
        }
    ]
}
const options: ChartOptionsType = {
    indexAxis: 'y',
    layout: {
        padding: 2
    }
}

  return (
      <div>
        <h4>Distributed Assets Bar Chart</h4>
        <div className="bar">
          <HorizontalBarChart data={data} options={options}/>
        </div>
      </div>
  )
}

export default App
