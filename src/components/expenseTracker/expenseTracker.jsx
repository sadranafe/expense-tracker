import React from 'react';

const ExpenseTracker = () => {
    return (
        <>
            <div className = "bg-neutral-200 select-none w-screen h-screen flex flex-wrap justify-center content-center items-center">

                <div className = "w-4/12 relative text-white bg-sky-950 shadow-xl shadow-gray-400 rounded-xl p-3 mb-10 py-10 flex flex-wrap justify-center items-center">
                    <h2 className = "uppercase w-full text-center">current balance</h2>
                    <p className = "mt-4 text-xl">$ 50,000</p>

                    <button className = "py-1 mt-2 px-3 absolute right-32 top-16">
                        <i className = "bx bx-hide text-xl"></i>
                    </button>

                    <div className = "w-full px-5 mt-5">
                        <div className = "income_expense flex flex-wrap justify-between">
                            <div className = "income_wrapper">
                                <div className = "flex flex-wrap items-center content-center">
                                    <i className = "bx bx-up-arrow-circle text-2xl"></i>
                                    <div className = "ml-2">
                                        <p>incomes</p>
                                        <p>$ 00.00</p>
                                    </div>
                                </div>
                            </div>


                            <div className = "expense_wrapper">
                                <div className = "flex flex-wrap items-center content-center">
                                    <i className = "bx bx-down-arrow-circle text-2xl"></i>
                                    <div className = "ml-2">
                                        <p>expenses</p>
                                        <p>$ 00.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "transaction_wrapper w-full text-center flex flex-wrap justify-center items-center">
                    <div className = "w-full mb-5">
                        <button className = "bg-yellow-400 p-2 rounded-lg hover:bg-yellow-500 transition-all">
                            Add new
                            <i className = "bx bx-plus"></i>
                        </button>
                    </div>

                    <div className = "w-full flex-wrap flex justify-center items-center">
                        <div className = "w-6/12 flex flex-wrap justify-between items-center text-center">
                            <p className = "capitalize">
                                <i className = "bx bx-transfer-alt text-xl translate-y-1 mr-2"></i>
                                transactions
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ExpenseTracker;