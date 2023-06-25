import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';
import Activity from './components/Activity/Activity';

const style = {
  backgroundColor: 'rgb(242, 244, 250)',
}

function App() {
  
  
  return (
    <div className='grid lg:grid-cols-4 gap-4'>
      <div style={style} className='lg:col-span-3 lg:py-20 lg:px-32'>
        <Navbar></Navbar>
        <Books></Books>
      </div>
      <div>
        <Activity></Activity>
      </div>
    </div>
  );
}

export default App;
