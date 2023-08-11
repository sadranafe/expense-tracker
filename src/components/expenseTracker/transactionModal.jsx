import React from 'react';

const TransactionModal = () => {
    return (
        <>
            <form action = "#" className='w-screen h-screen fixed top-0 left-0 scale-110 transition-all'>

                <div className='w-full h-full left-0 top-0 bg-black z-10 opacity-70'></div>

                <div className='modal_content absolute top-1/2 left-1/2 z-20 -translate-x-2/4 -translate-y-2/4 bg-white p-8 px-14 w-3/12 rounded-xl'>

                    <button className='rounded-lg transition-all hover:bg-sky-950 hover:text-white translate-x-36 -translate-y-5 px-1'>
                        <i className='bx bx-x text-lg '></i>
                    </button>

                    <div>
                        <div className='w-full text-start mb-4'>
                            <label htmlFor="title">title :</label>
                            <div className="text-center">
                                <input type="text" autoComplete="off"  className='px-2 p-1 outline-none border-b-2 border-b-sky-800' id='title' placeholder='title' />
                            </div>
                        </div>

                        <div className='w-full text-start my-4'>
                            <label htmlFor="price">price :</label>
                            <div className="text-center">
                                <input type="number" autoComplete="off" className='px-2 p-1 outline-none border-b-2 border-b-sky-800' id='price' placeholder='price' />
                            </div>
                        </div>
                    </div>

                    <div className='pt-5 mt-7'>
                        <div onChange={actionChangeHandler} className="flex flex-wrap justify-between">
                            <p className="text-start w-full">Choose an action : </p>

                            <div className="text-start my-2">
                                <label htmlFor="deposit" className="pr-3 p-1 cursor-pointer">deposit</label>
                                <input type="radio" value="deposit" id="deposit" className="cursor-pointer" name="radio_btn" />
                            </div>

                            <div className="text-start mt-2">
                                <label htmlFor="withdraw" className="pr-3 p-1 cursor-pointer">withdraw</label>
                                <input type="radio" value="withdraw" id="withdraw" className="cursor-pointer" name="radio_btn" />
                            </div>
                        </div>
                    </div>

                    <button type='submit' className='capitalize disabled:cursor-not-allowed disabled:bg-gray-500 bg-sky-950 hover:bg-sky-800 transition-all text-white px-2 p-1 rounded-lg mt-5'>submit</button>
                </div>
            </form>
        </>
    );
};

export default TransactionModal;