import logo from './logo.svg';
import './App.css';
import { SideNav } from './Components/Dashboard/SideNav';
import { Product } from './Components/Product/Product';
import BarChart from './Components/Chart/ChartView';
import { DonutChart } from './Components/Chart/DonutChart';

function App() {
  return (
    <div>
      <div style={{display:"flex"}}>
        <div style={{width:"300px"}}>
         <SideNav/> 
      </div>
      <div style={{width:"70%",display:"flex",alignItems:"center",flexDirection:"column"}}>
        <div className='donat'>
         <div>
         <BarChart/>
         </div>
         <div>
         <DonutChart/>
         </div>
        </div>
        <Product/>
      </div>
      </div>
      </div>
  );
}

export default App;
