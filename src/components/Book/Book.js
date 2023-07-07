import React from "react";

const Book = ({book, handleAddToList}) => {
  const { id, image, age, time, name, detail } = book;
  
  return (
    <div className="card card-compact bg-base-100 shadow-xl mx-auto">
      <figure>
        <img className="w-full"
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body col-span-2">
        <h2 className="card-title text-xl">{name}</h2>
        <p>{detail}</p>
        <p>For Age: {age}</p>
        <p>Time Required: {time}s</p>
        <div className="card-actions">
          <button onClick={() =>{
            handleAddToList(book)
            
            }} className="btn btn-primary w-full">Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
