import {Link, useLoaderData, useParams} from 'react-router-dom'
import { saveBooks } from '../../utility/localStorage';

const BookDetails = () => {
    let details = useLoaderData();
    let {id} = useParams();
    let idInt = parseInt(id);
    let detail = details.find(detail => detail.id == idInt);

    let handlebooks = () =>{
        saveBooks(idInt);
    }

    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between gap-12'>
                <div className="bg-[#f3f3f3] rounded-2xl mb-6 w-1/2">
                    <img className="w-3/5 text-center mx-auto py-10" src={detail.image}></img>
                </div>
                <div className='w-1/2'>
                    <h1 className="text-4xl font-bold mb-4">{detail.name}</h1>
                    <p className="text-base font-medium border-b-[1px] pb-3 border-[#d5d5d7]">By: {detail.writer}</p>
                    <p className="text-base font-medium text-[#131313]  border-b-[1px] pb-3 pt-4 border-[#d5d5d7]">Fiction</p>
                    <p className="text-base font-extrabold text-[#131313] pt-6">Review: <span className='text-[#4e4e4e] font-normal'>{detail.review}</span></p>
                    <div className="flex items-center justify-start gap-5 mb-6 pt-12    border-b-[1px] pb-3 border-[#d5d5d7]">
                        <p className="text-base font-extrabold text-[#131313]">Tag</p>
                        <button className="text-sm font-medium text-[#23be0a] bg-[#f4fcf3] px-5 py-2 rounded-[30px]">#Young Adult</button>
                        <button className="text-sm font-medium text-[#23be0a] bg-[#f4fcf3] px-5 py-2 rounded-[30px]">#Identity</button>
                    </div>
                    <div className='space-y-3 pt-3'>
                        <p className="text-base font-normal text-[#131313]">Number of Pages:<span className='font-bold text-[#131313]'>{detail.number_of_Pages} </span></p>
                        <p className="text-base font-normal text-[#131313]">Publisher:<span className='font-bold text-[#131313]'> {detail.Publisher}</span></p>
                        <p className="text-base font-normal text-[#131313]">Year of Publishing:<span className='font-bold text-[#131313]'>{detail.Year_of_Publishing} </span></p>
                        <p className="text-base font-normal text-[#131313]">Rating:<span className='font-bold text-[#131313]'>{detail.Rating} </span></p>
                    </div>


                    <div className='mt-10 gap-5'>
                        <Link onClick={handlebooks} className='text-sm font-semibold text-[#131313]  px-9 py-5 border-[#b2b2b4] border-2 rounded-lg mr-5'>Read</Link>
                        <Link className='text-sm font-semibold text-white bg-[#50b1c9] px-9 py-5 rounded-lg'>Wishlist</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;