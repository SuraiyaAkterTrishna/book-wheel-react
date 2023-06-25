import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';

const style = {
  backgroundColor: 'rgb(242, 244, 250)',
}
function App() {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <div style={style} className='col-span-3 py-24 px-32'>
        <Navbar></Navbar>
        <Books></Books>
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
