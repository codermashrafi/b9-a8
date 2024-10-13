import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="container mx-auto mb-12 mt-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><a>Home</a></Link>
                        <Link to='/books'><a>Listed Books</a></Link>
                        <Link to='/'><a>Pages to Read</a></Link>
                    </ul>
                    </div>
                    <p className="text-3xl font-bold">Book Vibe</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-lg font-normal text-[#131313]">
                        <Link className="mr-12" to='/'><a>Home</a></Link>
                        <Link className="mr-12" to='/books'><a>Listed Books</a></Link>
                        <Link className="mr-12" to='/pageToRead'><a>Pages to Read</a></Link>
                        <Link className="mr-12" to='/ScienceFiction'><a>Science Fiction</a></Link>

                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-success text-white px-6 mr-5">Sign In</button>
                    <button className="btn btn-info text-white px-6">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;