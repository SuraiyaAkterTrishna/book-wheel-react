import './App.css';
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';
import Activity from './components/Activity/Activity';
import React, { useEffect, useState } from 'react';

const style = {
  backgroundColor: 'rgb(242, 244, 250)',
}

function App() {
  const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } , []);
  
  return (
    <div className='grid lg:grid-cols-4 gap-4'>
      <div style={style} className='lg:col-span-3 lg:py-20 lg:px-32'>
        <Navbar></Navbar>
        <Books books = {books}></Books>
      </div>
      <div>
        <Activity></Activity>
      </div>
    </div>
  );
}

export default App;
