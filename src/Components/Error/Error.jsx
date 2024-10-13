import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center pt-20">
            <h1 className="text-3xl text-black font-bold pb-3">Oops!!!</h1>
            <Link className="mt-5" to='/'>
                <button>Go Back To Home</button>
            </Link>
        </div>
    );
};

export default Error;