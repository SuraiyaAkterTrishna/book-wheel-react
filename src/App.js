import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';

const style = {
  backgroundColor: 'rgb(242, 244, 250)',
}
function App() {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <div style={style} className='col-span-3 py-24 px-32'>
        <Header></Header>
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
