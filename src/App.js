import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Activity from "./components/Activity/Activity";
import React, { useEffect, useState } from "react";
import Book from "./components/Book/Book";

const style = {
  backgroundColor: "rgb(242, 244, 250)",
};

function App() {
  const [books, setBooks] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const handleAddToList = (book) => {
    setTotalTime(totalTime + book.time);
  };

  return (
    <div className="grid lg:grid-cols-4 gap-4">
      <div style={style} className="lg:col-span-3 lg:py-20 lg:px-32">
        <Navbar></Navbar>
        {/* Books Section */}
        <div>
          <h1 className="text-3xl py-6 font-semibold px-2">
            Select Today's Reading...
          </h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 py-4">
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleAddToList={handleAddToList}
              ></Book>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Activity key={totalTime} totalTime={totalTime}></Activity>
      </div>
    </div>
  );
}

export default App;
