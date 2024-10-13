import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useLoaderData} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getStoredBooks } from '../../utility/localStorage';
import ReadBooks from '../ReadBooks/ReadBooks';




const Books = () => {

    let [storedBook, setStoreBook] = useState([])

    let books = useLoaderData();
    useEffect(() => {
        let storedbooksIds = getStoredBooks()
        if(books.length > 0 ){
            let bookStored = books.filter(book => storedbooksIds.includes(book.id));
            // console.log(books, storedbooksIds, bookStored)
            setStoreBook(bookStored);
        }
    },[])

    return (
        <div className="container mx-auto rounded-2xl">
            <div className='bg-[#f3f3f3] p-9 mb-10'>
                <h1 className="text-3xl font-bold text-[#131313] text-center">Books</h1>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            storedBook.map(book => <ReadBooks key={book.id} book={book}></ReadBooks>)
                        }
                    </TabPanel>


                    <TabPanel>
                    <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Books;