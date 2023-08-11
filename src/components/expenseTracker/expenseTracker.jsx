import React from 'react';

const ExpenseTracker = () => {

    const DUMMY_TRANSACTION = [
        {
            title: "book",
            price: 20,
            action: "withdraw"
        }, {
            title: "trasnfer money",
            price: 500,
            action: "withdraw"
        }, {
            title: "add to card ",
            price: 1200,
            action: "deposit"
        }, {
            title: "add to card",
            price: 5000,
            action: "deposit"
        }
    ]

    return (
        <>
            <div className="bg-neutral-200 select-none w-screen h-screen flex flex-wrap justify-center content-center items-center">

                <div className="w-4/12 relative text-white bg-sky-950 shadow-xl shadow-gray-400 rounded-xl p-3 mb-10 py-10 flex flex-wrap justify-center items-center">
                    <h2 className="uppercase w-full text-center">current balance</h2>
                    <p className="mt-4 text-xl">$ 50,000</p>

                    <button className="py-1 mt-2 px-3 absolute right-32 top-16">
                        <i className="bx bx-hide text-xl"></i>
                    </button>

                    <div className="w-full px-5 mt-5">
                        <div className="income_expense flex flex-wrap justify-between">
                            <div className="income_wrapper">
                                <div className="flex flex-wrap items-center content-center">
                                    <i className="bx bx-up-arrow-circle text-2xl"></i>
                                    <div className="ml-2">
                                        <p>incomes</p>
                                        <p>$ 00.00</p>
                                    </div>
                                </div>
                            </div>


                            <div className="expense_wrapper">
                                <div className="flex flex-wrap items-center content-center">
                                    <i className="bx bx-down-arrow-circle text-2xl"></i>
                                    <div className="ml-2">
                                        <p>expenses</p>
                                        <p>$ 00.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="transaction_wrapper w-full text-center flex flex-wrap justify-center items-center">
                    <div className="w-full mb-5">
                        <button className="bg-yellow-400 p-2 rounded-lg hover:bg-yellow-500 transition-all">
                            Add new
                            <i className="bx bx-plus"></i>
                        </button>
                    </div>

                    <div className="w-full flex-wrap flex justify-center items-center">
                        <div className="w-6/12 flex flex-wrap justify-between items-center text-center">
                            <p className="capitalize">
                                <i className="bx bx-transfer-alt text-xl translate-y-1 mr-2"></i>
                                transactions
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-6/12 h-60 overflow-scroll'>
                    {
                        DUMMY_TRANSACTION.map((item, index) =>
                            <div key = {index}>
                                <div className = 'bg-neutral-100 flex flex-wrap justify-between items-center px-5 p-3 my-4 rounded-xl shadow-md shadow-gray-300'>
                                    <div>
                                        <p>{item.title}</p>
                                    </div>


                                    <div>
                                        <p className = 'inline-block'>{item.price}</p>

                                        <button className = 'inline-block ml-3 px-3 p-1 text-red-600'>
                                            <i className = 'bx bx-trash text-lg'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    );
};

export default ExpenseTracker;