import { Link } from "react-router-dom";

const AllBook = ({book}) => {
    let {id, name, writer, image} = book;
    return (
        <Link to={`/book/${id}`} className="border-2 border-[#f3f3f3] p-6 rounded-2xl">
            <div className="bg-[#f3f3f3] rounded-2xl mb-6">
                <img className="text-center mx-auto py-10" src={image}></img>
            </div>
            <div className="flex items-center justify-start gap-5 mb-6">
                <button className="text-sm font-medium text-[#23be0a] bg-[#f4fcf3] px-5 py-2 rounded-[30px]">Young Adult</button>
                <button className="text-sm font-medium text-[#23be0a] bg-[#f4fcf3] px-5 py-2 rounded-[30px]">Identity</button>
            </div>

            <h1 className="text-2xl font-bold mb-4">{name}</h1>
            <p className="text-lg font-medium border-b-2 pb-5 border-dashed border-[#d5d5d7]">By: {writer}</p>
            <div className="flex items-center justify-between mt-7">
                <p className="text-base font-medium text-[#131313]">Fiction</p>
                <div className="flex items-center justify-start gap-4">
                    <p className="text-base font-medium text-[#131313]" >5.00</p>
                    <img src="https://i.ibb.co/Mn1YfTR/Vector-2.png"></img>
                </div>
            </div>
        </Link>
    );
};

export default AllBook;