import Book from '../Book/Book';

const Books = ({books}) => {
    
    return (
        <div>
            <h1 className='text-3xl py-6 font-semibold px-2'>Select Today's Reading...</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 py-4'>
                {
                    books.map(book => <Book 
                        key={book.id} 
                        book = {book} 
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;