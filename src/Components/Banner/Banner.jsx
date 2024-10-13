import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between bg-[#f3f3f3] px-32 py-20  rounded-3xl">
                <div>
                    <h1 className="text-6xl font-bold text-[#131313] pb-12">Books to freshen <br></br> up your bookshelf</h1>
                    <Link to='/books'>
                        <button className="btn btn-success text-white px-6">View The List</button>
                    </Link>
                </div>
                <div>
                    <img src="https://i.ibb.co/dKWs85N/pngwing-1.png"></img>
                </div>
            </div>
        </div>
    );
}
export default Banner;