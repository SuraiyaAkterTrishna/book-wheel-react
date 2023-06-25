import React from 'react';

const Book = ({book}) => {
    const {id, image, age, time, name, detail} = book;
    return (
        <div>
            <h1>Name: {name}</h1>
        </div>
    );
};

export default Book;