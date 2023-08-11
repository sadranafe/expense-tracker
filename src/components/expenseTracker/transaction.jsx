
const Transaction = ({title , price , action}) => {
    return (
        <>
            <div className = 'bg-neutral-100 flex flex-wrap justify-between items-center px-5 p-3 my-4 rounded-xl shadow-md shadow-gray-300'>
                <div>
                    <p>{title}</p>
                </div>


                <div>
                    <p className =  'inline-block'>{price}</p>

                    <button className = 'inline-block ml-3 px-3 p-1 text-red-600'>
                        <i className = 'bx bx-trash text-lg'></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Transaction;