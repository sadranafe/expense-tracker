
const Transaction = ({title , price , action}) => {
    return (
        <>
            <div className = 'bg-neutral-100 flex flex-wrap justify-between items-center px-5 p-3 my-4 rounded-xl shadow-md shadow-gray-300'>
                <div>
                    <p>{title}</p>
                </div>


                <div>
                    <p className =  {action === "withdraw" ? 'inline-block text-red-600' : "inline-block text-green-500" }>{action === "withdraw" && price !== 0 ? `$ ${Number(-price).toLocaleString()}` : `$ ${Number(price).toLocaleString()}` }</p>

                    <button className = 'inline-block ml-3 px-3 p-1 text-red-600'>
                        <i className = 'bx bx-trash text-lg'></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Transaction;