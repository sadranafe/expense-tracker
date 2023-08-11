const FilteredTransaction = ({selected , onfilteredHandler}) => {
    
    const dropDownHandler = ev => {
        onfilteredHandler(ev.target.value)
    }

    return (
        <>
            <div>
                <div>
                    <i className="bx bx-filter-alt text-xl mr-3"> : </i>
                    <select value = {selected} onChange = {dropDownHandler} name="dropdown" id="dropdown" className='appearance-none outline-none bg-transparent cursor-pointer'>
                        <option value="view all">view all</option>
                        <option value="deposit">deposit</option>
                        <option value="withdraw">withdraw</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default FilteredTransaction;