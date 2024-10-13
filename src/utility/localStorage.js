let getStoredBooks = () =>{
    let storedBooks = localStorage.getItem('all-books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }else{
        return [];
    }
}


let saveBooks = id =>{
    let storedAllBooks = getStoredBooks();
    let exist = storedAllBooks.find(jobId => jobId === id);
    if(!exist){
        storedAllBooks.push(id);
        localStorage.setItem('all-books', JSON.stringify(storedAllBooks))
    }
}

export {getStoredBooks, saveBooks}