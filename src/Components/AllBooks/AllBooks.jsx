import { useEffect, useState } from "react";
import AllBook from "../AllBook/AllBook";

const AllBooks = () => {

    let [books, setbooks] = useState([]);

    useEffect(() =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setbooks(data))
     },[ ]);
    return (
        <div className="container mx-auto mt-[100px]">
            <h2 className="text-4xl text-center font-bold text-[#131313] pb-12">Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    books.map(book =>(
                        <AllBook book={book} key={book.id}></AllBook>
                    ))
                }
            </div>
        </div>
    );
};

export default AllBooks;