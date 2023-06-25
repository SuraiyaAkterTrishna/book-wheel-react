import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } , []);
    return (
        <div>
            <h1 className='text-xl py-4 font-semibold px-2'>Select Today's Reading...</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 py-4'>
                {
                    books.map(book => <Book key={book.id} book = {book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;