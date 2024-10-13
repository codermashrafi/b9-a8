const ReadBooks = ({book}) => {
    let {writer,image, Publisher,name,Year_of_Publishing, number_of_Pages, Rating} = book;
    return (
        <div className="border-2 border-[#d5d5d7] p-6 rounded-2xl mt-10">
            <div className="flex items-center justify-start gap-5">
                <div className="bg-[#f3f3f3] rounded-2xl mb-6 w-1/6">
                    <img className="text-center mx-auto py-10" src={image}></img>
                </div>
                <div className="w-5/6">
                    <h1 className="text-2xl font-bold mb-4">{name}</h1>
                    <p className="text-base font-medium ">By: {writer}</p>
                    <div className="flex items-center justify-start gap-5 mb-6 pt-3">
                        <p className="text-base font-extrabold text-[#131313]">Tag</p>
                        <button className="text-sm font-medium text-[#23be0a] bg-[#f4fcf3] px-5 py-2 rounded-[30px]">#Young Adult</button>
                        <button className="text-sm font-medium text-[#23be0a] bg-[#f4fcf3] px-5 py-2 rounded-[30px]">#Identity</button>
                        <div className="flex items-center justify-start gap-2">
                            <img src="https://i.ibb.co/TLrmX09/Frame-3.png"></img>
                            <p>Year of Publishing: {Year_of_Publishing}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-5 border-b-[1px] pb-3 border-[#d5d5d7]">
                        <div className="flex items-center justify-start gap-2">
                            <img src="https://i.ibb.co/fYH9Dsq/Vector-3.png"></img>
                            <p>Publisher: {Publisher}</p>
                        </div>
                        <div className="flex items-center justify-start gap-2 ">
                            <img src="https://i.ibb.co/nzMcjHg/Vector-4.png"></img>
                            <p>Page : {number_of_Pages}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-start gap-4 pt-4">
                        <button className="text-sm font-medium bg-[#e0eeff] text-[#328eff]  px-5 py-2 rounded-[30px]">Category: Classic</button>
                        <button className="text-sm font-medium bg-[#fff3e1] text-[#ffac33]  px-5 py-2 rounded-[30px]">Rating: {Rating}</button>
                        <button className="text-sm font-medium bg-[#23be0a] text-[#ffffff]  px-5 py-2 rounded-[30px]">View Details</button>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ReadBooks;