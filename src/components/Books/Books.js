import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => console.log(data))
    } , []);
    return (
        <div>
            <h1 className='text-xl py-4 font-semibold px-2'>Select Today's Reading...</h1>
            <div>

            </div>
        </div>
    );
};

export default Books;